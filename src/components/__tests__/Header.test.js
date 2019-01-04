import React from "react";
import { shallow } from "enzyme";
import { Header } from "../Header";

it("matches unauthenticated snapshot", () => {
  const wrapped = shallow(<Header authenticated={false} />);
  expect(wrapped).toMatchSnapshot();
});

it("matches authenticated snapshot", () => {
  const wrapped = shallow(<Header authenticated={true} />);
  expect(wrapped).toMatchSnapshot();
});
