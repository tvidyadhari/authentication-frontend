import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthorized } from "../utils/authHelper";

function PublicRoute({ component: Component, restricted, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthorized() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        );
      }}
    ></Route>
  );
}

export default PublicRoute;
