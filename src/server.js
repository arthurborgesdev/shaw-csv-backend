const express = require('express');
const cors = require('cors');
const { dbConnect } = require('./db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

dbConnect();

app.use(cors());

app.use(userRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});