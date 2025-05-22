import { OrbitControls } from "three/examples/jsm/Addons.js";


function createControls(camera, canvas) {
const controls = new OrbitControls(camera, canvas)
    
return controls
}

export {createControls}