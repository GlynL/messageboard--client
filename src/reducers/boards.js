import { ADD_BOARD, FETCH_BOARDS, BOARD_ERROR } from "../actions/boards/types";

const INITIAL_STATE = {
  boards: [],
  activeBoard: {},
  errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BOARDS:
      return { ...state, boards: action.payload };
    // case ADD_BOARD:
    // return state
    case BOARD_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
