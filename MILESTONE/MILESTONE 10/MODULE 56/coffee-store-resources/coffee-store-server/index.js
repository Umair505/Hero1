const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aerwfuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// MongoDB Client
const client = new MongoClient(uri, {
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

    const coffeeCollection = client.db("coffeeDB").collection("coffees");
    const userCollection = client.db("coffeeDB").collection("users");
    // Get all coffees
    app.get("/coffees", async (req, res) => {
      // const cursor = coffeeCollection.find();
      // const result = await cursor.toArray();
      const result = await coffeeCollection.find().toArray();
      res.send(result);
    });

    // Get a single coffee
    app.get("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const coffee = await coffeeCollection.findOne(query);
      res.send(coffee);
    });

    // Post a new coffee
    app.post("/coffees", async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    });
    
    // Update a coffee
    app.put("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCoffee = req.body;

      const updateDoc = {
        $set: updateCoffee,
      };

      const result = await coffeeCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    //Delete a coffee
    app.delete("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });

    // User related APIs
    app.post("/users",async(req,res)=>{
      const userProfile = req.body;
      const result = await userCollection.insertOne(userProfile);
      res.send(result);
    })

    app.get("/users",async(req,res)=>{
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

     app.delete("/users/:id",async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await userCollection.deleteOne(query);
      res.send(result);
     })

     app.patch("/users",async(req,res)=>{
      const {email,lastSignInTime} = req.body;
      const filter = {email:email};
      const updatedDoc ={
        $set:{
          lastSignInTime:lastSignInTime
        }
      }
      const result = await userCollection.updateOne(filter,updatedDoc);
      res.send(result);
     })
    // Ping the database
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
}

// Run connection
run().catch(console.dir);

// Default route
app.get("/", (req, res) => {
  res.send("☕ Coffee server is getting hotter!");
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Coffee server is running on port ${port}`);
});
