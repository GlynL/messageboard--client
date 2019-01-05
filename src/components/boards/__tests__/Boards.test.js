import React from "react";
import { shallow } from "enzyme";
import { Boards } from "../Boards";

it("matches snapshot w/out auth", () => {
  const wrapper = shallow(<Boards authed="" />);
  expect(wrapper).toMatchSnapshot();
});
it("matches snapshot w/ auth", () => {
  const wrapper = shallow(<Boards authed="mockauth" />);
  expect(wrapper).toMatchSnapshot();
});
