import React from "react";
import { shallow } from "enzyme";
import { NewBoard } from "../NewBoard";

let wrapper, addBoard, history, token;

beforeEach(() => {
  addBoard = jest.fn();
  history = { push: jest.fn() };
  token = "test token";
  wrapper = shallow(
    <NewBoard addBoard={addBoard} token={token} history={history} />
  );
});

it("matches snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("handleChange of input", () => {
  wrapper
    .find("input")
    .simulate("change", { target: { name: "name", value: "test" } });
  wrapper.update();
  expect(wrapper.state("name")).toBe("test");
});

it("should handleSubmit", () => {
  const preventDefault = jest.fn();
  wrapper.find("form").simulate("submit", { preventDefault });
  expect(preventDefault).toHaveBeenCalled();
  expect(addBoard).toHaveBeenCalled();
});
