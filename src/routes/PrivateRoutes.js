import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthorized } from "../utils/authHelper";

function PrivateRoute({ component: Component, ...rest }) {
  console.log("auth", isAuthorized());
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthorized() ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
