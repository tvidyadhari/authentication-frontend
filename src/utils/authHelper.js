import cookie from "js-cookie";

export const setCookie = (key, val) => cookie.set(key, val);
export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};
export const removeCookie = (key) => cookie.remove(key);

export const authenticate = (token) => {
  setCookie("token", token);
  console.log(getCookie("token"));
};

export const isAuthorized = () => !!getCookie("token");
export const logout = () => removeCookie("token");
