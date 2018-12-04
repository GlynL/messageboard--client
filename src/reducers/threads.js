import { THREAD_ERROR, ADD_THREAD } from "../actions/threads/types";

const INITIAL_STATE = {
  errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case THREAD_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
