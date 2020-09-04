import React from "react";
import { formFieldData } from "../utils/formHelper";
import { signup } from "../api/auth";
import SignupForm from "../components/Form";

function Signup() {
  const { username, email, password, confirmPassword } = formFieldData;
  const signupFormData = {
    buttonText: "signup",
    formLabel: "signup",
    fields: [
      { ...username },
      { ...email },
      { ...password },
      { ...confirmPassword },
    ],
    submit: signup,
  };
  return <SignupForm {...signupFormData} />;
}
export default Signup;
