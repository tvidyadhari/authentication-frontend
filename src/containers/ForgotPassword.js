import React from "react";
import { formFieldData } from "../utils/formHelper";
import { forgotPassword } from "../api/auth";
import ForgotPasswordForm from "../components/Form";

function ForgotPassword({ history }) {
  const { email } = formFieldData;
  const formData = {
    buttonText: "send email",
    formLabel: `Forgot your password? enter your email to reset it`,
    fields: [{ ...email }],
    submit: forgotPassword,
  };
  return <ForgotPasswordForm history={history} {...formData} />;
}
export default ForgotPassword;
