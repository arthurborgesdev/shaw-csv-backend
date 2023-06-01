# shaw-csv-backend
REST API in Node to load and query CSV

## About
This backend project receives CSV files using a RESTful Node API, saves them locally as files and in MongoDB.
It also has an endpoint to query the data saved in the database.

## Built with

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- CsvtoJSON
- Nodemon
- Docker
- Jest
- Supertest
- Dotenv

## Setup

*** This backend project should be used with the frontend, located at [shaw-csv-frontend](https://github.com/arthurborgesdev/shaw-csv-frontend), however, it is also a standalone RESTful API, which can be used with Postman/Insomnia or other mean that communicates with HTTP REST endpoints ***

- Get the link of the repository: `git@github.com:arthurborgesdev/shaw-csv-frontend.git`
- Clone it as `git@github.com:arthurborgesdev/shaw-csv-frontend.git` on a Terminal
- Change directory to it by `cd shaw-csv-frontend`
- Run `npm i` on a Terminal

This project can be setup with Docker (preferred way if you don't have MongoDB installed or don't want to install it) or with a locally installed Mongo.

### Docker instructions

Run docker compose command
`docker-compose -f docker-compose.yml up`

#### Other useful commands:

`docker ps` -> Get container ID

`docker logs <container id>` -> Print app output

`docker exec -it <container id> /bin/bash` -> Get into the container

`docker kill <container id>` -> Shutdown the container

### Localy MongoDB installed version

- Install MongoDB according to your OS instructions if you don't have it installed
- Run it accordingly to your OS instructions
- Enter in the mongo shell by typing `mongosh` on a Terminal
- Create a `root` user with `pass` password (Step necessary to match the config for Docker and Nodejs env variable):

```console
  use admin
  db.createUser(
  ... {
  ... user: "root",
  ... pwd:  "pass",
  ... roles: [ { role: "root", db: "admin" }]
  ... }
  ... )
```

## Start the server

`npm run dev` will run nodemon for local testing

## Tests

### Unit
`npm run test:unit`

### Integration
`npm run test:integration`

### Full tests

`npm run test`

## Usage endpoints
### Load CSV File
`POST 127.0.0.1:3000/api/files`

multipart/form-data

csv-file: "example.csv"

Return: Loaded CSV as a array of objects

### Query the loaded CSV File
`GET 127.0.0.1:3000/api/users?q=term1,term2,term3`

queries: term1,term2,term3

Return: Filtered CSV related to the provided queries

## Author

👤 **Arthur Borges**