import { LOGIN, LOGOUT, UPDATE_PROFILE } from "./actionTypes";
import { users } from "../constants";

const login_success = (data) => ({ type: LOGIN, data });
export const login = (params, callback) => (dispatch) => {
  const user = users.find(
    (x) =>
      x.email.toLowerCase() === params.email.trim().toLowerCase() &&
      x.password.toLowerCase() === params.password.trim().toLowerCase()
  );
  if (user) {
    callback(true);
    dispatch(login_success(user));
  } else {
    callback(false);
  }
};

export const logout = () => (dispatch) => dispatch({ type: LOGOUT });

const update_profile = (data) => ({ type: UPDATE_PROFILE, data });
export const updateProfile = (params) => (dispatch) => {
  dispatch(update_profile(params));
};
