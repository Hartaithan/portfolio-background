import { PerspectiveCamera, WebGLRenderer } from "three";
import { Three } from "./three";

export const createRenderer = (): WebGLRenderer => {
  const THREE = Three.get();
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
