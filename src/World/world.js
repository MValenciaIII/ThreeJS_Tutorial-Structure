import { createCamera } from './components/camera'
import { createCube } from './components/cube';
import { createStaff } from './components/staff/geometry';
import { createControls } from './systems/controls';
import { loadCan } from './components/can/can';
import { createLights } from './components/lights';
import { createScene } from './components/scene';
import { createRenderer } from './systems/renderer';
import {Resizer} from './systems/Resizer';


// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let light;

class World {

constructor(container) {
    camera = createCamera();
    scene = createScene();
    light = createLights()
    renderer = createRenderer();
    // const {can} = loadCan();
    container.append(renderer.domElement);

    
    const cube = createCube();

    scene.add(cube, light);

    // const sphere = createStaff();

    // scene.add(sphere)


    const resizer = new Resizer(container, camera, renderer)
}

async init() {
   const {can} = await loadCan();

    scene.add(can)
}

render() {
    renderer.render(scene, camera);
}
    
}

export {World};