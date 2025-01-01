import { WebGLRenderer } from "three";
import { Three } from "./three";
import { Camera } from "./camera";

export class Renderer {
  private static renderer: WebGLRenderer;

  constructor() {}

  public static create() {
    const THREE = Three.get();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    Renderer.renderer = renderer;
    return Renderer.renderer;
  }

  public static get() {
    return Renderer.renderer;
  }

  private static handleResize() {
    const camera = Camera.get();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    Renderer.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public static listenOnResize() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
}
