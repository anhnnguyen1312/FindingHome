import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const setAuthToken = (token) => {
  Cookies.set("authToken", token, {
    expires: 1,
    secure: false,
    sameSite: "Strict",
  });
};

export const getAuthToken = () => {
  console.log("getAuthToken 1");

  const encodeCookie = Cookies.get("authToken");
  console.log("encodeCookie ", encodeCookie);

  if (encodeCookie) {
    try {
      const decodeCookie = jwtDecode(encodeCookie);
      console.log("decodeCookie ", decodeCookie);

      return decodeCookie;
    } catch (error) {
      console.log(error);
    }
  } else {
    return false;
  }
};

export const removeAuthToken = () => {
  Cookies.remove("authToken");
};
