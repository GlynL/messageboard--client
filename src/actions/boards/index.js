import { ROOT_URL } from "../../variables";
import { ADD_BOARD, FETCH_BOARDS, BOARD_ERROR } from "./types";

export const addBoard = (form, token, callback) => async dispatch => {
  try {
    const res = await fetch(`${ROOT_URL}/boards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(form)
    });
    console.log(res);
    if (!res.ok) throw new Error();
    const data = await res.json();
    dispatch({
      type: ADD_BOARD,
      payload: data
    });
    callback();
  } catch (e) {
    dispatch({
      type: BOARD_ERROR,
      payload: "Board name already in use. Please use another."
    });
  }
};

export const fetchBoards = () => async dispatch => {
  try {
    const res = await fetch(`${ROOT_URL}/boards`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    dispatch({
      type: FETCH_BOARDS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: BOARD_ERROR,
      payload: "Error fetching boards. Please try again."
    });
  }
};
