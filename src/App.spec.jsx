import React from "react";
import { mount, shallow } from "enzyme";
import App from "./App";
import EditSong from "./EditSong";
import SongList from "./SongList";

describe("App", () => {
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

describe("Test SongsList using Shallow rendering", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      songs: [
        {
          id: 1,
          title: "Tumhi Dekho Naa",
          movie: "Kabhi Alvida Na Kehna",
          duration: "5:35",
          artist: "Sonu Nigam",
          count: 14,
        },
        {
          id: "2",
          title: "Mitwa",
          movie: "Kabhi Alvida Na Kehna",
          duration: "2:30",
          artist: "Shafqat Ali",
          count: 5,
        },
      ],
    };
    wrapper = shallow(<SongList {...props} />);
  });

  it("has 1 text input elements", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });
});
