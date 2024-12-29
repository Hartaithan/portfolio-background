import type { ThreeModule } from "./types";

// #TODO: load version from package.json
const version = "0.171.0";
const THREE_CDN = `https://cdn.jsdelivr.net/npm/three@${version}/build/three.module.js`;

class Three {
  private static instance: ThreeModule | null = null;
  private constructor() {}

  public static async initialize(): Promise<ThreeModule> {
    if (window.THREE !== undefined) return window.THREE;
    try {
      const THREE = (await import(/* @vite-ignore */ THREE_CDN)) as ThreeModule;
      window.THREE = THREE;
      Three.instance = THREE;
      return THREE;
    } catch (error) {
      console.error("unable to load three", error);
      throw error;
    }
  }

  public static getThree(): ThreeModule {
    if (!Three.instance) throw new Error("three is not initialized");
    return Three.instance;
  }
}

export const initThree = Three.initialize;
export const getThree = Three.getThree;
