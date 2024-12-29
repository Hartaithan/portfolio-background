import { initThree } from "./three";

export const init = async () => {
  const THREE = await initThree();
  console.log("THREE", THREE);
};
