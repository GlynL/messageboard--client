import { AUTH_USER, AUTH_ERROR } from "../../actions/auth/types";
import authReducer from "../auth";

it("should return the initial state", () => {
  const state = authReducer(undefined, {});
  expect(state).toEqual({
    authenticated: "",
    errorMessage: ""
  });
});

it("handles actions of type AUTH_USER", () => {
  const action = { type: AUTH_USER, payload: "token" };
  const state = authReducer(undefined, action);
  expect(state).toEqual({
    authenticated: "token",
    errorMessage: ""
  });
});

it("handles actions of type AUTH_ERROR", () => {
  const action = { type: AUTH_ERROR, payload: "error message" };
  const state = authReducer(undefined, action);
  expect(state).toEqual({
    authenticated: "",
    errorMessage: "error message"
  });
});
