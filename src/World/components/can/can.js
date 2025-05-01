import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { setupModel } from "./setupModel";

async function loadCan() {
    const loader = new GLTFLoader();
    
    const canData = await loader.loadAsync('/can.glb')

    console.log('test', canData)

    const can = setupModel(canData)

    can.position.set( 0, 0, 0)
    can.scale.set(10,10,10)
    can.rotation.set(0, 5, 0)
    return {can}
}

export {loadCan}