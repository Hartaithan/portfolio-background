import { getThree } from "./three";

export const createScene = () => {
  const THREE = getThree();
  return new THREE.Scene();
};
