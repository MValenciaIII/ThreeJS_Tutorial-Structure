import { World } from "./World/World.js";
//create the main function
function main() {
//code to set up the World App will go here
//get a reference to the container element
const container = document.querySelector('#scene-container')

//1. create an instance of the World app
const world = new World(container)

// We can access member variables from the instance
// console.log(world.camera);
// console.log(world.renderer);
// console.log(world.scene);

//2. Render the scene
world.render();
}

main();