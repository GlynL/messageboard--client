import {
  UPDATE_BOARD,
  FETCH_BOARDS,
  SET_ACTIVE,
  BOARD_ERROR
} from "../../actions/boards/types";
import reducer from "../boards";

it("should handle the initial state", () => {
  const state = reducer(undefined, {});
  expect(state).toEqual({
    boards: [],
    activeBoard: {},
    errorMessage: ""
  });
});

it("should handle FETCH_BOARDS", () => {
  const payload = ["board 1", "board 2"];
  const action = { type: FETCH_BOARDS, payload };
  expect(reducer({}, action)).toEqual({
    boards: payload
  });
});

it("should handle SET_ACTIVE", () => {
  const payload = { name: "board 1" };
  const action = { type: SET_ACTIVE, payload };
  expect(reducer({}, action)).toEqual({
    activeBoard: payload
  });
});

it("should handle UPDATE_BOARD", () => {
  const payload = { _id: 1, name: "updated board" };
  const boards = [{ _id: 1, name: "board 1" }, { _id: 2, name: "board 2" }];
  const action = { type: UPDATE_BOARD, payload };
  expect(reducer({ boards }, action)).toEqual({
    boards: [{ _id: 1, name: "updated board" }, { _id: 2, name: "board 2" }]
  });
});

it("should handle BOARD_ERROR", () => {
  const payload = "error message";
  const action = { type: BOARD_ERROR, payload };
  expect(reducer({}, action)).toEqual({ errorMessage: payload });
});
