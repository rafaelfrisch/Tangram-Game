/* 
  referência para criação do tangram: 
  https://escolakids.uol.com.br/matematica/tangram.htm -> figura onde tem um avião, um gato, uma pessoa, etc ...
*/

import * as THREE from 'three'
import Utils from './utils.js'


export const createTangram = (scene) => {

  const size = 1;
  const originX = 1;
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
  
  // creating the pink triangle
  shape = new THREE.Shape();
  shape.moveTo(originX, originY);
  shape.lineTo(originX, originY + size);
  shape.lineTo(originX + size / 2, originY + size / 2);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.PINK } );
  const pinkTriangle = new THREE.Mesh( geometry, material );
  scene.add( pinkTriangle );

  // creating the purple triangle
  shape = new THREE.Shape();
  shape.moveTo(originX + size / 2, originY + size / 2);
  shape.lineTo(originX, originY + size);
  shape.lineTo(originX + size, originY + size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.PURPLE } );
  const purpleTriangle = new THREE.Mesh( geometry, material );
  scene.add( purpleTriangle );

  // creating the smaller red triangle
  shape = new THREE.Shape();
  shape.moveTo(originX + size, originY + size / 2);
  shape.lineTo(originX + size, originY + size);
  shape.lineTo(originX + (3 / 4) * size, originY + (3 / 4) * size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.RED } );
  const smallerRedTriangle = new THREE.Mesh( geometry, material );
  scene.add( smallerRedTriangle );

  // creating the bigger red triangle
  shape = new THREE.Shape();
  shape.moveTo(originX + size / 2, originY);
  shape.lineTo(originX + size, originY);
  shape.lineTo(originX + size, originY + size / 2);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.RED } );
  const biggerRedTriangle = new THREE.Mesh( geometry, material );
  scene.add( biggerRedTriangle );

  // creating the yellow triangle
  shape = new THREE.Shape();
  shape.moveTo(originX + size / 2, originY + size / 2);
  shape.lineTo(originX + size / 4, originY + size / 4);
  shape.lineTo(originX + (3 / 4) * size, originY + size / 4);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.YELLOW } );
  const yellowTriangle = new THREE.Mesh( geometry, material );
  scene.add( yellowTriangle );

  // creating the green square
  shape = new THREE.Shape();
  shape.moveTo(originX + size / 2, originY + size / 2);
  shape.lineTo(originX + (3 / 4) * size, originY + size / 4);
  shape.lineTo(originX + size, originY + size / 2);
  shape.lineTo(originX + (3 / 4) * size, originY + (3 / 4) * size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GREEN } );
  const greenSquare = new THREE.Mesh( geometry, material );
  scene.add( greenSquare );

  // creating the blue parallelgram
  shape = new THREE.Shape();
  shape.moveTo(originX, originY);
  shape.lineTo(originX + size / 2, originY);
  shape.lineTo(originX + (3 / 4) * size, originY + size / 4);
  shape.lineTo(originX + size / 4, originY + size / 4);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.BLUE } );
  const blueParalellgram = new THREE.Mesh( geometry, material );
  scene.add( blueParalellgram );

  // creating the figure -> piece to piece
  let piece;

  // figure -> yellow triangle
  shape = new THREE.Shape();
  shape.moveTo(figureOriginX, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (rootOf2 / 4) * size, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (rootOf2 / 4) * size, figureOriginY);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );

  // figure -> smaller red triangle
  shape = new THREE.Shape();
  shape.moveTo(figureOriginX, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX, figureOriginY + (rootOf2 / 2) * size);
  shape.lineTo(figureOriginX + (rootOf2 / 4) * size, figureOriginY + (rootOf2 / 4) * size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );

  // figure -> green square
  shape = new THREE.Shape();
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
  shape.moveTo(figureOriginX + (rootOf2 / 2) * size, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (rootOf2 / 2) * size, figureOriginY - (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + rootOf2 * size, figureOriginY + (rootOf2 / 4) * size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );

  // figure -> pink tringle
  shape = new THREE.Shape();
  shape.moveTo(figureOriginX + (rootOf2 / 2) * size, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (rootOf2 / 2) * size, figureOriginY + (3 * rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + rootOf2 * size, figureOriginY + (rootOf2 / 4) * size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );

  // figure -> bigger red triangle
  shape = new THREE.Shape();
  shape.moveTo(figureOriginX + rootOf2 * size, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (3 * rootOf2 / 4) * size, figureOriginY);
  shape.lineTo(figureOriginX + (5 * rootOf2 / 4) * size, figureOriginY);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );

  // figure -> blue parallelgram
  shape = new THREE.Shape();
  shape.moveTo(figureOriginX + rootOf2 * size, figureOriginY + (rootOf2 / 4) * size);
  shape.lineTo(figureOriginX + (5 * rootOf2 / 4) * size, figureOriginY);
  shape.lineTo(figureOriginX + (3 * rootOf2 / 2) * size, figureOriginY);
  shape.lineTo(figureOriginX + (5 * rootOf2 / 4) * size, figureOriginY + (rootOf2 / 4) * size);
  geometry = new THREE.ShapeGeometry(shape);
  material = new THREE.MeshBasicMaterial( { color: COLORS.GRAY } );
  piece = new THREE.Mesh( geometry, material );
  scene.add( piece );


  return { pinkTriangle, purpleTriangle, smallerRedTriangle, biggerRedTriangle, yellowTriangle, greenSquare, blueParalellgram };
  
}
