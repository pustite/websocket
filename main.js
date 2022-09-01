
 window.addEventListener("DOMContentLoaded", () => {

let btcUsdt = document.getElementById('btc-usdt');
let ethUsdt = document.getElementById('eth-usdt');
let xrpUsdt = document.getElementById('xrp-usdt');

let new_socket = new WebSocket('wss://stream.binance.com:9443/stream?streams=btcusdt@aggTrade/ethusdt@aggTrade/xrpusdt@aggTrade');
new_socket.onmessage = (event) => {
    
    let stream = JSON.parse(event.data);
    if ((stream.data.s) === 'BTCUSDT') {
        btcUsdt.innerText = Number(stream.data.p).toFixed(2);
    }
    else if ((stream.data.s) === 'ETHUSDT') {
      ethUsdt.innerText = parseFloat(stream.data.p).toFixed(2);
    }
    else if ((stream.data.s) === 'XRPUSDT') {
      xrpUsdt.innerText = Number(stream.data.p).toFixed(2);
    }

    console.log(event.data);
}

// function subscribeBinance () {
//     const data = {
//     "method": "SUBSCRIBE",
//     "params": [
//       "btcusdt@aggTrade",
//       "btcusdt@depth"
//     ],
//     "id": 1
//   }

//   let new_socket = new WebSocket('wss://stream.binance.com:9443stream?streams=<streamName1>/<streamName2>/<streamName3>', data);
  
//   new_socket.onmessage = (event) => {
//     console.log(event.data);
//     }
// }

 });