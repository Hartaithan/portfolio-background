import { WebGLRenderer } from "three";

export const getContainer = (): HTMLElement => {
  const container = document.getElementById("background");
  if (!container) {
    const message = "element with id background not found";
    console.error(message);
    throw new Error(message);
  }
  return container;
};

export const setupContainer = (
  container: HTMLElement,
  renderer: WebGLRenderer
): void => {
  container.style.position = "relative";
  container.appendChild(renderer.domElement);
};
