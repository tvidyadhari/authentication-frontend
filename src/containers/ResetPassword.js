import React from "react";
import { formFieldData } from "../utils/formHelper";
import { resetPassword } from "../api/auth";
import ResetPasswordForm from "../components/Form";

function ResetPassword({ history, match }) {
  const { token } = match.params;
  const { password } = formFieldData;
  const formData = {
    buttonText: "reset password",
    formLabel: `Reset Password. Enter your new password`,
    fields: [{ ...password }],
    submit: resetPassword,
  };
  return (
    <ResetPasswordForm history={history} resetToken={token} {...formData} />
  );
}
export default ResetPassword;
