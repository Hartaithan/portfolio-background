import { Mesh, MeshStandardMaterialParameters } from "three";
import { Three } from "./three";
import { Scene } from "./scene";
import { getRandomNumber } from "./utils";

const materialParameters: MeshStandardMaterialParameters = {
  color: "#ffffff",
  wireframe: true,
  transparent: true,
  opacity: 0.3,
};

const figures = [
  "box",
  "icosahedron",
  "octahedron",
  "torus-knot",
  "sphere",
  "tetrahedron",
  "torus",
] as const;

const pickGeometry = () => {
  const THREE = Three.get();
  const index = getRandomNumber(0, figures.length - 1);
  const key = figures[index];
  switch (key) {
    case "box":
      return new THREE.BoxGeometry(1, 1, 1);
    case "icosahedron":
      return new THREE.IcosahedronGeometry(1, 1);
    case "octahedron":
      return new THREE.OctahedronGeometry(1, 0);
    case "torus-knot":
      return new THREE.TorusKnotGeometry(1, 0.1, 160, 10, 3, 5);
    case "sphere":
      return new THREE.SphereGeometry(1, 8, 8);
    case "tetrahedron":
      return new THREE.TetrahedronGeometry(1, 0);
    case "torus":
      return new THREE.TorusGeometry(25, 8, 4, 4);
    default:
      break;
  }
};

export class Figure {
  private static figure: Mesh;

  constructor() {}

  public static create() {
    const THREE = Three.get();
    const geometry = pickGeometry();
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
