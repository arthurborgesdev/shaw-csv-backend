const request = require('supertest');
const { dbConnect, dbClose } = require('../../db');
const { exampleObj, emptyObj } = require('../helperObj.js');

const baseUrl = 'http://127.0.0.1:3000';
let connection = null;

beforeAll(async () => {
  connection = await dbConnect();
  const [dbCollections] = await connection.db.collections();
  if (dbCollections.collectionName === 'users') {
    await connection.db.dropCollection('users');
  }
});

beforeEach(async () => {

})

afterAll(async () => {
  setTimeout(() => dbClose(), 500);
});

describe('Save CSV to Database as documents', () => {
  test('It should response the POST method', async () => {
    const response = await request(baseUrl).post('/api/files').attach('csv-file', `${__dirname}/../example.csv`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(exampleObj);
  });
});

