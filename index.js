// Node.js server requirements
const express = require("express");
const socketio = require("socket.io");
const app = express();
const path = require("path");

// Configure socket.io server
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Run when client connects
io.on("connection", (socket) => {
  binance.websockets.miniTicker((markets) => {
    socket.emit("markets", markets);
  });
});

// Define server port as localhost:3000
server.listen(3000, () => {
  console.log(`Server listening on http://localhost:${3000}`);
});

// node-binance-api requirements
const Binance = require("node-binance-api");
const binance = new Binance().options({
  APIKEY: process.env.APIKEY,
  APISECRET: process.env.APISECRET,
});
