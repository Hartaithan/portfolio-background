import { PerspectiveCamera } from "three";
import { Three } from "./three";

export class Camera {
  private static camera: PerspectiveCamera;

  constructor() {}

  public static create() {
    const THREE = Three.get();
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.z = 5;
    Camera.camera = camera;
    return Camera.camera;
  }

  public static get() {
    return Camera.camera;
  }
}
