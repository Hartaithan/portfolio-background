import { Three } from "./three";

export const createScene = () => {
  const THREE = Three.get();
  return new THREE.Scene();
};
