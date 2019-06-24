import React from "react";
import { shallow } from "enzyme";
import { Signout } from "../Signout";

let wrapper, signout, history;
beforeEach(() => {
  signout = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<Signout signout={signout} history={history} />);
});

it("renders Signout correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("handles signout call in componentDidMount", () => {
  expect(signout).toHaveBeenCalled();
});
