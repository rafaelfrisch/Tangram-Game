import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export const createControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  return controls;
}