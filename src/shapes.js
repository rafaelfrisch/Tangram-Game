/* 
  referência para criação do tangram: 
  https://escolakids.uol.com.br/matematica/tangram.htm -> figura onde tem um avião, um gato, uma pessoa, etc ...
*/

import * as THREE from 'three'

export const createTangram = (scene) => {

  const size = 1;
  const originX = 0;
  const originY = 0;
  const figureOffsetX = 7;
  const figureOffsetY = 0;
  const figureOffset = {
    x: figureOffsetX,
    y: figureOffsetY
  }

  const rootOf2 = Math.sqrt(2);

  const COLORS = {
    PINK: "#FF007F",
    PURPLE: "#800080",
    RED: "#FF0000",
    YELLOW: "#FFFF00",
    GREEN: "#00FF00",
    BLUE: "#63C5DA",
    GRAY: "#C5C6D0"
  };

  let shape;
  let geometry;
  let material;

  // creating background
  const loader = new THREE.TextureLoader();
  loader.load('https://t4.ftcdn.net/jpg/03/16/36/59/360_F_316365913_WKVKZW7gzsqqhkx4PgGyu0rArj5GykHK.jpg', function (texture) {
    scene.background = texture;
  });

  // creating answer 
  function create_answer(){
    let pos = {x: 3, y: 0};
    let a = {x: size*0 - pos.x, y: size*0 - pos.y};
    let b = {x: size*0 - pos.x, y: size*rootOf2/2 - pos.y};
    let c = {x: size*rootOf2/2 - pos.x, y: size*0 - pos.y};
    let d = {x: size*(rootOf2*3/4) - pos.x, y: size*0 - pos.y};
    let e = {x: size*(rootOf2*3+1)/4 - pos.x, y: -size*rootOf2/4 - pos.y};
    let f = {x: size*rootOf2/4 - pos.x, y: -size*rootOf2/4 - pos.y};
    let g = {x: size*0 - pos.x, y: -size*rootOf2/2 - pos.y};
    let h = {x: size*0 - pos.x, y: -size*rootOf2/4 - pos.y};
    let i = {x: -size*rootOf2/4 - pos.x, y: -size*rootOf2/4 - pos.y};
    let j = {x: -size*rootOf2/2 - pos.x, y: size*0 - pos.y};
    let k = {x: -size*rootOf2/2 - pos.x, y: size*rootOf2/4 - pos.y};
    let l = {x: -size*rootOf2/4 - pos.x, y: size*0 - pos.y};

    shape = new THREE.Shape();
    shape.moveTo(a.x, a.y);
    shape.lineTo(b.x, b.y);
    shape.lineTo(c.x, c.y);
    shape.lineTo(d.x, d.y);
    shape.lineTo(e.x, e.y);
    shape.lineTo(f.x, f.y);
    shape.lineTo(g.x, g.y);
    shape.lineTo(h.x, h.y);
    shape.lineTo(i.x, i.y);
    shape.lineTo(j.x, j.y);
    shape.lineTo(k.x, k.y);
    shape.lineTo(l.x, l.y);
    
    geometry = new THREE.ShapeGeometry(shape);
    material = new THREE.MeshBasicMaterial({color: COLORS.GRAY});
    let answer = new THREE.Mesh(geometry, material);
    answer.position.set(figureOffsetX, figureOffsetY);
    scene.add(answer);

    answer.userData.draggable = false;
    answer.userData.name = "answers";
    answer.userData.a = a;
    answer.userData.b = b;
    answer.userData.c = c;
    answer.userData.d = d;
    answer.userData.e = e;
    answer.userData.f = f;
    answer.userData.g = g;
    answer.userData.h = h;
    answer.userData.i = i;
    answer.userData.j = j;
    answer.userData.k = k;
    answer.userData.l = l;
    return answer;
  }


  // creating the pink triangle
  function create__pink_triangle() {
    let pos = { x: size /6, y: size /2 };
    let a = { x: size*0 - pos.x, y: size*0 - pos.y };
    let b = { x: size*0 - pos.x, y: size - pos.y };
    let c = { x: size/2 - pos.x, y: size/2 - pos.y };

    shape = new THREE.Shape();
    shape.moveTo(a.x, a.y);
    shape.lineTo(b.x, b.y);
    shape.lineTo(c.x, c.y);

    geometry = new THREE.ShapeGeometry(shape);
    material = new THREE.MeshBasicMaterial({ color: COLORS.PINK });
    let pinkTriangle = new THREE.Mesh(geometry, material);
    pinkTriangle.position.set(pos.x, pos.y);
    scene.add(pinkTriangle);

    pinkTriangle.userData.draggable = true;
    pinkTriangle.userData.name = 'pinkTriangle';
    pinkTriangle.userData.isOnTheCorrectPlace = false;
    pinkTriangle.userData.a = a;
    pinkTriangle.userData.b = b;
    pinkTriangle.userData.c = c;
    return pinkTriangle;
  }

  // creating the purple triangle
  function create__purple_triangle() {
    let pos = { x: size /2, y: size*5/6 };
    let a = { x: size*0 - pos.x, y: size - pos.y };
    let b = { x: size - pos.x, y: size - pos.y };
    let c = { x: size/2 - pos.x, y: size/2 - pos.y };

    shape = new THREE.Shape();
    shape.moveTo(a.x, a.y);
    shape.lineTo(b.x, b.y);
    shape.lineTo(c.x, c.y);

    geometry = new THREE.ShapeGeometry(shape);
    material = new THREE.MeshBasicMaterial({ color: COLORS.PURPLE });
    let purpleTriangle = new THREE.Mesh(geometry, material);
    purpleTriangle.position.set(pos.x, pos.y);
    scene.add(purpleTriangle);

    purpleTriangle.userData.draggable = true;
    purpleTriangle.userData.name = 'purpleTriangle';
    purpleTriangle.userData.isOnTheCorrectPlace = false;
    purpleTriangle.userData.a = a;
    purpleTriangle.userData.b = b;
    purpleTriangle.userData.c = c;
    return purpleTriangle;
  }

  // creating the smaller red triangle
  function create__smaller_red_triangle() {
    let pos = { x: size *11/12, y: size *3/4};
    let a = { x: size - pos.x, y: size - pos.y };
    let b = { x: size - pos.x, y: size / 2 - pos.y };
    let c = { x: size *3/4 - pos.x, y: size *3/4 - pos.y };

    shape = new THREE.Shape();
    shape.moveTo(a.x, a.y);
    shape.lineTo(b.x, b.y);
    shape.lineTo(c.x, c.y);

    geometry = new THREE.ShapeGeometry(shape);
    material = new THREE.MeshBasicMaterial({ color: COLORS.RED });
    let smallerRedTriangle = new THREE.Mesh(geometry, material);
    smallerRedTriangle.position.set(pos.x, pos.y);
    scene.add(smallerRedTriangle);

    smallerRedTriangle.userData.draggable = true;
    smallerRedTriangle.userData.name = 'smallerRedTriangle';
    smallerRedTriangle.userData.isOnTheCorrectPlace = false;
    smallerRedTriangle.userData.a = a;
    smallerRedTriangle.userData.b = b;
    smallerRedTriangle.userData.c = c;
    return smallerRedTriangle;
  }

  // creating the bigger red triangle
  function create__bigger_red_triangle() {
    let pos = { x: size *5/6, y: size / 6 };
    let a = { x: size / 2 - pos.x, y: size *0 - pos.y };
    let b = { x: size - pos.x, y: size / 2 - pos.y };
    let c = { x: size - pos.x, y: size *0 - pos.y };

    shape = new THREE.Shape();
    shape.moveTo(a.x, a.y);
    shape.lineTo(b.x, b.y);
    shape.lineTo(c.x, c.y);

    geometry = new THREE.ShapeGeometry(shape);
    material = new THREE.MeshBasicMaterial({ color: COLORS.RED });
    let biggerRedTriangle = new THREE.Mesh(geometry, material);
    biggerRedTriangle.position.set(pos.x, pos.y);
    scene.add(biggerRedTriangle);

    biggerRedTriangle.userData.draggable = true;
    biggerRedTriangle.userData.name = 'biggerRedTriangle';
    biggerRedTriangle.userData.isOnTheCorrectPlace = false;
    biggerRedTriangle.userData.a = a;
    biggerRedTriangle.userData.b = b;
    biggerRedTriangle.userData.c = c;
    return biggerRedTriangle;
  }


  // creating the yellow triangle
  function create_yellow_triangle() {
    let pos = { x: size / 2, y: size / 3 };
    let a = { x: size / 4 - pos.x, y: size / 4 - pos.y };
    let b = { x: size / 2 - pos.x, y: size / 2 - pos.y };
    let c = { x: size * 3 / 4 - pos.x, y: size / 4 - pos.y };

    shape = new THREE.Shape();
    shape.moveTo(a.x, a.y);
    shape.lineTo(b.x, b.y);
    shape.lineTo(c.x, c.y);

    geometry = new THREE.ShapeGeometry(shape);
    material = new THREE.MeshBasicMaterial({ color: COLORS.YELLOW });
    let yellowTriangle = new THREE.Mesh(geometry, material);
    yellowTriangle.position.set(pos.x, pos.y);
    scene.add(yellowTriangle);

    yellowTriangle.userData.draggable = true;
    yellowTriangle.userData.name = 'yellowTriangle';
    yellowTriangle.userData.isOnTheCorrectPlace = false;
    yellowTriangle.userData.a = a;
    yellowTriangle.userData.b = b;
    yellowTriangle.userData.c = c;
    return yellowTriangle;
  }


  // creating the green square
  function create_green_square() {
    let pos = { x: size *3/4, y: size / 2 };
    let a = { x: size *3/4 - pos.x, y: size / 4 - pos.y };
    let b = { x: size / 2 - pos.x, y: size / 2 - pos.y };
    let c = { x: size * 3 / 4 - pos.x, y: size *3/ 4 - pos.y };
    let d = { x: size - pos.x, y: size/2 - pos.y};

    shape = new THREE.Shape();
    shape.moveTo(a.x, a.y);
    shape.lineTo(b.x, b.y);
    shape.lineTo(c.x, c.y);
    shape.lineTo(d.x, d.y);

    geometry = new THREE.ShapeGeometry(shape);
    material = new THREE.MeshBasicMaterial({ color: COLORS.GREEN });
    let greenSquare = new THREE.Mesh(geometry, material);
    greenSquare.position.set(pos.x, pos.y);
    scene.add(greenSquare);

    greenSquare.userData.draggable = true;
    greenSquare.userData.name = 'greenSquare';
    greenSquare.userData.isOnTheCorrectPlace = false;
    greenSquare.userData.a = a;
    greenSquare.userData.b = b;
    greenSquare.userData.c = c;
    greenSquare.userData.d = d;
    return greenSquare;
  }

  // creating the blue parallelgram
  function create_blue_parallelgram() {
    let pos = { x: size *3/8, y: size / 8 };
    let a = { x: size * 0 - pos.x, y: size *0 - pos.y };
    let b = { x: size / 4 - pos.x, y: size / 4 - pos.y };
    let c = { x: size * 3 / 4 - pos.x, y: size / 4 - pos.y };
    let d = { x: size / 2 - pos.x, y: size*0 - pos.y};

    shape = new THREE.Shape();
    shape.moveTo(a.x, a.y);
    shape.lineTo(b.x, b.y);
    shape.lineTo(c.x, c.y);
    shape.lineTo(d.x, d.y);

    geometry = new THREE.ShapeGeometry(shape);
    material = new THREE.MeshBasicMaterial({ color: COLORS.BLUE });
    let blueParalellgram = new THREE.Mesh(geometry, material);
    blueParalellgram.position.set(pos.x, pos.y);
    scene.add(blueParalellgram);

    blueParalellgram.userData.draggable = true;
    blueParalellgram.userData.name = 'blueParalellgram';
    blueParalellgram.userData.isOnTheCorrectPlace = false;
    blueParalellgram.userData.a = a;
    blueParalellgram.userData.b = b;
    blueParalellgram.userData.c = c;
    blueParalellgram.userData.d = d;
    return blueParalellgram;
  }

  let answers = create_answer();
  let pinkTriangle = create__pink_triangle();
  let purpleTriangle = create__purple_triangle();
  let smallerRedTriangle = create__smaller_red_triangle();
  let biggerRedTriangle = create__bigger_red_triangle();
  let yellowTriangle = create_yellow_triangle();
  let greenSquare = create_green_square();
  let blueParalellgram = create_blue_parallelgram();


  


  return { pinkTriangle, purpleTriangle, smallerRedTriangle, biggerRedTriangle, yellowTriangle, greenSquare, blueParalellgram, answers, figureOffset };

}
