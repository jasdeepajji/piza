import { persistCombineReducers } from "redux-persist";
import { connectRouter } from "connected-react-router";
import storage from "redux-persist/es/storage";
import encryptor from "./encryptor";
import cart from "./modules/cart";
import user from "./modules/user";
import order from "./modules/order";

const config = {
  key: "admin-app",
  storage: storage,
  transforms: [encryptor],
  blacklist: ["router"],
};

export default (history) =>
  persistCombineReducers(config, {
    router: connectRouter(history),
    cart,
    user,
    order,
  });
