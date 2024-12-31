import type { ThreeModule } from "./types";

// #TODO: load version from package.json
const version = "0.171.0";
const THREE_CDN = `https://cdn.jsdelivr.net/npm/three@${version}/build/three.module.js`;

const messages = {
  initializing: "three is currently being initialized. please wait...",
  initializeError: "unable to load three",
  notInitialized: "three is not initialized",
};

export class Three {
  private static instance: ThreeModule | null = null;
  private static initializing: boolean = false;

  private constructor() {}

  public static async initialize(): Promise<ThreeModule> {
    if (Three.instance) return Three.instance;
    if (Three.initializing) throw new Error(messages.initializing);
    if (window.THREE !== undefined) {
      Three.instance = window.THREE;
      return Three.instance;
    }
    Three.initializing = true;
    try {
      const THREE = await import(/* @vite-ignore */ THREE_CDN);
      Three.instance = THREE as ThreeModule;
      return Three.instance;
    } catch (error) {
      console.error(messages.initializeError, error);
      throw error;
    } finally {
      Three.initializing = false;
    }
  }

  public static get(): ThreeModule {
    if (!Three.instance) throw new Error(messages.notInitialized);
    return Three.instance;
  }
}
