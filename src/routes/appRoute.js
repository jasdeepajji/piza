import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AppRoute({ store, Layout, Page, ...rest }) {
  const isLogin = store.getState().user.islogin;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (rest.path === "/") {
          return <Redirect to="/menu" />;
        } else {
          return (
            <Layout isLogin={isLogin}>
              <Page {...props} />
            </Layout>
          );
        }
      }}
    />
  );
}
