import actionTypes from './actionTypes'
import { callApiRegister, callApiLogin } from '../../../api/authenLogin'
import {jwtDecode}  from 'jwt-decode'
export const registerAction = (payload) => async (dispatch ) => {
    try {
        const response = await callApiRegister(payload)
  
        // if (response?.data.err === 0) {
            if (!response?.data.message) {
              const token = response.data.token;
              console.log('helllo',response.data.token);
              // const secretKey = '$/0ne_punch_m4n/$';
              const decodedToken = jwtDecode(token);     
              console.log('thanh cong men', decodedToken);
            dispatch({
                type: actionTypes.REGISTER__SUC,
                data: response.data
             })
        }
        else {
            dispatch({
                type: actionTypes.REGISTER__FAIL,
                msg: response.data.message
             })
        }
  } catch (eror) {
    dispatch({
      type: actionTypes.REGISTER__FAIL,
      data: null,
    });
  }
};

//ham login

export const loginAction = (payload) => async (dispatch) => {
  try {
    const response = await callApiLogin(payload);
    ///api phải trả về token và
    // if (response?.data.err === 0) {
    // if (typeof response?.data.err === 'undefined') {
    console.log("reaponse.data", response.data);
    if (response?.data) {
      dispatch({
        type: actionTypes.LOGIN__SUC,
        data: response.data,
      });
    } else {
      console.log("looix dispatch");

      dispatch({
        type: actionTypes.LOGIN__FAIL,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN__FAIL,
      data: null,
    });
  }
};

export const logoutAction = () => ({
  type: actionTypes.LOGOUT,
});
