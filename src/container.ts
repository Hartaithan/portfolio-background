export const getContainer = (): HTMLElement => {
  const container = document.getElementById("background");
  if (!container) {
    const message = "element with id background not found";
    console.error(message);
    throw new Error(message);
  }
  return container;
};
