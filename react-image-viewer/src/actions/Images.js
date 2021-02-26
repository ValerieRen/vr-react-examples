import {MAX_NUM_OF_FRAMES} from "../utils/constants";
import * as ImageAPI from "../apis/Images";
import {getImagePathByIndex} from "../utils/helper";

export const getTotalNumOfImages = (imagePath) => {
  let totalNumOfImages = 1;
  const maxFramesInArr = [...Array(MAX_NUM_OF_FRAMES).keys()].reverse();
  // iterate max number of frames from biggest number
  maxFramesInArr.forEach((index) => {
    const path = getImagePathByIndex(imagePath, index + 1);
    const res = ImageAPI.checkImageExistenceByIndex(path);
    if (res && (index + 1) > totalNumOfImages) {
      totalNumOfImages = index + 1;
    }
  });
  return totalNumOfImages;
};

export const getImageImportByIndex = (imagePath, index) => {
  return getImagePathByIndex(imagePath, index);
};
