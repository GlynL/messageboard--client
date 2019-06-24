import React from "react";
import { shallow } from "enzyme";
import { Replies } from "../Replies";

it("matches snapshot", () => {
  const wrapper = shallow(
    <Replies
      replies={[
        { _id: 1, text: "mock reply 1" },
        { _id: 2, text: "mock reply 2" }
      ]}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
