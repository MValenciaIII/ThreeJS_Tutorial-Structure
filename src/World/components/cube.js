import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';
import { color } from 'three/tsl';

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial( {color: "gray"});

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.position.set(10, 0 ,10)

  return cube;
}

export { createCube };