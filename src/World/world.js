import { createCamera } from './components/camera'
import { createCube } from './components/cube';
import { createStaff } from './components/staff/geometry';
import { createScene } from './components/scene';
import { createRenderer } from './systems/renderer';
import {Resizer} from './systems/Resizer';


// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {

constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();

    scene.add(cube);

    const sphere = createStaff();

    scene.add(sphere)

    const resizer = new Resizer(container, camera, renderer)
}

render() {
    renderer.render(scene, camera);
}
    
}

export {World};