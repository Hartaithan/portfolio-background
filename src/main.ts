import { Three } from "./three";
import { createScene } from "./scene";
import { createCamera } from "./camera";
import { createRenderer, handleResize } from "./renderer";
import { createFigure } from "./figure";
import { getContainer } from "./container";

export const init = async () => {
  const THREE = await Three.initialize();

  const container = getContainer();
  const scene = createScene();
  const camera = createCamera();
  const renderer = createRenderer();

  container.appendChild(renderer.domElement);

  const figure = createFigure();
  scene.add(figure);

  window.addEventListener("resize", () => handleResize(camera, renderer));
  handleResize(camera, renderer);

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
