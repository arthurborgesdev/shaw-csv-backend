# shaw-csv-backend
REST API in Node to load and query CSV

## About
This backend project receives CSV files using a RESTful Node API, saves them locally as files and in MongoDB.
It also has an endpoint to query the data saved in the database.

## Technologies

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

## App Initialization

### Docker instructions

Run docker compose command
`docker-compose -f docker-compose.yml up`

### Other useful commands:

`docker ps` -> Get container ID

`docker logs <container id>` -> Print app output

`docker exec -it <container id> /bin/bash` -> Get into the container

`docker kill <container id>` -> Shutdown the image


## Start the server

Dev: `npm run dev` will trigger nodemon for local testing

## Tests

### Unit
`npm run test:unit`

### Integration
`npm run test:integration`

### Full tests

`npm run test`
