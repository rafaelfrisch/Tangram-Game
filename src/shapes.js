import * as THREE from 'three'

export const createTriangle = (xPosition, yPosition, color, scene, size) => {
  const shape = new THREE.Shape();

  shape.moveTo(xPosition, yPosition);
  shape.lineTo(xPosition + size, yPosition);
  shape.lineTo(xPosition + size / 2, yPosition + size);
  
  const TriangleGeometry = new THREE.ShapeGeometry(shape);
  const material = new THREE.MeshBasicMaterial( { color } );
  const mesh = new THREE.Mesh( TriangleGeometry, material ) ;
  scene.add( mesh );
}

export const createSquare = (xPosition, yPosition, color, scene, size) => {
  const shape = new THREE.Shape();
  
  shape.moveTo(xPosition, yPosition);
  shape.lineTo(xPosition + size, yPosition);
  shape.lineTo(xPosition + size, yPosition + size);
  shape.lineTo(xPosition, yPosition + size);
  
  const TriangleGeometry = new THREE.ShapeGeometry(shape);
  const material = new THREE.MeshBasicMaterial( { color } );
  const mesh = new THREE.Mesh( TriangleGeometry, material ) ;
  scene.add( mesh );
}
