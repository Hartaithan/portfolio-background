import {
  BoxGeometry,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterialParameters,
  OctahedronGeometry,
  SphereGeometry,
  TetrahedronGeometry,
  TorusGeometry,
  TorusKnotGeometry,
} from "three";
import { Scene } from "./scene";
import { getRandomNumber } from "./utils";

const materialParameters: MeshStandardMaterialParameters = {
  color: "#ffffff",
  wireframe: true,
  transparent: true,
  opacity: 0.3,
};

const figures = [
  {
    constructor: () => new BoxGeometry(1, 1, 1),
    scale: 2,
    zoom: 0.7,
    rotation: 0.003,
  },
  {
    constructor: () => new IcosahedronGeometry(1, 1),
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.002,
  },
  {
    constructor: () => new OctahedronGeometry(1, 0),
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.006,
  },
  {
    constructor: () => new TorusKnotGeometry(1, 0.1, 160, 10, 3, 5),
    scale: 1,
    zoom: 0.65,
    rotation: 0.005,
  },
  {
    constructor: () => new SphereGeometry(1, 8, 8),
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.0025,
  },
  {
    constructor: () => new TetrahedronGeometry(1, 0),
    scale: 2,
    zoom: 0.6,
    rotation: 0.005,
  },
  {
    constructor: () => new TorusGeometry(25, 8, 4, 4),
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
    const { constructor } = figures[Figure.index];
    const geometry = constructor();
    const material = new MeshBasicMaterial(materialParameters);
    const figure = new Mesh(geometry, material);
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
