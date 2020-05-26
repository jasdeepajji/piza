import { LOGIN, LOGOUT, UPDATE_PROFILE } from "../../actions/actionTypes";

const initialState = {
  islogin: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      action.data.islogin = true;
      return { ...state, ...action.data };
    case LOGOUT:
      return { ...initialState };
    case UPDATE_PROFILE:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
