import { PerspectiveCamera } from "three";
import { Three } from "./three";
import { Figure } from "./figure";

export class Camera {
  private static camera: PerspectiveCamera;

  constructor() {}

  public static create() {
    const THREE = Three.get();
    const zoom = Figure.getZoom();
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(50, aspect, 1, 10);
    camera.position.z = 6;
    camera.zoom = zoom;
    Camera.camera = camera;
    return Camera.camera;
  }

  public static get() {
    return Camera.camera;
  }
}
