class JumpItem extends GameObject {
  constructor() {
    super();
    this.objID = ITEM;
    this.isGot = false;
    this.isVisible = true;
    this.mesh = new THREE.Mesh(
      new THREE.SphereGeometry(2),
      //new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshStandardMaterial({color: 0x33ff33, roughness: 0.0})
    );
    this.mesh.geometry.computeBoundingSphere();
    HitCheckTbl.push(this);
    scene.add(this.mesh);
    this.dir = 0.1;
  }

  start(pos) {
    super.start(pos);
    this.pos = pos.clone();
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
  }

  update() {
    this.pos.y += this.dir;
    if (this.pos.y < 1 || this.pos.y > 4) {
      this.dir = -this.dir;
    }
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
  }

  // get effect
  onHit(player, hitPoint) {
    if (this.isGot) {
      return;
    } else {
      this.mesh.visible = false;
      this.isVisible = false;
      player.jumpCount += 3;
      this.isGot = true;
    }
  }
}