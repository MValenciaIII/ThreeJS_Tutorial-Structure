import { WebGLRenderer } from 'three';

function createRenderer() {
const renderer = new WebGLRenderer();

renderer.physicallyCorrectLights = true; // Enable physically correct lights


return renderer;
}

export { createRenderer };