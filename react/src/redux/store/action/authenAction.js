import actionTypes from "./actionTypes";

import {
  callApiRegister,
  callApiLogin,
  checkEmailUser,
  resetPassword,
} from "../../../api/authenLogin";
import { callApiUpdateProfile } from "../../../api/getUserApi";
import { setAuthToken, getAuthToken } from "../../../api/cookieServices";
export const registerAction = (payload) => async (dispatch) => {
  try {
    const response = await callApiRegister(payload);

    if (response?.data.token) {
      const token = response.data.token;
      setAuthToken(token);
      const cookie = getAuthToken();
      dispatch({
        type: actionTypes.REGISTER__SUC,
        msg: response.data.message,
        data: cookie,
      });
    } else {
      dispatch({
        type: actionTypes.REGISTER__FAIL,
        msg: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER__FAIL,
      data: null,
    });
  }
};

export const loginAction = (payload) => async (dispatch) => {
  try {
    const response = await callApiLogin(payload);

    if (response?.data.token) {
      const token = response.data.token;
      setAuthToken(token);
      const cookie = getAuthToken();
      console.log("cookie", cookie);

      dispatch({
        type: actionTypes.LOGIN__SUC,
        data: cookie,
        msg: response.data.message,
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN__FAIL,
        msg: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN__FAIL,
      data: null,
    });
  }
};
export const forgotPasswordAction = (payload) => async (dispatch) => {
  try {
    const response = await checkEmailUser(payload);
    if (response?.data.success) {
      dispatch({
        type: actionTypes.VALIDATION_EMAIL_SUC,
        msg: response.data.success,
      });
    } else {
      dispatch({
        type: actionTypes.VALIDATION_EMAIL_FAIL,
        msg: response.data.fail,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.VALIDATION_EMAIL_FAIL,
      msg: null,
    });
  }
};

export const resetPasswordAction = (payload) => async (dispatch) => {
  try {
    const response = await resetPassword(payload);
    if (response?.data.success) {
      dispatch({
        type: actionTypes.RESET_PASSWORD_SUC,
        msg: response.data.success,
      });
    } else {
      dispatch({
        type: actionTypes.RESET_PASSWORD_FAIL,
        msg: response.data.fail,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.RESET_PASSWORD_FAIL,
      msg: null,
    });
  }
};

export const getUserAction = (cookie) => ({
  type: actionTypes.GET_USER,
  data: cookie,
});

export const logoutAction = (success) => ({
  type: actionTypes.LOGOUT,
  msg: success ? success : "Đăng xuất thành công",
});

export const updateUserAction = (payload) => async (dispatch) => {
  try {
    const response = await callApiUpdateProfile(payload);

    if (response?.data) {
      const token = response.data.token;
      setAuthToken(token);
      const cookie = getAuthToken();
      dispatch({
        type: actionTypes.UPDATE_PROFILE_SUC,
        data: cookie,
        msg: "success",
      });
    } else {
      dispatch({
        type: actionTypes.UPDATE_PROFILE_FAIL,
        msg: "fail",
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_PROFILE_FAIL,
      data: null,
      msg: "fail",
    });
  }
};
export const updateUserActionAccess = () => ({
  type: actionTypes.UPDATE_PROFILE_ACCESS,
  msg: null,
});

export const setLoggedInAction = (isLoggedIn) => ({
  type: actionTypes.SET_lOGGED_IN,
  state: isLoggedIn,
});
