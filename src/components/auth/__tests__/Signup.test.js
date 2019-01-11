import React from "react";
import { shallow } from "enzyme";
import { Signup } from "../Signup";

describe("w/out props", () => {
  let wrapper, history, signup;
  beforeEach(() => {
    history = { push: jest.fn() };
    signup = jest.fn();
    wrapper = shallow(<Signup history={history} signup={signup} />);
  });

  it("renders Signup correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

it("renders Signup with error prop correctly", () => {
  const wrapper = shallow(<Signup errorMessage="test error" />);
  expect(wrapper).toMatchSnapshot();
});
