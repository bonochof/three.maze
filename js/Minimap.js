class MiniMap {
  constructor() {
    this.cv = document.getElementById('miniMap');
    this.ct = this.cv.getContext('2d');
  }

  convertMapPosX(playerX) {
    return (playerX + 60) * 2.3;
  }

  convertMapPosY(playerY) {
    return playerY + 50 * 1.5;
  }

  clearMiniMap() {
    this.ct.clearRect(0, 0, this.cv.width, this.cv.height);
  }

  drawMiniMap() {
    this.ct.globalAlpha = 0.6;

    this.ct.fillStyle = '#ccffcc';
    this.ct.fillRect(0, 0, this.cv.width, this.cv.height);

    this.ct.strokeStyle = '#00ff00';
    this.ct.strokeRect(0, 0, this.cv.width, this.cv.height);
  }

  drawObj(x, y) {
    this.ct.globalAlpha = 1.0;

    this.ct.fillStyle = '#ccccff';
    this.ct.fillRect(x, y, 24, 10);
  }

  drawPlayer(x, y) {
    this.ct.globalAlpha = 1.0;

    this.ct.beginPath();
    this.ct.arc(x, y, 5, 0, Math.PI*2, true);
    this.ct.fillStyle = '#ff8888';
    this.ct.fill();
  }
}
