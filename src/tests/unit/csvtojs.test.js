const csv = require('csvtojson');
const { exampleObj, emptyObj } = require('../helperObj.js');

test('should parse CSV file correctly', async () => {
  const csvObj = await csv().fromFile('src/tests/example.csv');
  expect(csvObj).toEqual(exampleObj);
});

test('should output empty response if CSV is empty', async () => {
  const csvObj = await csv().fromFile('src/tests/empty.csv');
  expect(csvObj).toEqual(emptyObj);
});

module.exports = {
  exampleObj,
  emptyObj
}