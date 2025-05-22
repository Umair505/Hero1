const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Coffee server is getting hotter!');
});

app.listen(port,()=>{
    console.log(`Coffee server is running on port ${port}`);
})