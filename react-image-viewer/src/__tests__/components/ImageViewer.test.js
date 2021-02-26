import React from 'react';
import ImageViewer from "../../components/ImageViewer";
import {mount, shallow} from "enzyme";

describe("test component ImageViewer", () => {
  const imagePath = "http://content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/{index}/";

  it('should render img tag', () => {
    const wrapper = shallow(
      <ImageViewer imagePath={imagePath} />
    );
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
