import { combineReducers } from "redux";
import auth from "./auth";
import boards from "./boards";
import threads from "./threads";

export default combineReducers({
  auth,
  boards,
  threads
});
