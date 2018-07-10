var url = "";
var connection = new WebSocket(url, "rust-websocket");
var playerPos = [0, 0, 0];
var otherPos = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

connection.onopen = onOpen;
connection.onclose = onClose;
connection.onerror = onError;
connection.onmessage = onMessage;

function onOpen() {
  console.log("connection success");
}

function onClose(event) {
  console.log(event);
}

function onError(error) {
  console.log(error);
}

function onMessage(message) {
  let data = JSON.parse(message.data);
  console.log(data);
}

function sendPos(pos) {
  let posArr = [pos.x, pos.y, pos.z];
  let data = JSON.stringify(posArr)
  connection.send(data);
  console.log(data);
}
