import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export const createControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas)
  controls.target.set( 1, 1, 0)
  controls.enableDamping = true
  controls.enableRotate = false;
  controls.enableZoom = true; 
  return controls;
}