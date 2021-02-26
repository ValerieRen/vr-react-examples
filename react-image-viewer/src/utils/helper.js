export const getImagePathByIndex = (imagePath, index) => {
  return imagePath.replace("{index}", index);
};

export const getHDImageUrl = (imagePath, index, x, y, width, height, k) => {
  return `${getImagePathByIndex(imagePath, index)}?crop=(${x},${y},${width},${height})&zoom=${k}`;
};
