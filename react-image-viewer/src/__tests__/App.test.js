import React from "react";
import {shallow} from "enzyme";
import App from "../App";

describe("test component App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
