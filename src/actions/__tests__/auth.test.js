import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as types from "../auth/types";
import * as actions from "../auth";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  fetch.resetMocks();
});

let store;
beforeEach(() => {
  const initialState = {};
  store = mockStore(initialState);
});

describe("signup", () => {
  let callback;
  beforeEach(() => {
    callback = jest.fn();
  });

  it("creates AUTH_USER action after signup fetch", async () => {
    expect.assertions(2);
    fetch.mockResponseOnce(JSON.stringify({ token: "mock token" }));

    const expectedActions = [
      {
        type: types.AUTH_USER,
        payload: "mock token"
      }
    ];

    await store.dispatch(actions.signup({}, callback));
    expect(store.getActions()).toEqual(expectedActions);
    expect(callback).toHaveBeenCalled();
  });

  it("creates AUTH_ERROR action after failed signup fetch", async () => {
    expect.assertions(1);
    fetch.mockReject(new Error("mock error"));
    const expectedActions = [
      {
        type: types.AUTH_ERROR,
        payload: "Email already in use."
      }
    ];
    await store.dispatch(actions.signup({}, callback));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe("signin", () => {
  let callback;
  beforeEach(() => {
    callback = jest.fn();
  });

  it("creates AUTH_USER action after signin fetch", async () => {
    expect.assertions(2);
    const token = "mock token";
    fetch.mockResponseOnce(JSON.stringify({ token }));
    const expectedActions = [{ type: types.AUTH_USER, payload: token }];
    await store.dispatch(actions.signin({}, callback));
    expect(store.getActions()).toEqual(expectedActions);
    expect(callback).toHaveBeenCalled();
  });

  it("creates AUTH_ERROR action after signin fetch failure", async () => {
    expect.assertions(1);
    fetch.mockReject(new Error("mock error"));
    const expectedActions = [
      { type: types.AUTH_ERROR, payload: "Email/password do not match." }
    ];
    await store.dispatch(actions.signin({}, callback));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe("signout", () => {
  it("creates AUTH_USER action w/ empty payload", () => {
    expect(actions.signout()).toEqual({ type: types.AUTH_USER, payload: "" });
  });
});
