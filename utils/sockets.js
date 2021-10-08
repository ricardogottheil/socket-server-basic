class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // On Connection
    this.io.on('connection', (socket) => {
      console.log('Client connected');

      socket.on('message-to-server', (payload) => {
        console.log(payload);

        this.io.emit('message-to-client', payload);
      });

      //   socket.emit('welcome-message', {
      //     msg: 'Welcome to the chat',
      //     date: new Date(),
      //   });

      //   socket.on('client-message', (payload) => {
      //     console.log(payload);
      //   });
    });
  }
}

module.exports = Sockets;
