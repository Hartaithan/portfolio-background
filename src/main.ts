import { initializeThree } from "./three";
import { createScene } from "./scene";
import { createCamera } from "./camera";
import { createRenderer } from "./renderer";
import { createFigure } from "./figure";
import { getContainer, setupContainer } from "./container";

export const init = async () => {
  const THREE = await initializeThree();

  const container = getContainer();
  const scene = createScene();
  const camera = createCamera();
  const renderer = createRenderer();

  setupContainer(container, renderer);

  const figure = createFigure();
  scene.add(figure);

  const clock = new THREE.Clock();

  const animate = () => {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();
    figure.rotation.y += 0.003;
    figure.position.y = Math.sin(elapsed) * 0.1;
    renderer.render(scene, camera);
  };

  animate();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
