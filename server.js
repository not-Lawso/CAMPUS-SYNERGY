// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle connections from clients
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Listen for chat messages
    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', msg);  // Broadcast the message to all clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
