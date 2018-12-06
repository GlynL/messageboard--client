import { ROOT_URL } from "../../variables";
import { ADD_THREAD, SET_ACTIVE_THREAD, THREAD_ERROR } from "./types";

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

export const setActiveThread = (id, board) => {
  const thread = board.threads.filter(thread => thread._id === id)[0];
  return {
    type: SET_ACTIVE_THREAD,
    payload: thread
  };
};

export const addReply = (
  form,
  board,
  thread,
  token,
  callback
) => async dispatch => {
  try {
    const res = await fetch(`${ROOT_URL}/${board}/${thread}/replies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(form)
    });
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (callback) callback(data.board);
    dispatch({
      type: SET_ACTIVE_THREAD,
      payload: data.thread
    });
  } catch (e) {
    dispatch({
      type: THREAD_ERROR,
      payload: "Error adding reply. Please try again."
    });
  }
};
