const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
console.log(io+"kkk")

io.on("connection", socket => {
    console.log("what um?")
    socket.emit("your id", socket.id);
    console.log("eheh")
    socket.on("send message", body => {
        io.emit("message", body)
    })
})

server.listen(8000, () => console.log("server is running on port 8000"))