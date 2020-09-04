import React from "react";
import { formFieldData } from "../utils/formHelper";
import { login } from "../api/auth";
import LoginForm from "../components/Form";
import { Link } from "react-router-dom";

function Login({ history }) {
  console.log(history);
  const { email, password } = formFieldData;
  const loginFormData = {
    buttonText: "login",
    formLabel: "login",
    fields: [{ ...email }, { ...password }],
    submit: login,
  };
  return (
    <div className="container">
      <LoginForm {...loginFormData} history={history} />
      <Link
        className="forgot-password help has-text-danger"
        to="/forgot-password"
      >
        forgot password?
      </Link>
    </div>
  );
}
export default Login;
