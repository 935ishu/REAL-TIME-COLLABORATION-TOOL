const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

let sharedText = '';

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.emit('load_text', sharedText);

  socket.on('text_change', (newText) => {
    sharedText = newText;
    socket.broadcast.emit('text_change', newText);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});