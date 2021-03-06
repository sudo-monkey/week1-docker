require('dotenv').config();
const mongoose = require('mongoose')

const DB = "mongodb://mongo:27017/simpleserverdb"

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected'))
  .catch(err => console.log('DB CONNECTED ERROR: ', err))