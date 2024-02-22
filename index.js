import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

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

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
