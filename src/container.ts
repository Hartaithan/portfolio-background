import { Renderer } from "./renderer";

export class Container {
  private static container: HTMLElement;

  constructor() {}

  public static get() {
    if (Container.container) return Container.container;
    const container = document.getElementById("background");
    if (!container) {
      const message = "element with id background not found";
      console.error(message);
      throw new Error(message);
    }
    Container.container = container;
    return container;
  }

  public static injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      #background {
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: opacity 1s ease-in-out;
      }
    `;
    document.head.appendChild(style);
  }

  public static setup() {
    const container = Container.get();
    const renderer = Renderer.get();
    container.appendChild(renderer.domElement);
  }
}
