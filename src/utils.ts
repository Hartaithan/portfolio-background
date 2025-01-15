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
  const script = (document.currentScript as HTMLScriptElement).src;
  const directory = script.substring(0, script.lastIndexOf("/") + 1);
  return directory + filename;
};
