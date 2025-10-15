import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";

import {
  users,
  getUser,
  setUserConnectionStatus,
  toggleUserSelection,
  setUserTypingStatus,
} from "./users.mjs";

var app = express();
var http = createServer(app);
var io = new SocketIOServer(http, {
  cors: {
    origin: "*",
  },
});

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.get("/users", function (_, res) {
  res.json(users);
});

app.get("/user", function (_, res) {
  const user = getUser();
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "No available users" });
  }
});

io.on("connection", function (socket) {
  socket.on("user connected", function (userId) {
    setUserConnectionStatus(userId, true);
    toggleUserSelection(userId, true);
    io.emit("connected users", users);
    console.log("a user connected");
    console.log(users);
  });

  socket.on("user disconnected", function (userId) {
    toggleUserSelection(userId, false);
    setUserConnectionStatus(userId, false);
    io.emit("connected users", users);
    console.log("a user disconnected");
    console.log(users);
  });

  socket.on("user typing", function (user) {
    setUserTypingStatus(user.id, true);
    io.emit("user typing", users);
  });

  socket.on("user stop typing", function (user) {
    setUserTypingStatus(user.id, false);
    io.emit("user stop typing", users);
  });

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
