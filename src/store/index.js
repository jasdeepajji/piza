import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers";

export default (history) => {
  const store = createStore(
    rootReducer(history),
    compose(applyMiddleware(logger, thunk, routerMiddleware(history)))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
