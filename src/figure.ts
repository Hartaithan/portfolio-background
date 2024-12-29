import { Mesh } from "three";
import { getThree } from "./three";

export const createFigure = (): Mesh => {
  const THREE = getThree();
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial();
  return new THREE.Mesh(geometry, material);
};
