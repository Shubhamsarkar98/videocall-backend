import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from 'dotenv'
const app = express();
const server = http.createServer(app);
const io = new Server(server);
dotenv.config()
const port = process.env.port
io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });

    socket.on("Chat massage", (msg) => {
        console.log("Message received: " + msg);
        io.emit("chat message", msg);
    });
});
app.post('/api/posts', (req, res) => {
    // You can access the POST data from req.body
    const postData = req.body;
    console.log('Received data:', postData);
  
    // Respond with a success message
    res.status(200).send('Post received successfully');
  });

app.post('/login', (req, res) => {
    req.body='username'
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
