import React from "react";
import { shallow } from "enzyme";
import { Threads } from "../Threads";

it("matches snapshot initial loading", () => {
  const wrapper = shallow(<Threads board={{}} />);
  expect(wrapper).toMatchSnapshot();
});

describe("with board & thread prop", () => {
  let wrapper, board;
  beforeEach(() => {
    wrapper = shallow(<Threads board={{ name: 'mockboard', _id: 1, threads: [{_id: 1, title: 'mockthread 1', text: 'mock text'}, {_id: 2, title: 'mockthread 2', text: 'mock text'}]}} match={{ params: { board: "mockboard"}}} />)
  })

  it("matches snapshot w/out auth" , () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot w/ auth', () => {
    wrapper.setProps({ authed: 'mockauth'})
    expect(wrapper).toMatchSnapshot();
  })
})