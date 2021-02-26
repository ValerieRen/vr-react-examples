import {getHDImageUrl, getImagePathByIndex} from "../../utils/helper";

describe("test helper functions", () => {
  it("getImagePathByIndex => replace substring by given string in the image url", () => {
    const imagePath = "http://content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/{index}/";
    const index = 1;

    const result = getImagePathByIndex(imagePath, index);
    const expected = "http://content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/1/";
    expect(result).toEqual(expected);
  });

  it("getHDImageUrl => replace substring by given parameters in the image url", () => {
    const imagePath = "http://content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/{index}/";
    const index = 1;
    const x = 10;
    const y = 10;
    const width = 512;
    const height = 512;
    const k = "4k";

    const result = getHDImageUrl(imagePath, index, x, y, width, height, k);
    const expected = "http://content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/1/?crop=(10,10,512,512)&zoom=4k";
    expect(result).toEqual(expected);
  });
});
