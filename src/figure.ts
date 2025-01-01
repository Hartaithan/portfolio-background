import { Mesh, MeshStandardMaterialParameters } from "three";
import { Three } from "./three";
import { Scene } from "./scene";
import { getRandomNumber } from "./utils";
import { ThreeModule as TJS } from "./types";

const materialParameters: MeshStandardMaterialParameters = {
  color: "#ffffff",
  wireframe: true,
  transparent: true,
  opacity: 0.3,
};

const figures = [
  {
    constructor: (T: TJS) => new T.BoxGeometry(1, 1, 1),
    scale: 2,
    zoom: 0.7,
    rotation: 0.003,
  },
  {
    constructor: (T: TJS) => new T.IcosahedronGeometry(1, 1),
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.002,
  },
  {
    constructor: (T: TJS) => new T.OctahedronGeometry(1, 0),
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.006,
  },
  {
    constructor: (T: TJS) => new T.TorusKnotGeometry(1, 0.1, 160, 10, 3, 5),
    scale: 1,
    zoom: 0.65,
    rotation: 0.005,
  },
  {
    constructor: (T: TJS) => new T.SphereGeometry(1, 8, 8),
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.0025,
  },
  {
    constructor: (T: TJS) => new T.TetrahedronGeometry(1, 0),
    scale: 2,
    zoom: 0.6,
    rotation: 0.005,
  },
  {
    constructor: (T: TJS) => new T.TorusGeometry(25, 8, 4, 4),
    scale: 0.047,
    zoom: 0.65,
    rotation: 0.005,
  },
];

export class Figure {
  private static index: number;
  private static scale: number;
  private static zoom: number;
  private static rotation: number;
  private static figure: Mesh;

  constructor() {}

  public static pick() {
    const index = getRandomNumber(0, figures.length - 1);
    const { scale, zoom, rotation } = figures[index];
    Figure.index = index;
    Figure.scale = scale;
    Figure.zoom = zoom;
    Figure.rotation = rotation;
  }

  public static initialize() {
    const THREE = Three.get();
    const { constructor } = figures[Figure.index];
    const geometry = constructor(THREE);
    const material = new THREE.MeshBasicMaterial(materialParameters);
    const figure = new THREE.Mesh(geometry, material);
    figure.scale.set(Figure.scale, Figure.scale, Figure.scale);
    const scene = Scene.get();
    scene.add(figure);
    Figure.figure = figure;
    return Figure.figure;
  }

  public static get() {
    return Figure.figure;
  }

  public static getRotation() {
    return Figure.rotation;
  }

  public static getZoom() {
    return Figure.zoom;
  }
}
