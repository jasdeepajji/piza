import { CONFIRM_ORDER } from "./actionTypes";
import { clear_cart } from "./cart";
import _ from "lodash";

const confirm_order = (data) => ({ type: CONFIRM_ORDER, data });
export const confirmOrder = (params) => (dispatch, state) => {
  dispatch(confirm_order({ ...params, items: _.cloneDeep(state().cart) }));
  dispatch(clear_cart());
};
