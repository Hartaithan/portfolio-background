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
      #background.visible {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  }

  public static show() {
    const container = Container.get();
    container.classList.add("visible");
  }

  public static setup() {
    const container = Container.get();
    const renderer = Renderer.get();
    // TODO: fix cannot read properties of undefined (reading 'domElement')
    container.appendChild(renderer.domElement);
  }
}
