import { Scene, PerspectiveCamera } from "three";

const scene = new Scene();

const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping pane
const far = 100;  // The far clipping pane

const camera = new PerspectiveCamera(fov, aspect, near, far);