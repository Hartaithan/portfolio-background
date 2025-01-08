import { Clock } from "three";
import { Renderer } from "./renderer";
import { Scene } from "./scene";
import { Camera } from "./camera";
import { Figure } from "./figure";
import { debounce } from "./utils";

export class Animation {
  private static clock: Clock;
  private static zoom: number;
  private static changing: boolean = true;

  constructor() {}

  public static getClock() {
    if (Animation.clock) return Animation.clock;
    Animation.clock = new Clock();
    return Animation.clock;
  }

  public static getZoom() {
    return Animation.zoom;
  }

  public static getChangedZoom() {
    const { innerWidth } = window;
    return innerWidth && innerWidth < 1000 ? Figure.getZoom() : 1;
  }

  public static setupZoom() {
    Animation.zoom = Animation.getChangedZoom();
    Animation.changing = true;
  }

  private static handleResize() {
    const camera = Camera.get();
    const renderer = Renderer.get();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private static handleDebouncedResize = debounce(() => {
    Animation.setupZoom();
  }, 500);

  private static handleResizeEvent() {
    Animation.handleResize();
    Animation.handleDebouncedResize();
  }

  public static listenOnResize() {
    window.addEventListener("resize", Animation.handleResizeEvent);
    Animation.handleResizeEvent();
  }

  private static rotateFigure() {
    const clock = Animation.getClock();
    const figure = Figure.get();
    const rotation = Figure.getRotation();

    const elapsed = clock.getElapsedTime();
    figure.rotation.y += rotation;
    figure.position.y = Math.sin(elapsed) * 0.1;
  }

  private static controlCamera() {
    if (!Animation.changing) return;
    const camera = Camera.get();
    const changedZoom = Animation.getChangedZoom();
    camera.zoom += (changedZoom - camera.zoom) * 0.1;
    camera.updateProjectionMatrix();
    if (Math.abs(camera.zoom - Animation.zoom) < 0.01) {
      Animation.changing = false;
    }
  }

  public static start() {
    const renderer = Renderer.get();
    const scene = Scene.get();
    const camera = Camera.get();

    requestAnimationFrame(Animation.start);

    Animation.rotateFigure();
    Animation.controlCamera();

    renderer.render(scene, camera);
  }
}
