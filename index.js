// Package requirements
const WebSocket = require("ws");

// Node.js server requirements
const express = require("express");
const app = express();

// Binance stream
const ws = new WebSocket(
  "wss://stream.binance.com/stream?streams=btcusdt@ticker_1h"
);

// Define a new array to add stream data
let tickerData = [];

// Get data from stream with WebSocket
ws.on("message", function message(data) {
  let parsedData = JSON.parse(data);
  // Add data as json object to use GET API
  tickerData.push(parsedData);
});

// GET API
app.route("/").get(function (req, res, next) {
  res.json(tickerData);
});

// Define server port as localhost:8080
app.listen(8080, () => {
  console.log(`Server listening on http://localhost:${8080}`);
});
