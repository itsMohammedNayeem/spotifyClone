import React from "react";
import { mount, shallow } from "enzyme";
import SongList from "./SongList";
import SongCard from "./SongCard";
import App from "./App";

describe("SongList", () => {
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

describe("When songs array passed to SongsList is empty", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      song: [],
    };
    wrapper = shallow(<SongCard {...props} />);
  });

  it("should not crash", () => {
    let li = wrapper.find("song");
    expect(li.length).toEqual(0);
  });
});

describe("When songs array is passed to SongsList", () => {
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
    wrapper = shallow(<SongCard {...props} />);
  });

  it("renders correctly when passed the props", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
