const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

var users = []

io.on("connection", socket => {
    const currId = socket.id
    console.log( socket.client.conn.server.clientsCount + " users connected" );
    socket.emit("your id", socket.id);
    // socket.emit("onlinePlayers", users)
    socket.on("canvas-data", body => {
        io.emit("canvas-data", body)
    })
    socket.on("my id", name => {
        users.push({"objectId": currId, "name":name})
        console.table(users);
    })
    socket.on('disconnect', function() {
        console.log('Got disconnected!');
        users = users.filter(item => item.objectId != currId)
        console.table(users)
    });
})

server.listen(8000, () => console.log("server is running on port 8000"))
