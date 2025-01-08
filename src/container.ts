import { Renderer } from "./renderer";

export class Container {
  private static container: HTMLElement;

  constructor() {}

  public static styles() {
    const style = document.createElement("style");
    style.textContent = `
      #background {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        z-index: -1000;
        transition: opacity 1s ease-in-out;
      }
      #background > p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 24px;
        font-weight: 600;
        color: white;
      }
      #background:has(p) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
    document.head.appendChild(style);
  }

  public static create() {
    if (Container.container) return Container.container;
    const container = document.createElement("div");
    container.id = "background";
    container.style.opacity = "0";
    document.body.appendChild(container);
    Container.container = container;
  }

  public static get() {
    return Container.container;
  }

  public static show() {
    const container = Container.get();
    requestAnimationFrame(() => {
      container.style.opacity = "1";
    });
  }

  public static setup() {
    const container = Container.get();
    const renderer = Renderer.get();
    if (!renderer) throw new Error("renderer not found");
    container.appendChild(renderer.domElement);
  }

  public static showError() {
    const container = Container.get();
    container.style.opacity = "1";
    container.innerHTML = "<p>Something went wrong :(</p>";
  }
}
