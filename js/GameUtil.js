//ユーティリティクラス
class GameUtil{
  
  //ある点からAABB（軸並行境界ボックス：Axis-Aligned Bounding Box）上の最も近い任意の点を計算する
  //すべての引数はワールド座標
  static calcNearPointOnAABB(targetPoint,minBoxPoint, maxBoxPoint){
    let nearPoint = targetPoint.clone();

    if(nearPoint.x < minBoxPoint.x){
      nearPoint.x = minBoxPoint.x
    }else if(nearPoint.x > maxBoxPoint.x){
      nearPoint.x = maxBoxPoint.x;
    }

    if(nearPoint.y < minBoxPoint.y){
      nearPoint.y = minBoxPoint.y
    }else if(nearPoint.y > maxBoxPoint.y){
      nearPoint.y = maxBoxPoint.y;
    }

    if(nearPoint.z < minBoxPoint.z){
      nearPoint.z = minBoxPoint.z
    }else if(nearPoint.z > maxBoxPoint.z){
      nearPoint.z = maxBoxPoint.z;
    }

    return nearPoint;
  }

  //基準座標を元にローカル座標からワールド座標に変換
  static toWorldPoint(basePoint, localPoint){
    let worldPoint = basePoint.clone();
    return worldPoint.add(localPoint);
  }
}