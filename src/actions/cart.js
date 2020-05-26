import {
  CLEAR_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
} from "./actionTypes";

const add_to_cart = (data) => ({ type: ADD_TO_CART, data });
export const addToCart = (params) => (dispatch) => {
  dispatch(add_to_cart({ ...params }));
};

const remove_from_cart = (data) => ({ type: REMOVE_FROM_CART, data });
export const removeFromCart = (params) => (dispatch) => {
  dispatch(remove_from_cart({ ...params }));
};

const add_quantity = (data) => ({ type: ADD_QUANTITY, data });
export const addQuantityAction = (params) => (dispatch) => {
  dispatch(add_quantity({ ...params }));
};

const remove_quantity = (data) => ({ type: REMOVE_QUANTITY, data });
export const removeQuantityAction = (params) => (dispatch) => {
  dispatch(remove_quantity({ ...params }));
};

export const clear_cart = () => ({ type: CLEAR_CART });
