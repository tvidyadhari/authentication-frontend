const validEmail = (value) =>
  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value);
const containsDigit = (value) => /[0-9]+/.test(value);
const containsUppercase = (value) => /[A-Z]+/.test(value);

// checking email, password, username only
export const validate = (element, label, originalPassword) => {
  const { type, value, name } = element;
  // if required field is empty
  if (!value) return `${label || name} can't be empty`;
  // email check
  if (type === "email" && !validEmail(value)) return "provide a valid email";
  // password check
  if (type === "password") {
    if (originalPassword && originalPassword !== value)
      return "passwords must match";
    if (value.length < 8) return "password should have at least 8 characters";
    if (!containsDigit(value)) return "password must contain a digit";
    if (!containsUppercase(value))
      return "password must contain an uppercase letter";
  }
  // if no errors return empty string
  return "";
};

export const formFieldData = {
  email: { type: "email", name: "email", placeholder: "email", label: "email" },
  password: {
    type: "password",
    name: "password",
    placeholder: "password",
    label: "password",
  },
  confirmPassword: {
    type: "password",
    name: "confirmPassword",
    placeholder: "confirm password",
    label: "confirm password",
  },
  username: {
    type: "text",
    name: "username",
    placeholder: "username",
    label: "username",
  },
};
