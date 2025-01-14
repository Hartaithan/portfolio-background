import { Figure } from "./figure";
import { Container } from "./container";
import { Scene } from "./scene";
import { Camera } from "./camera";
import { Renderer } from "./renderer";
import { Font } from "./font";
import { Animation } from "./animation";

const init = async () => {
  try {
    Container.styles();
    Container.create();
    Figure.pick();
    await Font.load();
    Scene.create();
    Camera.create();
    Renderer.create();
    Container.setup();
    Figure.initialize();
    Animation.listenOnResize();
    Animation.start();
  } catch (error) {
    Container.error();
    console.error("initialize error", error);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
