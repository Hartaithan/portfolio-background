import { loadThree } from "./three";

export const init = async () => {
  const THREE = await loadThree();
  console.log("THREE", THREE);
};
