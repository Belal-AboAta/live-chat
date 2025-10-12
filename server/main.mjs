import express from "express";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";

var app = express();
var http = createServer(app);
var io = new SocketIOServer(http);

io.on("connection", function (socket) {
  console.log("user connected");
  socket.on("chat message", function (msg) {
    io.emit("chat message", msg);
  });
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});

http.listen(3000, function () {
  console.log("listening on *:3000");
});
