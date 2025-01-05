import { Figure } from "./figure";
import { Container } from "./container";
import { Scene } from "./scene";
import { Camera } from "./camera";
import { Renderer } from "./renderer";
import { initializeAnimation } from "./animation";
import { Font } from "./font";

export const init = async () => {
  Container.injectStyles();
  Figure.pick();
  await Font.load();
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
