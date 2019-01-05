import React from "react";
import { shallow } from "enzyme";
import { NewReply } from "../NewReply";

it("matches snapshot w/out auth", () => {
  const wrapper = shallow(<NewReply />);
  expect(wrapper).toMatchSnapshot();
});

describe("w/ auth", () => {
  let wrapper, addReply, match;
  beforeEach(() => {
    match = {
      params: {
        board: "test board",
        thread: "test thread"
      }
    };
    addReply = jest.fn();
    wrapper = shallow(
      <NewReply token="test token" addReply={addReply} match={match} />
    );
  });

  it("matches snapshot w auth", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("textarea & form", () => {
    beforeEach(() => {
      wrapper
        .find("textarea")
        .simulate("change", { target: { value: "test", name: "text" } });
      wrapper.update();
    });

    it("handles textarea change", () => {
      expect(wrapper.find("textarea").prop("value")).toBe("test");
      expect(wrapper.state("text")).toBe("test");
    });

    it("handles form submit", () => {
      const preventDefault = jest.fn();
      wrapper.find("form").simulate("submit", { preventDefault });
      wrapper.update();
      expect(preventDefault).toHaveBeenCalled();
      expect(addReply).toHaveBeenCalled();
      expect(wrapper.find("textarea").prop("value")).toBe("");
      expect(wrapper.state("text")).toBe("");
    });
  });
});

it("matches snapshot w/ auth & error", () => {
  const wrapper = shallow(<NewReply token="test token" error="test error" />);
  expect(wrapper).toMatchSnapshot();
});
