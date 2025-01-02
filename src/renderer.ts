import { WebGLRenderer } from "three";
import { Three } from "./three";
import { Camera } from "./camera";
import { Figure } from "./figure";

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
    const { innerWidth, innerHeight } = window;
    const camera = Camera.get();
    const changedZoom = innerWidth && innerWidth < 1000 ? Figure.getZoom() : 1;
    camera.zoom += (changedZoom - camera.zoom) * 0.1;
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    Renderer.renderer.setSize(innerWidth, innerHeight);
  }

  public static listenOnResize() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
}
