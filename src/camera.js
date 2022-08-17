import * as THREE from 'three'
import { sizes } from './constants'

export const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.x = 1
  camera.position.y = 1
  camera.position.z = 1
  return camera;
}
