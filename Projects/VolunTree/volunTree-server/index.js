const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//Firebase JWT verification middleware
const admin = require("firebase-admin");

const decoded = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, 'base64').toString('utf8');
const serviceAccount = JSON.parse(decoded);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Middleware to verify Firebase JWT
const verifyFirebaseToken = async (req, res, next) => {
  try {
    const authHeader = req.headers?.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = await admin.auth().verifyIdToken(token);

    if (!decodedToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    console.log("✅ Verified decodedToken:", decodedToken);

    // optionally attach to req.user
    req.tokenEmail = decodedToken.email;

    next();
  } catch (error) {
    console.error("❌ Token verification error:", error);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (should be done once at application startup)
    // await client.connect();
    // console.log("Connected to MongoDB");

    const db = client.db("volunTreeDB");
    const volunteerPostCollection = db.collection("volunteerPost");
    const volunteerRequestsCollection = db.collection('volunteerRequests');
    // Volunteer Need Post
    app.post("/volunteer-need", async (req, res) => {
      try {
        const volPost = req.body;

        // Basic validation
        if (!volPost || Object.keys(volPost).length === 0) {
          return res.status(400).json({ error: "Request body is empty" });
        }

        // Required fields validation (customize as needed)
        const requiredFields = ["title", "description", "category", "location"];
        for (const field of requiredFields) {
          if (!volPost[field]) {
            return res.status(400).json({ error: `${field} is required` });
          }
        }

        // Add timestamp
        volPost.createdAt = new Date();

        const result = await volunteerPostCollection.insertOne(volPost);

        // Successful creation should return 201 status
        res.status(201).json({
          success: true,
          insertedId: result.insertedId,
          message: "Volunteer post created successfully",
        });
      } catch (error) {
        console.error("Error creating volunteer post:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // Get All Volunteer Need Posts sorted by upcoming deadline (ascending order)
    app.get("/volunteer-need-post", async (req, res) => {
      try {
        const volunteerNeedPosts = await volunteerPostCollection
          .find()
          .sort({ deadline: 1 }) // 1 for ascending order (earliest first)
          .limit(6)
          .toArray(); // Don't forget the parentheses for toArray()

        res.status(200).json({
          success: true,
          count: volunteerNeedPosts.length,
          data: volunteerNeedPosts,
        });
      } catch (error) {
        console.error("Error fetching volunteer posts:", error);
        res.status(500).json({
          success: false,
          error: "Internal server error",
        });
      }
    });
    app.get("/volunteer-posts", async (req, res) => {
      try {
        const volunteerNeedPosts = await volunteerPostCollection
          .find()
          .sort({ deadline: 1 }) // 1 for ascending order (earliest first)
          .toArray();
        res.status(200).json({
          success: true,
          count: volunteerNeedPosts.length,
          data: volunteerNeedPosts,
        });
      } catch (error) {
        console.error("Error fetching volunteer posts:", error);
        res.status(500).json({
          success: false,
          error: "Internal server error",
        });
      }
    });

    //Get Posts by Id
    app.get("/volunteer-need-post/:id",async(req,res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        try {
            const post = await volunteerPostCollection.findOne(filter);
            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }
            res.status(200).json({ success: true, data: post });
        } catch (error) {
            console.error("Error fetching volunteer post by ID:", error);
            res.status(500).json({ error: "Internal server error" });
        }
        res.send(post);
    })
    // Get Request by PostId
    app.get("/volunteer-requests-by-post/:postId", async (req, res) => {
        try {
            const postId = req.params.postId;
            const request = await volunteerRequestsCollection.findOne({ postId });
            
            if (!request) {
                return res.status(404).json({ 
                    success: false,
                    message: "Request not found" 
                });
            }
            
            res.status(200).json({ 
                success: true,
                data: request 
            });
        } catch (error) {
            console.error("Error fetching volunteer request:", error);
            res.status(500).json({ 
                success: false,
                message: "Internal server error" 
            });
        }
    });

    //Get Posts by Id My posts
    app.get('/my-volunteer-posts/:email',verifyFirebaseToken,async(req,res)=>{
        const email = req.params.email;
        const decodedEmail = req.tokenEmail;
        console.log("🚀 ~ email:", email, decodedEmail);
        if (email !== decodedEmail) {
            return res.status(403).json({ error: "Forbidden: You can only access your own posts" });
        }
        const filter = {
            organizerEmail: email
        };
        const posts = await volunteerPostCollection.find(filter).toArray();
        res.send(posts);

    })

// ✅ UPDATE volunteer post by ID
    app.put('/volunteer-need-post/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, error: 'Invalid ID format' });
        }

        const updateFields = req.body;

        const filter = { _id: new ObjectId(id) };
        const updateDoc = { $set: updateFields };

        const result = await volunteerPostCollection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
        return res.status(404).json({ success: false, error: 'Post not found' });
        }

        res.status(200).json({
        success: true,
        message: 'Volunteer post updated successfully',
        modifiedCount: result.modifiedCount
        });

    } catch (error) {
        console.error('Error updating volunteer post:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
    });


    // Delete my posts
    app.delete('/volunteer-need-post/:id',async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await volunteerPostCollection.deleteOne(query);
        res.send(result);
    })

    // Create volunteer request
    app.post('/volunteer-requests/:email',verifyFirebaseToken, async (req, res) => {
            const requestData = req.body;
            const email = req.params.email;
            const decodedEmail = req.tokenEmail;

            if (email !== decodedEmail) {
                return res.status(403).json({ error: "Forbidden: You can only access your own posts" });
            }
        try { 
           
            // Basic validation
            if (!requestData.postId || !requestData.volunteerEmail) {
                return res.status(400).json({ error: "Missing required fields" });
            }

            // Add timestamp
            requestData.createdAt = new Date();

            const result = await volunteerRequestsCollection.insertOne(requestData);

            res.status(201).json({
                success: true,
                insertedId: result.insertedId,
                message: "Volunteer request created successfully"
            });
        } catch (error) {
            console.error("Error creating volunteer request:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // Decrement volunteers needed count
    app.patch('/volunteer-need-post/:id/decrement-volunteers', async (req, res) => {
        try {
            const id = req.params.id;

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({ error: "Invalid ID format" });
            }

            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $inc: { volunteersNeeded: -1 }
            };

            const result = await volunteerPostCollection.updateOne(filter, updateDoc);

            if (result.matchedCount === 0) {
                return res.status(404).json({ error: "Post not found" });
            }

            res.status(200).json({
                success: true,
                message: "Volunteer count decremented successfully"
            });
        } catch (error) {
            console.error("Error decrementing volunteer count:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // Get volunteer requests for a specific email
    app.get('/volunteer-requests/:email',verifyFirebaseToken, async (req, res) => {
            const email = req.params.email;
            const decodedEmail = req.tokenEmail;

            if (email !== decodedEmail) {
                return res.status(403).json({ error: "Forbidden: You can only access your own posts" });
            }
        try {
            const email = req.params.email;
            const requests = await volunteerRequestsCollection.find({ volunteerEmail: email }).toArray();
            res.status(200).json(requests);
        } catch (error) {
            console.error("Error fetching volunteer requests:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // Withdraw  my volunteer request
    app.delete('/volunteer-requests/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const result = await volunteerRequestsCollection.deleteOne({ _id: new ObjectId(id) });
            if (result.deletedCount === 0) {
                return res.status(404).json({ error: "Request not found" });
            }
            res.status(200).json({ success: true, message: "Request withdrawn successfully" });
        } catch (error) {
            console.error("Error withdrawing volunteer request:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });



  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if can't connect to DB
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  console.log("🚀 ~ app.get ~ req.user:", req.user);
  res.send("Welcome To VolunTree");
});
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
