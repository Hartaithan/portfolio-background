import * as lib from "three";

export type ThreeModule = typeof lib;

declare global {
  const THREE: ThreeModule;
  interface Window {
    THREE: ThreeModule;
  }
}
