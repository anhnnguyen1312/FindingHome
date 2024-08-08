import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoggedInAction } from "../redux/store/action/authenAction";

export const setAuthToken = (token) => {
  Cookies.set("authToken", token, {
    expires: 1,
    secure: false,
    sameSite: "Strict",
  });
};

export const getAuthToken = () => {
  const encodeCookie = Cookies.get("authToken");

  if (encodeCookie) {
    try {
      const decodeCookie = jwtDecode(encodeCookie);
      if (decodeCookie.email && decodeCookie.password) {
        return decodeCookie;
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    return false;
  }
};

export const checkAuthenToken = () => {
  const Cookie = Cookies.get("authToken");
  const dispatch = useDispatch();

  useEffect(() => {
    {
      !Cookie && dispatch(setLoggedInAction(false));
    }
  }, [Cookie, dispatch]);
};

export const removeAuthToken = () => {
  Cookies.remove("authToken");
};
