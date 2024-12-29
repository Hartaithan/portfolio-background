import { initializeThree } from "./three";
import { createScene } from "./scene";
import { createCamera } from "./camera";
import { createRenderer } from "./renderer";
import { createFigure } from "./figure";
import { getContainer, setupContainer } from "./container";

export const init = async () => {
  await initializeThree();

  const container = getContainer();
  const scene = createScene();
  const camera = createCamera();
  const renderer = createRenderer();

  setupContainer(container, renderer);

  const figure = createFigure();
  scene.add(figure);

  renderer.render(scene, camera);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
