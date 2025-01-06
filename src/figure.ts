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
import { TextGeometry } from "three/examples/jsm/Addons.js";
import { Font } from "./font";
import { Container } from "./container";

const materialParameters: MeshStandardMaterialParameters = {
  color: "#ffffff",
  wireframe: true,
  transparent: true,
  opacity: 0.3,
};

class Text extends TextGeometry {
  constructor(text: string) {
    super(text, {
      font: Font.get(),
      size: 2,
      depth: 0.3,
      curveSegments: 2,
    });
    this.center();
  }
}

const figures = [
  {
    type: "mesh",
    constructor: () => new BoxGeometry(1, 1, 1),
    scale: 2,
    zoom: 0.7,
    rotation: 0.003,
  },
  {
    type: "mesh",
    constructor: () => new IcosahedronGeometry(1, 1),
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.002,
  },
  {
    type: "mesh",
    constructor: () => new OctahedronGeometry(1, 0),
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.006,
  },
  {
    type: "mesh",
    constructor: () => new TorusKnotGeometry(1, 0.1, 160, 10, 3, 5),
    scale: 1,
    zoom: 0.65,
    rotation: 0.005,
  },
  {
    type: "mesh",
    constructor: () => new SphereGeometry(1, 8, 8),
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.0025,
  },
  {
    type: "mesh",
    constructor: () => new TetrahedronGeometry(1, 0),
    scale: 2,
    zoom: 0.6,
    rotation: 0.005,
  },
  {
    type: "mesh",
    constructor: () => new TorusGeometry(25, 8, 4, 4),
    scale: 0.047,
    zoom: 0.65,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text(":D"),
    scale: 1.3,
    zoom: 0.6,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("(•_•)"),
    scale: 0.8,
    zoom: 0.5,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("H"),
    scale: 1.4,
    zoom: 0.7,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("D:"),
    scale: 1.4,
    zoom: 0.6,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("( ͡° ͜ʖ ͡°)"),
    scale: 0.6,
    zoom: 0.45,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("if"),
    scale: 1.4,
    zoom: 0.7,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("else"),
    scale: 0.8,
    zoom: 0.5,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("ʕ•ᴥ•ʔ"),
    scale: 0.7,
    zoom: 0.45,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("( ͠° ͟ل ͡°)"),
    scale: 0.5,
    zoom: 0.5,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("┼"),
    scale: 1,
    zoom: 0.9,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("☺"),
    scale: 1.7,
    zoom: 0.7,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("☼"),
    scale: 1.3,
    zoom: 0.6,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("░"),
    scale: 1,
    zoom: 0.9,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("ʘ"),
    scale: 1.4,
    zoom: 0.7,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("Ξ"),
    scale: 1.4,
    zoom: 0.8,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("҉"),
    scale: 1.2,
    zoom: 0.65,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("҈"),
    scale: 1.3,
    zoom: 0.6,
    rotation: 0.005,
  },
  {
    type: "text",
    constructor: () => new Text("◌"),
    scale: 2.2,
    zoom: 0.65,
    rotation: 0.005,
  },
];

export class Figure {
  private static type: string;
  private static index: number;
  private static scale: number;
  private static zoom: number;
  private static rotation: number;
  private static figure: Mesh;
  private static isRendered: boolean = false;

  constructor() {}

  public static pick() {
    const index = getRandomNumber(0, figures.length - 1);
    const { type, scale, zoom, rotation } = figures[index];
    Figure.type = type;
    Figure.index = index;
    Figure.scale = scale;
    Figure.zoom = zoom;
    Figure.rotation = rotation;
  }

  private static onAfterRender() {
    if (this.isRendered) return;
    this.isRendered = true;
    Container.show();
  }

  public static initialize() {
    const { constructor } = figures[Figure.index];
    const geometry = constructor();
    const material = new MeshBasicMaterial(materialParameters);
    const figure = new Mesh(geometry, material);
    figure.scale.set(Figure.scale, Figure.scale, Figure.scale);
    const scene = Scene.get();
    scene.add(figure);
    figure.onAfterRender = this.onAfterRender;
    Figure.figure = figure;
    return Figure.figure;
  }

  public static get() {
    return Figure.figure;
  }

  public static getType() {
    return Figure.type;
  }

  public static getRotation() {
    return Figure.rotation;
  }

  public static getZoom() {
    return Figure.zoom;
  }
}
