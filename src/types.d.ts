import * as lib from "three";

export type ThreeModule = typeof lib;

declare global {
  interface Window {
    THREE: ThreeModule;
  }
}
