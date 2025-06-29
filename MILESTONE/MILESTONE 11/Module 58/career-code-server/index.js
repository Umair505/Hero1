const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.aerwfuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const jobsCollection = client.db('career-code').collection('jobs');
    const applicationsCollection =client.db('career-code').collection('applications');
    //Jobs API
    app.get('/jobs',async(req,res)=>{
        const cursor = jobsCollection.find();
        const jobs = await cursor.toArray();
        res.send(jobs);
    })

    //Single Job API
    app.get('/jobs/:id',async(req,res)=>{
      const id = req.params.id;
      const query ={_id:new ObjectId(id)};
      const job = await jobsCollection.findOne(query);
      if(!job){
        return res.status(404).send({message: "Job not found"});
      }
      res.send(job);
    })

    // Apply for a job
    app.post('/applications',async(req,res)=>{
        const application = req.body;
        const result = await applicationsCollection.insertOne(application);
        res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Welcome to the Career Code Server!');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});