/* 
  referência para criação do tangram: 
  https://escolakids.uol.com.br/matematica/tangram.htm -> figura onde tem um avião, um gato, uma pessoa, etc ...
*/

import * as THREE from 'three'

export const createTangram = (scene) => {

  const size = 1;
  const originX = 0;
  const originY = 0;
  const figureOffSetX = 3;
  const figureOffSetY = 0;
  const figureOriginX = originX + figureOffSetX;
  const figureOriginY = originY + figureOffSetY;

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
  loader.load('https://t4.ftcdn.net/jpg/03/16/36/59/360_F_316365913_WKVKZW7gzsqqhkx4PgGyu0rArj5GykHK.jpg', function(texture)
              {
                scene.background = texture;
              });


  // creating the figure -> piece to piece
  let piece;

  // answers
  let answers = {}

  // figure -> yellow triangle
  shape = new THREE.Shape();
  answers.yellowTriangle = [figureOriginX, figureOriginY + (rootOf2 / 4) * size];
  shape.moveTo(figureOriginX, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (rootOf2 / 4) * size, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (rootOf2 / 4) * size, figureOriginY);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );

  // figure -> smaller red triangle
  shape = new THREE.Shape();
  answers.smallerRedTriangle = [figureOriginX, figureOriginY + (rootOf2 / 4) * size];
  shape.moveTo(figureOriginX, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX, figureOriginY + (rootOf2 / 2) * size);
  shape.lineTo(figureOriginX + (rootOf2 / 4) * size, figureOriginY + (rootOf2 / 4) * size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );

  // figure -> green square
  shape = new THREE.Shape();
  answers.greenSquare = [figureOriginX + (rootOf2 / 4) * size, figureOriginY + (rootOf2 / 4) * size];
  shape.moveTo(figureOriginX + (rootOf2 / 4) * size, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (rootOf2 / 4) * size, figureOriginY);
  shape.lineTo(figureOriginX + (rootOf2 / 2) * size, figureOriginY);
  shape.lineTo(figureOriginX + (rootOf2 / 2) * size, figureOriginY + (rootOf2 / 4) * size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );

  // figure -> purple tringle
  shape = new THREE.Shape();
  answers.purpleTriangle = [figureOriginX + (rootOf2 / 2) * size, figureOriginY + (rootOf2 / 4) * size];
  shape.moveTo(figureOriginX + (rootOf2 / 2) * size, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (rootOf2 / 2) * size, figureOriginY - (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + rootOf2 * size, figureOriginY + (rootOf2 / 4) * size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );

  // figure -> pink tringle
  shape = new THREE.Shape();
  answers.pinkTriangle = [figureOriginX + (rootOf2 / 2) * size, figureOriginY + (rootOf2 / 4) * size];
  shape.moveTo(figureOriginX + (rootOf2 / 2) * size, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (rootOf2 / 2) * size, figureOriginY + (3 * rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + rootOf2 * size, figureOriginY + (rootOf2 / 4) * size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );

  // figure -> bigger red triangle
  shape = new THREE.Shape();
  answers.biggerRedTriangle = [figureOriginX + rootOf2 * size, figureOriginY + (rootOf2 / 4) * size];
  shape.moveTo(figureOriginX + rootOf2 * size, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (3 * rootOf2 / 4) * size, figureOriginY);
  shape.lineTo(figureOriginX + (5 * rootOf2 / 4) * size, figureOriginY);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );

  // figure -> blue parallelgram
  shape = new THREE.Shape();
  answers.blueParalellgram = [figureOriginX + rootOf2 * size, figureOriginY + (rootOf2 / 4) * size];
  shape.moveTo(figureOriginX + rootOf2 * size, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (5 * rootOf2 / 4) * size, figureOriginY);
  shape.lineTo(figureOriginX + (3 * rootOf2 / 2) * size, figureOriginY);
  shape.lineTo(figureOriginX + (5 * rootOf2 / 4) * size, figureOriginY + (rootOf2 / 4) * size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );


  // creating the pink triangle
  shape = new THREE.Shape();
  shape.moveTo(originX-size/6, originY-size/2);
  shape.lineTo(originX-size/6, originY+size/2);
  shape.lineTo(originX + size/3, originY);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.PINK } );
  const pinkTriangle = new THREE.Mesh( geometry, material );
  pinkTriangle.position.set(size/6, size/2);
  scene.add( pinkTriangle );
  
  pinkTriangle.userData.draggable = true;
  pinkTriangle.userData.name = 'pink_Triangle';


  // creating the purple triangle
  shape = new THREE.Shape();
  shape.moveTo(originX, originY - size/3);
  shape.lineTo(originX-size/2, originY +size/6);
  shape.lineTo(originX + size/2, originY + size/6);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.PURPLE } );
  const purpleTriangle = new THREE.Mesh( geometry, material );
  purpleTriangle.position.set(size/2, size*5/6);
  scene.add( purpleTriangle );

  purpleTriangle.userData.draggable = true;
  purpleTriangle.userData.name = 'purple_Triangle';


  // creating the smaller red triangle
  
  shape = new THREE.Shape();
  shape.moveTo(size/12, size/4);
  shape.lineTo(size/12, -size/4);
  shape.lineTo(-size/6, 0);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.RED } );
  const smallerRedTriangle = new THREE.Mesh( geometry, material );
  smallerRedTriangle.position.set(size*11/12, size*3/4);
  scene.add( smallerRedTriangle );

  smallerRedTriangle.userData.draggable = true;
  smallerRedTriangle.userData.name = 'smaller_Red_Triangle';


  // creating the bigger red triangle
  shape = new THREE.Shape();
  shape.moveTo(originX + size/6, originY + size / 3);
  shape.lineTo(originX + size/6, originY - size/6);
  shape.lineTo(originX - size/3, originY - size/6);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.RED } );
  const biggerRedTriangle = new THREE.Mesh( geometry, material );
  biggerRedTriangle.position.set(size*5/6, size/6);
  scene.add( biggerRedTriangle );

  biggerRedTriangle.userData.draggable = true;
  biggerRedTriangle.userData.name = 'bigger_Red_Triangle';


  // creating the yellow triangle
  shape = new THREE.Shape();
  shape.moveTo(-size/4, -size/12);
  shape.lineTo(size/4, -size/12);
  shape.lineTo(0, size/6);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.YELLOW } );
  const yellowTriangle = new THREE.Mesh( geometry, material );
  yellowTriangle.position.set(size/2, size/3);
  scene.add( yellowTriangle );

  yellowTriangle.userData.draggable = true;
  yellowTriangle.userData.name = 'yellow_Triangle';


  // creating the green square
  shape = new THREE.Shape();
  shape.moveTo(0, -size/4);
  shape.lineTo(-size/4, 0);
  shape.lineTo(0, size/4);
  shape.lineTo(size/4, 0);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GREEN } );
  const greenSquare = new THREE.Mesh( geometry, material );
  greenSquare.position.set(size*3/4, size/2);
  scene.add( greenSquare );

  greenSquare.userData.draggable = true;
  greenSquare.userData.name = 'green_Square';

  // creating the blue parallelgram
  shape = new THREE.Shape();
  shape.moveTo(-size*3/8, -size/8);
  shape.lineTo(-size/8, size/8);
  shape.lineTo(size*3/8, size/8);
  shape.lineTo(size/8, -size/8);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.BLUE } );
  const blueParalellgram = new THREE.Mesh( geometry, material );
  blueParalellgram.position.set(size*3/8, size/8);
  scene.add( blueParalellgram );

  blueParalellgram.userData.draggable = true;
  blueParalellgram.userData.name = 'blue_paralellgram';



  return { pinkTriangle, purpleTriangle, smallerRedTriangle, biggerRedTriangle, yellowTriangle, greenSquare, blueParalellgram, answers};
  
}
