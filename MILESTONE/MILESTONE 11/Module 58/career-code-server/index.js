const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');

//JSON WEB TOKEN
const jwt = require('jsonwebtoken');


require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.aerwfuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true//allow cookies
}));
app.use(express.json());

app.use(cookieParser()); // Middleware to parse cookies


const verifyToken = (req,res,next)=>{
  const token = req?.cookies?.token;
  if(!token){
    return res.status(401).send({message:"Unauthorized access"});
  }
  console.log("Token from cookies:", token);
  jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
    if(err){
      return res.status(401).send({message:"Unauthorized access"})
    }
    req.decoded = decoded;
    next();
  })
}

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

    //JWT Token Related API
    app.post('/jwt',(req,res)=>{
      const userData = req.body;
      const token = jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:'1d'});
     
      //Set the token in a cookie
      res.cookie('token', token, {
        httpOnly: true, // Make the cookie HTTP-only
        secure: false
      });
      
     
      res.send({success:true})
    })

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

    app.get('/applications',verifyToken,async(req,res)=>{
      const email = req.query.email;

      // console.log("Inside application",req.cookies);
      if(email!== req.decoded.email){
        return res.status(403).send({message:"Forbidden access"});
      }
      
      const query = {
        applicant:email
      }
      const result = await applicationsCollection.find(query).toArray();
     

      //Bad way to aggregate data
      for(const application of result){
        const jobId = application.jobId;
        const jobQuery = {_id:new ObjectId(jobId)};
        const job = await jobsCollection.findOne(jobQuery);
        application.company = job.company;
        application.jobTitle = job.title;
        application.company_logo = job.company_logo;
      }
       res.send(result);
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