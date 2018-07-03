class JumpItem extends GameObject {
  constructor() {
    super();
    this.isItem = true;
    this.isVisible = true;
    this.mesh = new THREE.Mesh(
      //new THREE.Sphere( new THREE.Vector3( 0, 0, 0 ), 2),
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshStandardMaterial({color: 0x338833, roughness: 0.0})
    );
    this.mesh.geometry.computeBoundingBox();  //BBAA作成
    HitCheckTbl.push(this);
    scene.add(this.mesh);
  }

  start(pos) {
    super.start(pos);
    this.pos = pos.clone();
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
  }

  //ヒットした
  onHit(player, hitPoint) {
    let dir = player.pos.clone().sub(hitPoint);  //ヒットした壁の点からプレイヤー方向のベクトルを生成
    let k = player.sphere.radius - dir.length(); //壁にめり込んだ分の長さを生成(少し大きめに補正)
    dir.normalize();
    player.setPos(player.pos.clone().add(dir.clone().multiplyScalar(k)));
    if (dir.dot(new THREE.Vector3(0, 1, 0)) > 0.99) {
      player.y_speed = 0;
    }
  }
}