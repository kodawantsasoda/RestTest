require('dotenv').config()

const express = require('express')  //pull in express functions
const app = express() //actually configure express app
const mongoose = require('mongoose')

//note we pull from env to not give sensitive info out
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}) //connect to database 'subscribers is database name
const db = mongoose.connection //database
db.on('error', (error) => console.error(error)) //error checking
db.once('open', () => console.log('Connected to Database')) //connecting

app.use(express.json()) //accept json

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))

