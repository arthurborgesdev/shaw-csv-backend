require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

async function serverInit() {
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
  } catch (e) {
    console.log(e);
  }
}

serverInit();

app.use(userRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});