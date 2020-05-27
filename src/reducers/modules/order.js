import { CONFIRM_ORDER, LOGOUT } from "../../actions/actionTypes";

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONFIRM_ORDER:
      return [...state, { ...action.data }];
    case LOGOUT:
      return [...initialState];
    default:
      return state;
  }
}
