import React from "react";
import { shallow } from "enzyme";
import Form from "../Form";

let wrapper, handleSubmit;

beforeEach(() => {
  handleSubmit = jest.fn();
  wrapper = shallow(<Form handleSubmit={handleSubmit} />);
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
  const state = { email: "test@test.com", password: "test" };
  wrapper.setState(state);
  wrapper.find("form").simulate("submit", { preventDefault });
  expect(preventDefault).toHaveBeenCalled();
  expect(handleSubmit).toHaveBeenCalledWith(state);
});
