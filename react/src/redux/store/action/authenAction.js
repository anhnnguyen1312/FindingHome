import actionTypes from './actionTypes'
import { callApiRegister, callApiLogin } from '../../../api/authenLogin'
export const registerAction = (payload) => async (dispatch ) => {
    try {
        const response = await callApiRegister(payload)
        ///api phải trả về token và
        console.log('response.data.token', response.data.message)
        // if (response?.data.err === 0) {
            if (!response?.data.message) {
                console.log('thanh cong', response.data)

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
    if (response?.data) {
      dispatch({
        type: actionTypes.LOGIN__SUC,
        data: response.data.token,
      });
    } else {
      console.log("looix dispatch");

      dispatch({
        type: actionTypes.LOGIN__FAIL,
        data: response.data.msg,
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
