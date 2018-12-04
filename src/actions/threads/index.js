import { ROOT_URL } from "../../variables";
import { ADD_THREAD, THREAD_ERROR } from "./types";

export const addThread = (form, board, token, callback) => async dispatch => {
  try {
    const res = await fetch(`${ROOT_URL}/${board}/threads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(form)
    });
    console.log(res);
    if (!res.ok) throw new Error();
    const data = res.json();
    dispatch({
      type: ADD_THREAD,
      payload: data
    });
    callback();
  } catch (e) {
    dispatch({
      type: THREAD_ERROR,
      payload: "Error creating thread. Please try again."
    });
  }
};
