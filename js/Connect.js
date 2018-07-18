var connection = new WebSocket("ws://192.168.0.21:2794", "rust-websocket");
var initFlag = true;
var playerID = 0;
var playerPos = [[0, 4, 0], [0, 4, 0], [0, 4, 0], [0, 4, 0]];
var itemType = new Array();
var itemPos = new Array();

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
  playerID = data.id;
  for (i = 0; i < data.player.length; i++) {
    playerPos[i][0] = data.player[i].x;
    playerPos[i][1] = data.player[i].y;
    playerPos[i][2] = data.player[i].z;
  }

  if (data.item) {
    itemPos = data.item.pos;
  }
  console.log(itemPos);
}

function sendMessage(pos, get) {
  let message = `{ "pos": [${pos.x}, ${pos.y}, ${pos.z}]`;
  if (get >= 0) {
    message += `, "get": ${get}`;
  }
  message += '}';
  connection.send(message);
}
