import React from "react";
import { Switch } from "react-router-dom";
import AppRoute from "./appRoute";
import { PrivateLayout, PublicLayout } from "../components/Layout";
import Login from "../containers/Login";
import Menu from "../containers/Menu";
import Cart from "../containers/Cart";
import Order from "../containers/Order";

export default function Router(store) {
  return (
    <Switch>
      <AppRoute
        path="/"
        exact
        Page={Login}
        Layout={PublicLayout}
        store={store}
      />
      <AppRoute
        path="/Menu"
        exact
        Page={Menu}
        Layout={PrivateLayout}
        store={store}
      />
      <AppRoute
        path="/cart"
        exact
        Page={Cart}
        Layout={PrivateLayout}
        store={store}
      />
      <AppRoute
        path="/order"
        exact
        Page={Order}
        Layout={PrivateLayout}
        store={store}
      />
    </Switch>
  );
}
