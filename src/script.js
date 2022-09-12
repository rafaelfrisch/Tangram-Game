import './style.css'
import * as THREE from 'three'
import { sizes } from "./constants";
import { createCamera } from './camera';
import { createControls } from './controls';
import { createRenderer } from './renderer';
import { createTangram } from './shapes';
import Utils from './utils';

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

// Utils
const utils = new Utils();
//console.log(utils.getIntersection({x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 0}, {x: 0, y: 0}))

// pieces of tangram and the figure game
const { pinkTriangle, purpleTriangle, smallerRedTriangle, biggerRedTriangle, yellowTriangle, greenSquare, blueParalellgram, answers, figureOffset } = createTangram(scene);

const checkIfIsAircraftIsFilled = () => {
    console.log("verificação geral")
    if (pinkTriangle.userData.isOnTheCorrectPlace && purpleTriangle.userData.isOnTheCorrectPlace && smallerRedTriangle.userData.isOnTheCorrectPlace && biggerRedTriangle.userData.isOnTheCorrectPlace && yellowTriangle.userData.isOnTheCorrectPlace && greenSquare.userData.isOnTheCorrectPlace && blueParalellgram.userData.isOnTheCorrectPlace) {
        alert("Congratulations!!! You finished the game!");
        window.location = "./";
    }

    return false;
}

const checkIfObjectIsOnTheCorrectPlace = (name) => {
    if (name == pinkTriangle.userData.name) {
        let status = checkIfPinkTriangleIsOnTheCorrectPlace(pinkTriangle);
        pinkTriangle.userData.isOnTheCorrectPlace = status;
        if (status === true) checkIfIsAircraftIsFilled();
    }

}

const checkIfPinkTriangleIsOnTheCorrectPlace = (pinkTriangle) => {

    let pinkTriangleAnswer = { a: answers.userData.a, b: answers.userData.b, c: answers.userData.c }
    let points = utils.getIntersectionPointsAndInsidePoints(pinkTriangle, pinkTriangleAnswer, 'triangle', figureOffset);

}

/**
 * Renderer
 */
const renderer = createRenderer(canvas)


// Events 
var raycaster = new THREE.Raycaster();
var clickMouse = new THREE.Vector2();
var moveMouse = new THREE.Vector2();
var draggable = new THREE.Object3D;
var objects = [pinkTriangle, purpleTriangle, smallerRedTriangle, biggerRedTriangle, yellowTriangle, greenSquare, blueParalellgram];
var isPressingSpaceKey = false;

window.addEventListener('click', event => {

    if(draggable){
        checkIfObjectIsOnTheCorrectPlace(draggable.userData.name);
        draggable = null;
        return;
    }
    
    clickMouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    clickMouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera( clickMouse, camera );

    let intersects = raycaster.intersectObjects( objects );

    if ( intersects.length > 0){
        draggable = intersects[0].object;
	}
})

window.addEventListener('mousemove', event => {

    moveMouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    moveMouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
})

window.addEventListener('keydown', event => {

    if (event.key == " "){
        isPressingSpaceKey = true;
    }

})

window.addEventListener('keyup', event => {

    isPressingSpaceKey = false;

})

function dragObject() {
    if (draggable != null){
        raycaster.setFromCamera( moveMouse, camera );

        let intersects = raycaster.intersectObjects( objects );
        if (intersects.length > 0){

            for ( let obj of intersects ) {
                
                if (isPressingSpaceKey){
                    draggable.rotation.z += 0.02;
                }
                else{
                    draggable.position.x = obj.point.x;
                    draggable.position.y = obj.point.y;
                }

            }
        }
    }    
}

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

    dragObject();

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()