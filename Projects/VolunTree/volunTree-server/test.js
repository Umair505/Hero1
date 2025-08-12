const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const gardenerData = require("./gardenersData.json");

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();

    const db = client.db("leafyDb");
    const gardenerCollection = db.collection("gardeners");
    const gardenerTipsCollection = db.collection("tips");

    // Check if collection is empty before inserting
    const count = await gardenerCollection.countDocuments();
    if (count === 0) {
      await gardenerCollection.insertMany(gardenerData);
      console.log("Inserted gardener data");
    }

    // Featured gardeners route
    app.get("/gardeners/featured", async (req, res) => {
      try {
        const featuredGardeners = await gardenerCollection
          .find({ status: "Active" })
          .limit(6)
          .toArray();
        res.json(featuredGardeners);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
      }
    });

    // All gardeners route
    app.get("/gardeners", async (req, res) => {
      try {
        const allGardeners = await gardenerCollection.find().toArray();
        res.json(allGardeners);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
      }
    });

    //Gardeners Tips post
    app.post("/garden-tips", async (req, res) => {
      const tip = req.body;
      const result = await gardenerTipsCollection.insertOne(tip);
      res.send(result);
    });

    // Featured gardeners route
    app.get("/gardeners/tips", async (req, res) => {
      try {
        const featuredTips = await gardenerTipsCollection
          .find({  availability: "Public" })
          .limit(6)
          .toArray();
        res.json(featuredTips);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
      }
    });

    // Get All public garden tips
    app.get("/garden-tips", async (req, res) => {
      try {
        const result = await gardenerTipsCollection
          .find({ availability: "Public" })
          .toArray();
        res.status(200).json(result);
      } catch (error) {
        console.error("Error fetching garden tips:", error);
        res.status(500).json({ error: "Failed to retrieve garden tips" });
      }
    });

    // Get Single garden tip
    app.get("/tip/:id", async (req, res) => {
      try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ error: "Invalid tip ID" });
        }

        const query = { _id: new ObjectId(id) };
        const singleTip = await gardenerTipsCollection.findOne(query);

        if (!singleTip) {
          return res.status(404).json({ error: "Tip not found" });
        }

        res.json(singleTip);
      } catch (error) {
        console.error("Error fetching single tip:", error);
        res.status(500).json({ error: "Server error" });
      }
    });

    //Get My Tips
    app.get("/my-tips/:email", async (req, res) => {
      try {
        const email = req.params.email;
        const filter = { userEmail: email };
        const tips = await gardenerTipsCollection.find(filter).toArray();
        res.send(tips);
      } catch (error) {
        console.error("Error fetching tips:", error);
        res.status(500).send({ error: "Failed to fetch tips" });
      }
    });

    app.put("/tips/:id", async (req, res) => {
      try {
        const id = req.params.id;
        // Validate the ID parameter
        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ error: "Invalid tip ID" });
        }

        const filter = { _id: new ObjectId(id) };
        const updateTip = req.body;

        // Validate the request body
        if (!updateTip || Object.keys(updateTip).length === 0) {
          return res
            .status(400)
            .json({ error: "Request body cannot be empty" });
        }

        const updateDoc = {
          $set: updateTip,
        };

        const result = await gardenerTipsCollection.updateOne(
          filter,
          updateDoc // Use updateDoc instead of updateTip directly
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ error: "Tip not found" });
        }

        res.status(200).json(result);
      } catch (error) {
        console.error("Error updating tip:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    //Delete a tips
    app.delete("/tips/:id",async(req,res)=>{
      const id = req.params.id;
      const query = {_id:new ObjectId(id)};
      const result = await gardenerTipsCollection.deleteOne(query);
      res.send(result);
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to LeafyWorld");
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
