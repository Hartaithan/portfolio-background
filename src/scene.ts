import { Scene as ThreeScene } from "three";
import { Three } from "./three";

export class Scene {
  private static scene: ThreeScene;

  constructor() {}

  public static create() {
    const THREE = Three.get();
    Scene.scene = new THREE.Scene();
    return Scene.scene;
  }

  public static get() {
    return Scene.scene;
  }
}
