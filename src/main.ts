import { Three } from "./three";
import { Figure } from "./figure";
import { Container } from "./container";
import { Scene } from "./scene";
import { Camera } from "./camera";
import { Renderer } from "./renderer";
import { initializeAnimation } from "./animation";

export const init = async () => {
  await Three.initialize();
  Figure.pick();
  Scene.create();
  Camera.create();
  Renderer.create();
  Container.setup();
  Figure.initialize();
  Renderer.listenOnResize();
  initializeAnimation();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
