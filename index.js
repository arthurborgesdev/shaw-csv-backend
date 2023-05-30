const express = require('express');
const multer = require('multer');
const csv = require('csvtojson');

const app = express();

const upload = multer({ dest: 'uploads/' });
const port = 3000;

app.post('/api/files', upload.single('csv-file'), (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send(`${req.method} method Not Allowed`);
  }

  csv().fromFile(req.file.path).then((jsonObj) => {
    console.log(jsonObj);
  });

  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});