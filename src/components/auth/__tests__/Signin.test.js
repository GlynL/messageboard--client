import React from "react";
import { shallow } from "enzyme";
import { Signin } from "../Signin";

describe("w/out props", () => {
  let wrapper, history, signin;
  beforeEach(() => {
    history = { push: jest.fn() };
    signin = jest.fn();
    wrapper = shallow(<Signin history={history} signin={signin} />);
  });

  it("renders Signin correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

it("renders Signin with error prop correctly", () => {
  const wrapper = shallow(<Signin errorMessage="test error" />);
  expect(wrapper).toMatchSnapshot();
});
