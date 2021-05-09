# Chat Application using Socket.io

`ALERT: Project may have errors and mistakes.`

Okay so this is one of the most widely used forms of server-client systems and learning about socket.io is a must. The backend or the server side runs on Node and communication is established using Socket.io.

### PREVIEW

![alt-text](https://github.com/divyagahlot99/React/blob/main/chat-application/chatapplication-using-Socket.io/chatsockets.gif)

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

  - Create Server by creating a file `server.js` and typing in the following code:

```
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);


server.listen(8000, () => console.log("server is running on port 8000"))
```

  - Start the server using `node server.js`

### CLIENT (React)

  - For the Client, we need to create the react ui. In the same directory, type in `npx create-react-app` to Initialise the react app.

  - On the server side we need to install the following dependencies:
    * Socket.io-client `npm install socket.io-client` 
    * Styled components `npm install styled-components`


Now once both server and client are up and running, we need to use the `.emit`and `.on` methods of the socket.io library. Put it in your application wherever you wish to exchange data between server and client.

To complete the running of the project, clone this particular directory and run it with the above 2 commands `node server.js` for the backend and `npm start` for the react UI. 

Then, open 2 browsers and type `localhost:3000` in both. Make sure `proxy` is added in package.json of the React UI client. You should see the application up and running. Enjoy!
