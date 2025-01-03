import { Clock } from "three";
import { Camera } from "./camera";
import { Figure } from "./figure";
import { Renderer } from "./renderer";
import { Scene } from "./scene";

export const initializeAnimation = () => {
  const clock = new Clock();

  const figure = Figure.get();
  const rotation = Figure.getRotation();
  const renderer = Renderer.get();
  const scene = Scene.get();
  const camera = Camera.get();

  const animate = () => {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();
    figure.rotation.y += rotation;
    figure.position.y = Math.sin(elapsed) * 0.1;
    renderer.render(scene, camera);
  };

  animate();
};
