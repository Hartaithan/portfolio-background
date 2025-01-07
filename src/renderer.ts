import { WebGLRenderer } from "three";
import { Camera } from "./camera";
import { debounce } from "./utils";
import { Animation } from "./animation";

export class Renderer {
  private static renderer: WebGLRenderer;

  constructor() {}

  public static create() {
    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
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

  private static handleDebouncedResize = debounce(() => {
    Animation.setupZoom();
  }, 500);

  private static handleResizeEvent() {
    Renderer.handleResize();
    Renderer.handleDebouncedResize();
  }

  public static listenOnResize() {
    window.addEventListener("resize", Renderer.handleResizeEvent);
    Renderer.handleResizeEvent();
  }
}
