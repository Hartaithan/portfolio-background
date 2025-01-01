import { Camera } from "./camera";
import { Figure } from "./figure";
import { Renderer } from "./renderer";
import { Scene } from "./scene";
import { Three } from "./three";

export const initializeAnimation = () => {
  const THREE = Three.get();
  const clock = new THREE.Clock();

  const figure = Figure.get();
  const renderer = Renderer.get();
  const scene = Scene.get();
  const camera = Camera.get();

  const animate = () => {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();
    figure.rotation.y += 0.003;
    figure.position.y = Math.sin(elapsed) * 0.1;
    renderer.render(scene, camera);
  };

  animate();
};
