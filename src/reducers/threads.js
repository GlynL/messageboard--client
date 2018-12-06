import {
  THREAD_ERROR,
  ADD_REPLY,
  SET_ACTIVE_THREAD
} from "../actions/threads/types";

const INITIAL_STATE = {
  activeThread: {},
  errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case THREAD_ERROR:
      return { ...state, errorMessage: action.payload };
    case SET_ACTIVE_THREAD:
      console.log(action.payload);
      return { ...state, activeThread: action.payload };
    case ADD_REPLY:
      return { ...state };
    default:
      return state;
  }
}
