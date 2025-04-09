import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshBasicMaterial, Color } from "three";

//get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container')

//create a scene
const scene = new Scene();
//set the background color
scene.background = new Color('skyblue');


//create a camera
const fov = 35; //Field of view
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

//every object is initially created at (0, 0 , 0)
//move the camera back so we can view the scene
camera.position.set(0,0,10);

//create a geometry
const geometry = new BoxGeometry(2,2,2);

//create a default (white) basic material
const material = new MeshBasicMaterial();

//Create a mesh containing the geometry and material
const cube = new Mesh(geometry, material);

scene.add(cube);

//create the renderer
const renderer = new WebGLRenderer();

//next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);



// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);

