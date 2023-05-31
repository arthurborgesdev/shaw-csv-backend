const csv = require('csvtojson');

const exampleObj = [
  {
    name: 'John Doe',
    city: 'New York',
    country: 'USA',
    favorite_sport: 'Basketball'
  },
  {
    name: 'Jane Smith',
    city: 'London',
    country: 'UK',
    favorite_sport: 'Football'
  },
  {
    name: 'Mike Johnson',
    city: 'Paris',
    country: 'France',
    favorite_sport: 'Tennis'
  },
  {
    name: 'Karen Lee',
    city: 'Tokyo',
    country: 'Japan',
    favorite_sport: 'Swimming'
  },
  {
    name: 'Tom Brown',
    city: 'Sydney',
    country: 'Australia',
    favorite_sport: 'Running'
  },
  {
    name: 'Emma Wilson',
    city: 'Berlin',
    country: 'Germany',
    favorite_sport: 'Basketball'
  }
];

const emptyObj = [];

test('should parse CSV file correctly', async () => {
  const csvObj = await csv().fromFile('src/tests/unit/example.csv');
  expect(csvObj).toEqual(exampleObj);
});

test('should output empty response if CSV is empty', async () => {
  const csvObj = await csv().fromFile('src/tests/unit/empty.csv');
  expect(csvObj).toEqual(emptyObj);
});
