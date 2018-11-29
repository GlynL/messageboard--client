import { AUTH_USER, AUTH_ERROR } from "./types";
import { ROOT_URL } from "../../variables";

export const signup = (form, callback) => async dispatch => {
  try {
    // signup request with users info
    const response = await fetch(`${ROOT_URL}/users/signup`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    });
    // check response is ok
    if (!response.ok) throw new Error();
    // dispatch action with returend token
    const data = await response.json();
    dispatch({
      type: AUTH_USER,
      payload: data.token
    });
    localStorage.setItem("token", data.token);
    callback();
  } catch (e) {
    // if theres an error dispatch error message
    dispatch({
      type: AUTH_ERROR,
      payload: "Email already in use."
    });
  }
};

export const signin = (form, callback) => async dispatch => {
  try {
    // signup request with users info
    const response = await fetch(`${ROOT_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    });
    // check response is ok
    if (!response.ok) throw new Error();
    // dispatch action with returend token
    const data = await response.json();
    dispatch({
      type: AUTH_USER,
      payload: data.token
    });
    localStorage.setItem("token", data.token);
    callback();
  } catch (e) {
    // if theres an error dispatch error message
    dispatch({
      type: AUTH_ERROR,
      payload: "Email/password do not match."
    });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return { type: AUTH_USER, payload: "" };
};
