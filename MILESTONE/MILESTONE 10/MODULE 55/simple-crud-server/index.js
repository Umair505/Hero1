const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Simple Express Server is running!');
});

const uri = "mongodb+srv://simpleDbUser:vDRPMGCpBF4mH6YC@cluster0.aerwfuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const userCollection = client.db('testDb').collection('users');

        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log('Data received on server:', user);
            const result = await userCollection.insertOne(user);
            res.send(result);
        });

        await client.db('admin').command({ ping: 1 });
        console.log("Connected to MongoDB successfully!");
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
