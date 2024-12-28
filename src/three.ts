import { Three } from "./types";

// #TODO: load version from package.json
const version = "0.171.0";
const THREE_CDN = `https://cdn.jsdelivr.net/npm/three@${version}/build/three.module.js`;

export const loadThree = async (): Promise<Three | null> => {
  if (window.THREE !== undefined) return window.THREE;
  try {
    const THREE = (await import(THREE_CDN)) as Three;
    window.THREE = THREE;
    return THREE;
  } catch (error) {
    console.error("unable to load three", error);
    return null;
  }
};
