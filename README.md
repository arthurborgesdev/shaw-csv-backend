# shaw-csv-backend
REST API in Node to load and query CSV

## About
This backend project receives CSV files using a RESTful Node API, saves them locally as files and in MongoDB.
It also has an endpoint to query the data saved in the database.

## Commands

Dev: `npm run dev` will trigger nodemon for local tests

## Technologies

- Node.js
- Express.js
- MongoDB
- Multer
- CsvtoJSON
- Nodemon
- Docker

## App Initialization

### Docker instructions

Run docker compose command
`docker-compose -f docker-compose.yml up`

### Other useful commands:

`docker ps` -> Get container ID

`docker logs <container id>` -> Print app output

`docker exec -it <container id> /bin/bash` -> Get into the container

`docker kill <container id>` -> Shutdown the image
