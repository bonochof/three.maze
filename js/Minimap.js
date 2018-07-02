function loadMap() {
  drawMiniMap();
}

function drawMiniMap() {
  var cv = document.getElementById('miniMap');
  var ct = cv.getContext('2d');
  
  ct.globalAlpha = 0.8;

  ct.fillStyle = '#ccffcc';
  ct.fillRect(0, 0, cv.width, cv.height);

  ct.strokeStyle = '#00ff00';
  ct.strokeRect(0, 0, cv.width, cv.height);
}
