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

  it("should handleChange of email input", () => {
    wrapper
      .find("input[name='email']")
      .simulate("change", { target: { name: "email", value: "test email" } });
    expect(wrapper.state("email")).toBe("test email");
  });

  it("should handleChange of password input", () => {
    wrapper.find('input[name="password"]').simulate("change", {
      target: { name: "password", value: "test password" }
    });
    expect(wrapper.state("password")).toBe("test password");
  });

  it("should handleSubmit of form", () => {
    const preventDefault = jest.fn();
    wrapper.setState({ email: "test email", password: "test password" });
    wrapper.find("form").simulate("submit", { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
    expect(signin).toHaveBeenCalled();
    expect(wrapper.state("email")).toBe("");
    expect(wrapper.state("password")).toBe("");
  });
});

it("renders Signin with error prop correctly", () => {
  const wrapper = shallow(<Signin errorMessage="test error" />);
  expect(wrapper).toMatchSnapshot();
});
