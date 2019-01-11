import React from "react";
import { shallow } from "enzyme";
import { Signout } from "../Signout";

let wrapper, signout;
beforeEach(() => {
  signout = jest.fn();
  wrapper = shallow(<Signout signout={signout} />);
});

it("renders Signout correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("handles signout call in componentDidMount", () => {
  expect(signout).toHaveBeenCalled();
});
