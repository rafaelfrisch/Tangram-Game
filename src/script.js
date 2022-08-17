import './style.css'
import * as THREE from 'three'
import { sizes } from "./constants";
import { createCamera } from './camera';
import { createControls } from './controls';
import { createRenderer } from './renderer';
import { createTriangle, createSquare } from './shapes';
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Sizes
 */

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = createCamera();

scene.add(camera)

// Controls
const controls = createControls(camera, canvas);

/**
 * Cube
 */

createTriangle(1, 0, "#0f0", scene, 1);
createTriangle(-1, 0, "#00f", scene, 1);
createSquare(0, 0, "#f00", scene, 1);

/**
 * Renderer
 */
const renderer = createRenderer(canvas)

/**
 * Animate
 */
const clock = new THREE.Clock()
let lastElapsedTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - lastElapsedTime
    lastElapsedTime = elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()