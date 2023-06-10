const http = require("http");
const express = require("express");
const app = express();
const io = require("socket.io");

const httpServer = http.createServer(app).listen(3000);
// 3000번 포트에서 서버를 오픈한다.

const socketServer = io(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
