require('dotenv').config();
const mongoose = require('mongoose');

async function dbConnect() {
  try {
    await mongoose.connect(`mongodb://localhost@127.0.0.1:27017/`, {
      auth: {
        username: process.env.MONGO_INITDB_ROOT_USERNAME,
        password: process.env.MONGO_INITDB_ROOT_PASSWORD
      },
      directConnection: true,
      useNewUrlParser: true
    });
    console.log('Connected to MongoDB!');
    return mongoose.connection;
  } catch (e) {
    console.log(e);
  }
}

async function dbClose() {
  await mongoose.connection.close();
}

module.exports = {
  dbConnect,
  dbClose
}