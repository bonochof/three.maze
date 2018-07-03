//ゲームオブジェクトの管理テーブル
const GameObjectTbl = new Array();

//当たり判定用テーブル
const HitCheckTbl = new Array();

// シーンを作成
const scene = new THREE.Scene();

// object ID
const FLOOR  = 0;
const WALL   = 1;
const PLAYER = 2;
const ITEM   = 3;

class GameObject{
  constructor() {
    GameObjectTbl.push(this);
    this.pos = new THREE.Vector3(0, 0, 0);
  }

  //更新
  update() {
  }

  //初期化
  start() {
  }

  //ヒットした
  onHit(player, hitPoint) {
  }
}