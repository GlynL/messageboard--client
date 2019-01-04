import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as types from "../boards/types";
import * as actions from "../boards";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  fetch.resetMocks();
});

describe("fetchBoards", () => {
  it("creates FETCH_BOARDS when fetching boards done", async () => {
    expect.assertions(1);
    fetch.mockResponseOnce(JSON.stringify(["board 1", "board 2"]));

    const expectedActions = [
      { type: types.FETCH_BOARDS, payload: ["board 1", "board 2"] }
    ];

    const initialState = {};
    const store = mockStore(initialState);
    // mocked store holds an array of actions which have been dispatched

    await store.dispatch(actions.fetchBoards());
    // return of async actions
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("creates BOARD_ERROR when fetching error", async () => {
    expect.assertions(1);
    fetch.mockReject(new Error("fake error message"));

    const expectedActions = [
      {
        type: types.BOARD_ERROR,
        payload: "Error fetching boards. Please try again."
      }
    ];

    const initialState = {};
    const store = mockStore(initialState);

    await store.dispatch(actions.fetchBoards());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe("addBoard", () => {
  let callback;

  beforeEach(() => {
    callback = jest.fn();
  });

  it("creates ADD_BOARD when fetch addBoard done", async () => {
    expect.assertions(2);
    const board = { name: "test board" };
    fetch.mockResponseOnce(JSON.stringify(board));

    const expectedActions = [{ type: types.ADD_BOARD, payload: board }];

    const initialState = {};
    const store = mockStore(initialState);

    await store.dispatch(actions.addBoard({}, "token", callback));
    expect(store.getActions()).toEqual(expectedActions);
    expect(callback).toHaveBeenCalled();
  });

  it("creates BOARD_ERROR when fetching addBoard error", async () => {
    expect.assertions(1);
    fetch.mockReject(new Error("fake error message"));
    const expectedActions = [
      {
        type: types.BOARD_ERROR,
        payload: "Board name already in use. Please use another."
      }
    ];

    const initialState = {};
    const store = mockStore(initialState);

    await store.dispatch(actions.addBoard({}, "token", callback));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe("setActive", () => {
  it("creates SET_ACTIVE when fetching single board", async () => {
    expect.assertions(1);
    const board = { name: "test board" };
    fetch.mockResponseOnce(JSON.stringify(board));

    const expectedActions = [
      {
        type: types.SET_ACTIVE,
        payload: board
      }
    ];

    const initialState = {};
    const store = mockStore(initialState);

    await store.dispatch(actions.setActive(board.name));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("creates BOARD_ERROR when error fetching single board", async () => {
    expect.assertions(1);
    const board = { name: "test board" };
    fetch.mockReject(new Error("fake error"));

    const expectedActions = [
      {
        type: types.BOARD_ERROR,
        payload: "Error finding board. Please try again."
      }
    ];

    const initialState = {};
    const store = mockStore(initialState);

    await store.dispatch(actions.setActive(board.name));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe("updateBoard", () => {
  it("should create UPDATE_BOARD action", () => {
    const board = { name: "test board" };
    const action = actions.updateBoard(board);
    expect(action.payload).toEqual(board);
    expect(action.type).toEqual(types.UPDATE_BOARD);
  });
});
