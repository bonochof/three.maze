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

  drawObj(obj) {
    let x = this.convertMapPosX(obj.pos.x);
    let y = this.convertMapPosY(obj.pos.z);
    this.ct.globalAlpha = 1.0;

    if(obj.mesh === undefined || obj.mesh.geometry.boundingBox == null){
      this.ct.fillStyle = '#ff6666';
    } else {
      this.ct.fillStyle = '#ccccff';
    }
    this.ct.fillRect(x, y, 24, 10);
  }
}
