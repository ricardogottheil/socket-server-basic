const Server = require('./utils/server');
require('dotenv').config();

const server = new Server();

server.start();
