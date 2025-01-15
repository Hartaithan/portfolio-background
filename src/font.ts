import { FontLoader, Font as ThreeFont } from "three/examples/jsm/Addons.js";
import { Figure } from "./figure";
import { getFontPath } from "./utils";

export class Font {
  private static font: ThreeFont;

  constructor() {}

  public static async load() {
    if (Figure.getType() !== "text") return;
    return new Promise<ThreeFont>((resolve, reject) => {
      const loader = new FontLoader();
      loader.load(
        getFontPath("arial.json"),
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
