export const getImageURL = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href; // Importing current path for images and other assets
};
