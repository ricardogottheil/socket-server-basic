const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const cors = require('cors');
const Sockets = require('./sockets');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    // http server
    this.server = http.createServer(this.app);

    // Config socket server
    this.io = socketio(this.server, {
      /* options */
    });
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Deploy public directory
    this.app.use(express.static(path.resolve(__dirname, '../public')));
  }

  socketsConfig() {
    new Sockets(this.io);
  }

  start() {
    // Init middleware
    this.middlewares();

    // Init sockets
    this.socketsConfig();

    // start server
    this.server.listen(this.port, () => {
      console.log('Server running on port ' + this.port);
    });
  }
}

module.exports = Server;
