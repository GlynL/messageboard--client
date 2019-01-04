import { THREAD_ERROR, SET_ACTIVE_THREAD } from "../actions/threads/types";

const INITIAL_STATE = {
  activeThread: {},
  errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case THREAD_ERROR:
      return { ...state, errorMessage: action.payload };
    case SET_ACTIVE_THREAD:
      return { ...state, activeThread: action.payload };
    default:
      return state;
  }
}
