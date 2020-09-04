import { toast } from "react-toastify";
import { getCookie, authenticate } from "../utils/authHelper";

const BASE_URL = "http://localhost:8000/api";

const headers = {
  "Content-Type": "application/json",
  Authorization: getCookie("token") || "",
};

// async function get(url = "") {
//   const response = await fetch(BASE_URL + url, headers);
//   return response.json();
// }

async function post(url = "", data = {}) {
  const response = await fetch(BASE_URL + url, {
    method: "POST",
    mode: "cors",
    headers,
    body: JSON.stringify(data),
  });
  return response.json();
}

export const login = async ({ email, password, history }) => {
  try {
    const { error, data } = await post("/login", { email, password });
    if (error) throw new Error(error);
    const { token } = data;
    authenticate(token);
    const { username } = data.user;
    toast.success(`logged in as ${username}`);

    history.push("/dashboard");
    return "logged in";
  } catch (err) {
    throw err;
  }
};

export const activate = async (token) => {
  console.log(token);
  try {
    const { error, data } = await post("/activate-account", { token });
    if (error) throw new Error(error);
    return data;
  } catch (err) {
    throw err;
  }
};

export const signup = async ({ username, email, password, history }) => {
  try {
    const { error, data } = await post("/signup", {
      username,
      email,
      password,
    });
    if (error) throw new Error(error);
    toast.info(`email has been sent to ${email}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const forgotPassword = async ({ email, history }) => {
  try {
    const { error, data } = await post("/forgot-password", { email });
    if (error) throw new Error(error);
    toast.info(`password reset link sent to email`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const resetPassword = async ({ password, history, resetToken }) => {
  try {
    const { error, data } = await post("/reset-password", {
      token: resetToken,
      password,
    });
    if (error) throw new Error(error);
    toast.success(`password updated!`);
    history.push("/login");
    return data;
  } catch (err) {
    throw err;
  }
};
