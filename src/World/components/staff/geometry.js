import { SphereGeometry, Mesh, MeshBasicMaterial } from 'three';

function createStaff() {
  // create a geometry
  const geometry = new SphereGeometry(5, 32, 16);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial( { color: "blue"});

  // create a Mesh containing the geometry and material
  const sphere = new Mesh(geometry, material);

    

  return sphere;
}

export { createStaff };