const csv = require('csvtojson');
const User = require('../models/User');

exports.createUser = async (req, res) => {
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

  try {
    await User.insertMany(csvObj);
    res.status(200).send(csvObj);
  } catch (e) {
    console.log(e);
    res.status(500).send(`Error saving CSV file to database: ${e}`);
  }
};