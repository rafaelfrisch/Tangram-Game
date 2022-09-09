import './style.css'
import * as THREE from 'three'
import { sizes } from "./constants";
import { createCamera } from './camera';
import { createControls } from './controls';
import { createRenderer } from './renderer';
import { createTangram } from './shapes';

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

// pieces of tangram and the figure game
const { pinkTriangle, purpleTriangle, smallerRedTriangle, biggerRedTriangle, yellowTriangle, greenSquare, blueParalellgram, answers } = createTangram(scene);

const isTolerable = (size1, size2) => {
    if (Math.abs(size1 - size2) > 0.5)
        return false;
    
    return true;
}

// Check if a point is inside a polygon

function check_point_in_polygon(polygon, point){
    var v1 = new THREE.Vector3(point[0], point[1], 0);
    var ray = new THREE.Ray(point[0], point[1], v1);
    
    var edges = [];

    for (var i = 0; i < polygon.length; i++){
        edges[i] = new THREE.Line()
    }

    geometry.intersectObjects()

}


const checkIfIsCorrect = () => {

    console.log(biggerRedTriangle.rotation.z)

    if (!isTolerable(pinkTriangle.position.x, answers.pinkTriangle[0]) || !isTolerable(pinkTriangle.position.y, answers.pinkTriangle[1]))
        return false;

    if (!isTolerable(purpleTriangle.position.x, answers.purpleTriangle[0]) || !isTolerable(purpleTriangle.position.y, answers.purpleTriangle[1]))
        return false;

    if (!isTolerable(smallerRedTriangle.position.x, answers.smallerRedTriangle[0]) || !isTolerable(smallerRedTriangle.position.y, answers.smallerRedTriangle[1]))
        return false;

    if (!isTolerable(biggerRedTriangle.position.x, answers.biggerRedTriangle[0]) || !isTolerable(biggerRedTriangle.position.y, answers.biggerRedTriangle[1]) || (Math.abs((biggerRedTriangle.rotation.z - 2.36)) / Math.PI) % 1 > 0.04)
        return false;

    if (!isTolerable(yellowTriangle.position.x, answers.yellowTriangle[0]) || !isTolerable(yellowTriangle.position.y, answers.yellowTriangle[1]))
        return false;

    if (!isTolerable(greenSquare.position.x, answers.greenSquare[0]) || !isTolerable(greenSquare.position.y, answers.greenSquare[1]))
        return false;

    if (!isTolerable(blueParalellgram.position.x, answers.blueParalellgram[0]) || !isTolerable(blueParalellgram.position.y, answers.blueParalellgram[1]) || (Math.abs((blueParalellgram.rotation.z - 2.34)) / Math.PI) % 1 > 0.04)
        return false;

    alert("Você ganhou! Parabéns!!!");
    window.location = "./";
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

    //checkIfIsCorrect();

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