const socket = io();

socket.on("markets", (data) => {
  renderData(data);
});

// Render ticker data
function renderData(marketData) {
  const number = document.getElementById("number");
  number.innerHTML = marketData.BTCUSDT.close;
  console.log(number);
}
