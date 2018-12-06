import {
  UPDATE_BOARD,
  FETCH_BOARDS,
  SET_ACTIVE,
  BOARD_ERROR
} from "../actions/boards/types";

const INITIAL_STATE = {
  boards: [],
  activeBoard: {},
  errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BOARDS:
      return { ...state, boards: action.payload };
    case SET_ACTIVE:
      return { ...state, activeBoard: action.payload };
    case UPDATE_BOARD: {
      const boards = state.boards.map(board => {
        if (board._id === action.payload._id) return action.payload;
        return board;
      });
      return { ...state, boards };
    }

    case BOARD_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
