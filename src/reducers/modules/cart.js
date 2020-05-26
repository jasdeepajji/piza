import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
  CLEAR_CART,
} from "../../actions/actionTypes";

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    case REMOVE_FROM_CART:
      let cartdata = [...state];
      let index = cartdata.findIndex((x) => x.id === action.data.id);
      cartdata.splice(index, 1);
      return [...cartdata];
    case ADD_QUANTITY:
      return state.map((x) => {
        if (x.id === action.data.id) {
          x.quantity += 1;
        }
        return x;
      });
    case REMOVE_QUANTITY:
      return state.map((x) => {
        if (x.id === action.data.id) {
          x.quantity -= 1;
        }
        return x;
      });
    case CLEAR_CART:
      return [...initialState];
    default:
      return state;
  }
}
