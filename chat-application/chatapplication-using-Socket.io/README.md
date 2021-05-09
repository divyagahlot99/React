# Chat Application using Socket.io

Okay so this is one of the most widely used forms of server-client systems and learning about socket.io is a must. The backend or the server side runs on Node and communication is established using Socket.io.

<br/>


## To create Real-time connection between a Client and Server using Socket.io:

In your favourite code editor: 

1. First create a project directory `chat-application`. Move  to the directory using `cd chat-application`.
2. We need to create a server and Client here.

<br/>

### SERVER (Express)


  - On the server side we need to install the following dependencies:
    * Express `npm install express`
    * Socket.io `npm install socket.io`

  - Create Server by creating a file `Server.js` and typing in the following code:

```
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);


server.listen(8000, () => console.log("server is running on port 8000"))
```


### CLIENT (React)

  - For the Client, we need to create the react ui. In the same directory, type in `npx create-react-app` to Initialise the react app.

  - On the server side we need to install the following dependencies:
    * Socket.io-client `npm install socket.io-client` 
    * Styled components `npm install styled-components`
