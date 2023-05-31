const request = require('supertest');
const { dbConnect, dbClose } = require('../../db');
const { exampleObj, emptyObj } = require('../helperObj.js');
const User = require('../../models/User');

const baseUrl = 'http://127.0.0.1:3000';
let connection = null;

const tokyoObj = [
  {
    name: 'Karen Lee',
    city: 'Tokyo',
    country: 'Japan',
    favorite_sport: 'Swimming'
  }
]

const tokyoAndBasketballObj = [
  {
    name: 'John Doe',
    city: 'New York',
    country: 'USA',
    favorite_sport: 'Basketball'
  },
  {
    name: 'Karen Lee',
    city: 'Tokyo',
    country: 'Japan',
    favorite_sport: 'Swimming'
  },
  {
    name: 'Emma Wilson',
    city: 'Berlin',
    country: 'Germany',
    favorite_sport: 'Basketball'
  },
]

beforeAll(async () => {
  connection = await dbConnect();
  const [dbCollections] = await connection.db.collections();
  if (dbCollections.collectionName === 'users') {
    await connection.db.dropCollection('users');
  }
  User.insertMany(exampleObj);
});

afterAll(async () => {
  setTimeout(() => dbClose(), 500);
});

describe('Search in CSV for passed query parameters', () => {
  test('It should respond to the GET method', async () => {
    const response = await request(baseUrl).get('/api/users').query({ q: 'Tokyo'});
    expect(response.statusCode).toBe(200);
  });

  test('It should not allow requests without query parameter', async () => {
    const response = await request(baseUrl).get('/api/users');
    expect(response.statusCode).toBe(400);
  });

  test('It should not allow requests with more than one query parameter', async () => {
    const response = await request(baseUrl).get('/api/users').query({ q: 'Tokyo', other: 'something'});
    expect(response.statusCode).toBe(400);
  });

  test('It should not allow requests without ?q= query parameter', async () => {
    const response = await request(baseUrl).get('/api/users').query({ other: 'something'});
    expect(response.statusCode).toBe(400);
  });

  test('It should return objects that contain only "Tokyo" in one or more of its fields', async () => {
    const response = await request(baseUrl).get('/api/users').query({ q: 'Tokyo'});
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(tokyoObj);
  });

  test('It should return objects that contain only "Tokyo" and "Basketball" in one or more of its fields (multi-field search)', async () => {
    const response = await request(baseUrl).get('/api/users').query({ q: 'Tokyo,Basketball'});
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(tokyoAndBasketballObj);
  });
});

