import { Mesh, MeshStandardMaterialParameters } from "three";
import { Three } from "./three";

const materialParameters: MeshStandardMaterialParameters = {
  color: "#ffffff",
  wireframe: true,
  transparent: true,
  opacity: 0.3,
};

export const createFigure = (): Mesh => {
  const THREE = Three.get();
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial(materialParameters);
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
};
