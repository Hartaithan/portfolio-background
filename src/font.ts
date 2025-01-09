import { FontLoader, Font as ThreeFont } from "three/examples/jsm/Addons.js";
import { Figure } from "./figure";

export class Font {
  private static font: ThreeFont;

  constructor() {}

  public static async load() {
    if (Figure.getType() !== "text") return;
    const url = new URL(import.meta.url);
    const fontPath = new URL("./arial.json", url).href;
    return new Promise<ThreeFont>((resolve, reject) => {
      const loader = new FontLoader();
      loader.load(
        fontPath,
        (font) => {
          Font.font = font;
          resolve(font);
        },
        undefined,
        (error) => {
          console.log("font loader error", error);
          reject(error);
        }
      );
    });
  }

  public static get() {
    return Font.font;
  }
}
