import { Mesh, MeshStandardMaterialParameters } from "three";
import { Three } from "./three";
import { Scene } from "./scene";

const materialParameters: MeshStandardMaterialParameters = {
  color: "#ffffff",
  wireframe: true,
  transparent: true,
  opacity: 0.3,
};

export class Figure {
  private static figure: Mesh;

  constructor() {}

  public static create() {
    const THREE = Three.get();
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial(materialParameters);
    const mesh = new THREE.Mesh(geometry, material);
    Figure.figure = mesh;
    return mesh;
  }

  public static get() {
    return Figure.figure;
  }

  public static initialize() {
    const figure = Figure.create();
    const scene = Scene.get();
    scene.add(figure);
    return figure;
  }
}
