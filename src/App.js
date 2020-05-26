import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import configureStore from "./store";
import Router from "./routes";

const history = createBrowserHistory();

const { store, persistor } = configureStore(history);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <ToastContainer />
          <Router {...store} />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
