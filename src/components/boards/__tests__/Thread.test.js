import React from "react";
import { shallow } from "enzyme";
import { Thread } from "../Thread";

describe("initial load", () => {
  let setActive, setActiveThread, match, wrapper;
  beforeEach(() => {
    setActive = jest.fn();
    setActiveThread = jest.fn();
    match = {
      params: {
        board: "mock board"
      }
    };
    wrapper = shallow(
      <Thread
        match={match}
        setActive={setActive}
        thread={{}}
        setActiveThread={setActiveThread}
      />
    );
  });

  it("calls componentDidMount", () => {
    expect(setActive).toHaveBeenCalledWith(match.params.board);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("w/ board prop", () => {
  let match, wrapper, board;

  beforeEach(() => {
    board = {
      name: "mock board"
    };
    match = {
      params: {
        board: "mock board",
        thread: "mock thread"
      }
    };
    wrapper = shallow(
      <Thread
        match={match}
        thread={{ title: "mock thread", text: "mock text" }}
        board={board}
        setActive={jest.fn()}
      />
    );
  });

  it("call componentDidUpdate", () => {
    const setActiveThread = jest.fn();
    wrapper.setProps({ setActiveThread });
    expect(setActiveThread).toHaveBeenCalledWith(match.params.thread, board);
  });

  it("matches snapshot w/ thread", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
