import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// components
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import ResetPassword from "../containers/ResetPassword";
import ForgotPassword from "../containers/ForgotPassword";
import Dashboard from "../containers/Dashboard";
import Nav from "../containers/Nav";
import Logout from "../containers/Logout";
import Activate from "../containers/Activate";

import Home from "../containers/Home";
// Route components
import PublicRoute from "./PublicRoutes";
import PrivateRoute from "./PrivateRoutes";

function Routes() {
  return (
    <Router>
      <PublicRoute path="/" component={Nav} />
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/login" exact restricted component={Login} />
        <PublicRoute path="/signup" exact restricted component={Signup} />
        <PublicRoute
          path="/forgot-password"
          exact
          restricted
          component={ForgotPassword}
        />
        <PublicRoute
          path="/reset-password/:token"
          exact
          restricted
          component={ResetPassword}
        />
        <PublicRoute
          path="/activate/:token"
          exact
          restricted
          component={Activate}
        />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/logout" exact component={Logout} />
      </Switch>
    </Router>
  );
}

export default Routes;
