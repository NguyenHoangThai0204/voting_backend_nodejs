const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { default: mongoose } = require('mongoose')
const cors = require('cors');
const routerUser = require("./src/routes/UserRoute")
const routerPoll = require("./src/routes/PollRoute")
const routerVote = require("./src/routes/VoteRoute")

app.use(bodyParser.json({limit: '50mb'}))



app.use(cors())
app.use(morgan('common'))

// 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/user',routerUser)

app.use('/api/user',routerPoll)

app.use('/api/user',routerVote)
// Kết nối mongodb

dotenv.config(); // dùng để đọc file .env

const connectToMongoDB = async ()=>{
  try{
    await mongoose.connect(`${process.env.MONGO_DB}`);
    console.log('Connected to MongoDB successfully!');
  }catch (error ){
    console.log('Error connecting to mongodb' , error.message);
  }

}


app.listen(port, () => {
  connectToMongoDB();
  console.log(`Example app listening on port ${port}`)
})


// app.get('/api', (req, res) => {
//   res.send('Hello World!')
// })