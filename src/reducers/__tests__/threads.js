import { THREAD_ERROR, SET_ACTIVE_THREAD } from "../../actions/threads/types";

import reducer from "../threads";
import { SET_ACTIVE } from "../../actions/boards/types";

it("should handle initial state", () => {
  const state = reducer(undefined, {});
  expect(state).toEqual({
    activeThread: {},
    errorMessage: ""
  });
});

it("should handle SET_ACTIVE_THREAD", () => {
  const payload = { _id: 1, thread: "active thread" };
  const action = { type: SET_ACTIVE_THREAD, payload };
  const state = reducer({}, action);
  expect(state).toEqual({
    activeThread: payload
  });
});

it("should handle THREAD_ERROR", () => {
  const payload = "error message";
  const action = { type: THREAD_ERROR, payload };
  const state = reducer({}, action);
  expect(state).toEqual({
    errorMessage: payload
  });
});
