const csv = require('csvtojson');
const User = require('../models/User');
const path = require('path');

exports.createUser = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send(`${req.method} method not allowed`);
  }

  const fileExtension = path.extname(req.file.originalname);
  if (!fileExtension.includes('.csv')) {
    return res.status(400).send("Please submit a CSV file");
  }

  let csvObj = null;

  try {
    csvObj = await csv().fromFile(req.file.path);
  } catch (e) {
    res.status(500).send(`Error parsing CSV file: ${e}`);
  }

  try {
    await User.insertMany(csvObj);
    res.status(200).send(csvObj);
  } catch (e) {
    res.status(500).send(`Error saving CSV file to database: ${e}`);
  }
};

exports.searchUser = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).send(`${req.method} method not allowed`);
  }

  const queries = req.query;

  if (!queries || !queries.q) {
    return res.status(400).send('You should provide a valid ?q= query, comma separated');
  }

  if (Object.keys(queries).length > 1) {
    return res.status(400).send('For this application, please provide a single ?q= query, with one or more values, comma separated');
  }

  // Here we guarantee that only one ?q= is provided

  const searchTerms = queries.q.split(',');

  const users = await User.find({
    $or: [
      { name: { $in: searchTerms } },
      { city: { $in: searchTerms } },
      { country: { $in: searchTerms } },
      { favorite_sport: { $in: searchTerms } },
    ]
  }, {__v: 0, _id: 0});

  res.send(users);
}