import React, { useState, useEffect } from "react";
import actionTypes from "./actionTypes";
import { callApiRegister, callApiLogin } from "../../../api/authenLogin";
import {
  setAuthToken,
  removeAuthToken,
  getAuthToken,
} from "../../../api/cookieServices";
// import {jwtDecode}  from 'jwt-decode'
export const registerAction = (payload) => async (dispatch) => {
  try {
    const response = await callApiRegister(payload);

    // if (response?.data.err === 0) {
    if (response?.data.token) {
      const token = response.data.token;
      setAuthToken(token);
      const cookie = getAuthToken();
      dispatch({
        type: actionTypes.REGISTER__SUC,
        data: cookie,
      });
    } else {
      dispatch({
        type: actionTypes.REGISTER__FAIL,
        data: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER__FAIL,
      data: null,
    });
  }
};

// export const updateAccountAction = (payload) => async (dispatch) => {
//   try {
//     const response = await callApiRegister(payload);

//     // if (response?.data.err === 0) {
//     if (response?.data) {
//       const token = response.data.token;
//       setAuthToken(token);
//       const cookie = getAuthToken();
//       dispatch({
//         type: actionTypes.REGISTER__SUC,
//         data: cookie,
//       });
//     } else {
//       dispatch({
//         type: actionTypes.REGISTER__FAIL,
//         data: response.data.message,
//       });
//     }
//   } catch (error) {
//     dispatch({
//       type: actionTypes.REGISTER__FAIL,
//       data: null,
//     });
//   }
// };
//ham login

export const loginAction = (payload) => async (dispatch) => {
  try {
    const response = await callApiLogin(payload);
    ///api phải trả về token và
    // if (response?.data.err === 0) {
    // if (typeof response?.data.err === 'undefined') {
    if (response?.data.token) {
      const token = response.data.token;
      setAuthToken(token);
      const cookie = getAuthToken();
      dispatch({
        type: actionTypes.LOGIN__SUC,
        data: cookie,
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN__FAIL,
        data: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN__FAIL,
      data: null,
    });
  }
};

export const getUserAction = (cookie) => ({
  type: actionTypes.GET_USER,
  data: cookie,
});

export const logoutAction = () => ({
  type: actionTypes.LOGOUT,
  data: null,
});
