const express = require('express')
require('dotenv').config()
const cors = require('cors')
const jwt = require('jsonwebtoken')
var admin = require('firebase-admin')
const decoded = Buffer.from(process.env.FB_SERVICE_KEY, 'base64').toString(
  'utf-8'
)
var serviceAccount = JSON.parse(decoded)
const { getAuth } = require('firebase-admin/auth')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})
const cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const port = process.env.PORT || 3000
const app = express()
// middleware
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
)
app.use(express.json())
app.use(cookieParser())
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

// jwt middlewares
const verifyJWT = async (req, res, next) => {
  const token = req?.headers?.authorization?.split(' ')[1]
  // const token = req?.cookies?.token
  console.log(token)
  if (!token) return res.status(401).send({ message: 'Unauthorized Access!' })
  try {
    const decoded = await admin.auth().verifyIdToken(token)
    req.tokenEmail = decoded.email
    console.log(decoded)
    next()
  } catch (err) {
    console.log(err)
    return res.status(401).send({ message: 'Unauthorized Access!' })
  }
  // verify token using firebase admin sdk

  // jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
  //   if (err) {
  //     console.log(err)
  //     return res.status(401).send({ message: 'Unauthorized Access!' })
  //   }
  //   req.tokenEmail = decoded.email
  //   next()
  // })
}

async function run() {
  try {
    const database = client.db('coffee-store')
    const coffeeCollection = database.collection('coffees')
    const orderCollection = database.collection('orders')

    // generate jwt
    app.post('/jwt', (req, res) => {
      // user hocche payload/data
      const user = { email: req.body.email }

      // token creation (payload/data encode)
      const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {
        expiresIn: '7d',
      })

      res
        .cookie('token', token, {
          httpOnly: true,
          secure: false,
        })
        .send({ message: 'JWT Created Successfully!' })

      // send token in response for localstorage method
      // res.send({ token, message: 'JWT Created Successfully!' })
    })

    app.get('/coffees', async (req, res) => {
      const allCoffees = await coffeeCollection.find().toArray()
      console.log(allCoffees)
      res.send(allCoffees)
    })
    // save a coffee data in database through post request
    app.post('/add-coffee', async (req, res) => {
      const coffeeData = req.body
      const quantity = coffeeData.quantity
      // convert string quantity to number type value
      coffeeData.quantity = parseInt(quantity)
      const result = await coffeeCollection.insertOne(coffeeData)
      console.log(result)

      res.status(201).send({ ...result, message: 'Data paisi vai, thanks' })
    })

    // get a single coffee by id
    app.get('/coffee/:id', async (req, res) => {
      const id = req.params.id
      const filter = { _id: new ObjectId(id) }
      const coffee = await coffeeCollection.findOne(filter)
      console.log(coffee)
      res.send(coffee)
    })

    // get a single coffee by id
    app.get('/my-coffees/:email', async (req, res) => {
      const email = req.params.email
      const filter = { email }
      const coffees = await coffeeCollection.find(filter).toArray()
      console.log(coffees)
      res.send(coffees)
    })

    // handle like toggle
    app.patch('/like/:coffeeId', async (req, res) => {
      const id = req.params.coffeeId
      const email = req.body.email
      const filter = { _id: new ObjectId(id) }
      const coffee = await coffeeCollection.findOne(filter)
      // check if the user has already liked the coffee or not
      const alreadyLiked = coffee?.likedBy.includes(email)
      console.log(
        'ekdom shurute like er obostha---> alreadyLiked: ',
        alreadyLiked
      )
      const updateDoc = alreadyLiked
        ? {
            $pull: {
              // dislike coffee (pop email from likedBy array)
              likedBy: email,
            },
          }
        : {
            $addToSet: {
              // Like coffee (push email in likedBy array)
              likedBy: email,
            },
          }

      await coffeeCollection.updateOne(filter, updateDoc)

      console.log(
        'ekdom sheshe like er obostha---> alreadyLiked: ',
        !alreadyLiked
      )

      res.send({
        message: alreadyLiked ? 'Dislike Successful' : 'Like Successful',
        liked: !alreadyLiked,
      })
    })

    // handle order
    // save a coffee data in database through post request
    app.post('/place-order/:coffeeId', async (req, res) => {
      const id = req.params.coffeeId
      const orderData = req.body
      console.log(orderData)
      // save order data in db
      const result = await orderCollection.insertOne(orderData)
      if (result.acknowledged) {
        // update quantity from coffee collection
        await coffeeCollection.updateOne(
          { _id: new ObjectId(id) },
          {
            $inc: {
              quantity: -1,
            },
          }
        )
      }

      res.status(201).send(result)
    })

    // get all orders by customer email
    app.get('/my-orders/:email', verifyJWT, async (req, res) => {
      const decodedEmail = req.tokenEmail
      const email = req.params.email

      console.log('Email from JWT TOKEN---->', decodedEmail)
      console.log('Email from Params---->', email)

      if (decodedEmail !== email) {
        return res.status(403).send({ message: 'Forbidden Access!' })
      }
      const filter = { customerEmail: email }
      const allOrders = await orderCollection.find(filter).toArray()
      // const newOrders = allOrders.map(async order => {
      //   const orderId = order.coffeeId
      //   const fullCoffeeData = await coffeeCollection.findOne({
      //     _id: new ObjectId(orderId),
      //   })
      //   order.name = fullCoffeeData.name

      //   return order
      // })

      for (const order of allOrders) {
        const orderId = order.coffeeId
        const fullCoffeeData = await coffeeCollection.findOne({
          _id: new ObjectId(orderId),
        })
        order.name = fullCoffeeData.name
        order.photo = fullCoffeeData.photo
        order.price = fullCoffeeData.price
        order.quantity = fullCoffeeData.quantity
      }

      res.send(allOrders)
    })

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Welcome to Coffee Store Server')
})

app.listen(port, () => {
  console.log(`server running at port ${port}`)
})
