var url = "";
const connection = new WebSocket(url, "rust-websocket");

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
  let data = JSON.stringfy(pos)
  connection.send(data);
  console.log(data);
}
