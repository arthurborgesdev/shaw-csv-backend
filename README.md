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

## Docker instructions
### Node.js image

- Build the image
`docker build . -t <your username>/shaw-csv-backend`

- Run the image
`docker run -p 3000:3000 -d <your username>/shaw-csv-backend`

### MongoDB image



### Other useful commands:
`docker ps` -> Get container ID
`docker logs <container id>` -> Print app output
`docker exec -it <container id> /bin/bash` -> Get into the container
`docker kill <container id>` -> Shutdown the image
