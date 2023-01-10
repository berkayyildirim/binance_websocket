// Binance WebSocket Stream Package requirements
const WebSocket = require("ws");

// WebSocket Server Requirement
const { Server } = require("ws");

// Node.js server requirements
const express = require("express");
const app = express();

// Create Browser's Server
const server = express()
  .use((req, res) => res.sendFile("/index.html", { root: __dirname }))
  .listen(3000, () => console.log(`Listening on ${3000}`));

// Get Binance Stream with WebSocket
const ws = new WebSocket(
  "wss://stream.binance.com/stream?streams=btcusdt@ticker_1h"
);

// Create WebSocket Server
const webSocketServer = new Server({ port: 8080 });

// Send Data to the Client
setInterval(() => {
  webSocketServer.clients.forEach((client) => {
    // Send Data to the Client
    ws.on("message", function message(data) {
      let parsedData = JSON.parse(data);
      // Send the last price
      client.send(parsedData.data.c);
    });
  });
}, 1000);
