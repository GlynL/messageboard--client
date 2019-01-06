import React from "react";
import { shallow } from "enzyme";
import { NewThread } from "../NewThread";

describe("snapshots", () => {
  it("renders w/out error correctly", () => {
    const wrapper = shallow(<NewThread />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders w error correctly", () => {
    const wrapper = shallow(<NewThread error="test error" />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("input/textarea & form", () => {
  let wrapper, addThread;
  beforeEach(() => {
    addThread = jest.fn();
    wrapper = shallow(
      <NewThread
        addThread={addThread}
        match={{ params: { board: "test board" } }}
      />
    );
    wrapper.find("input").simulate("change", {
      target: { name: "title", value: "test input" }
    });
    wrapper
      .find("textarea")
      .simulate("change", { target: { name: "text", value: "test text" } });
    wrapper.update();
  });

  it("handles change of input", () => {
    expect(wrapper.find("input").prop("value")).toBe("test input");
  });

  it("handles change of textarea", () => {
    expect(wrapper.find("textarea").prop("value")).toBe("test text");
  });

  it("handles form submit", () => {
    const preventDefault = jest.fn();
    wrapper.find("form").simulate("submit", { preventDefault });
    wrapper.update();
    expect(preventDefault).toHaveBeenCalled();
    expect(addThread).toHaveBeenCalled();
  });
});
