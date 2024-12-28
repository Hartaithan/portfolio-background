import * as lib from "three";

export type Three = typeof lib;

declare global {
  const THREE: Three;
  interface Window {
    THREE: Three;
  }
}
