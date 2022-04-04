//import express app
const app = require('./app');
//secret variables
require('dotenv').config()
//http
const http = require('http');
//create port
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen( port, () => {
  console.log('Listening on port ' + port);
})