import React from "react";
import { shallow } from "enzyme";
import { Board } from "../Board";

describe("with board prop -loaded from componentDidMount", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Board
        match={{ params: { board: "test board" } }}
        board={{ name: "test board" }}
        setActive={jest.fn()}
      />
    );
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("without board fetched", () => {
  let wrapper, setActive;
  beforeEach(() => {
    setActive = jest.fn();
    wrapper = shallow(
      <Board
        match={{ params: { board: "test board" } }}
        setActive={setActive}
        board={{}}
      />
    );
  });
  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("calls setActive in componentDidMount", () => {
    expect(setActive).toHaveBeenCalledWith(
      wrapper.instance().props.match.params.board
    );
  });
});
