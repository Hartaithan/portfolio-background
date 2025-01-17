export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const debounce = (callback: (...args: any) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), wait);
  };
};

export const getFontPath = (filename: string) => {
  let src: string = "";
  if (document.currentScript instanceof HTMLScriptElement) {
    src = document.currentScript.src;
  } else {
    const scripts = Array.from(document.scripts) as HTMLScriptElement[];
    const script = scripts.find(({ src }) => src.includes("init.iife.js"));
    if (script) src = script.src;
  }
  if (!src) return `./${filename}`;
  const directory = src.substring(0, src.lastIndexOf("/") + 1);
  return directory + filename;
};
