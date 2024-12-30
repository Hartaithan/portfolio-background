import { PerspectiveCamera, WebGLRenderer } from "three";
import { getThree } from "./three";

export const createRenderer = (): WebGLRenderer => {
  const THREE = getThree();
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
};

export const handleResize = (
  camera: PerspectiveCamera,
  renderer: WebGLRenderer
): void => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};
