require('dotenv').config()
const express = require('express');
const multer = require('multer');
const csv = require('csvtojson');
const mongoose = require('mongoose');

const app = express();

const upload = multer({ dest: 'uploads/' });
const port = 3000;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://mongo:27017/csv`, {
    directConnection: true,
    useNewUrlParser: true
  });

  const csvSchema = new mongoose.Schema({
    name: String,
    city: String,
    country: String,
    favorite_sport: String,
  });

  const Csv = mongoose.model('Csv', csvSchema);
}

app.post('/api/files', upload.single('csv-file'), async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send(`${req.method} method Not Allowed`);
  }

  let csvObj = null;
  try {
    csvObj = await csv().fromFile(req.file.path);
  } catch (e) {
    console.log(e);
    res.status(500).send(`Error parsing CSV file: ${e}`);
  }

  const csvModel = new Csv(csvObj);
  await csvModel.save();

  res.status(200).send(csvObj);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});