import { PerspectiveCamera } from "three";
import { getThree } from "./three";

export const createCamera = (): PerspectiveCamera => {
  const THREE = getThree();
  const aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
  camera.position.z = 5;
  return camera;
};
