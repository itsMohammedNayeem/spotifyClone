import React from "react";
import { mount, shallow } from "enzyme";
import EditSong from "./EditSong";

describe("EditSong", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<div />);
  });

  test("render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
