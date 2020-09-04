import React from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../utils/authHelper";

function Logout() {
  logout();
  return <Redirect to="/" />;
}

export default Logout;
