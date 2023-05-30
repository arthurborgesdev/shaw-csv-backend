const express = require('express');
const multer = require('multer');
const csv = require('csvtojson');

const app = express();

const upload = multer({ dest: 'uploads/' });
const port = 3000;

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

  res.status(200).send(csvObj);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});