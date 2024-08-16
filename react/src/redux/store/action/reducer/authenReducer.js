import actionTypes from "../actionTypes";

const initialState = {
  isLoggedIn: false,
  isLoggedOut: false,
  msg: "",
  data: "",
  alert: "",
  update: false,
};

export const authenReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER__SUC:
    case actionTypes.LOGIN__SUC:
      return {
        ...state,
        isLoggedIn: true,
        isLoggedOut: false,
        data: action.data,
        msg: action.msg,
      };
    case actionTypes.REGISTER__FAIL:
    case actionTypes.LOGIN__FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoggedOut: false,
        msg: action.msg,
        update: !state.update,
      };
    case actionTypes.GET_USER:
      return {
        ...state,
        isLoggedIn: true,
        data: action.data,
        msg: null,
      };
    case actionTypes.UPDATE_PROFILE_SUC:
      return {
        ...state,
        data: action.data,
        msg: action.msg,
        update: !state.update,
      };
    case actionTypes.UPDATE_PROFILE_FAIL:
      return {
        ...state,
        msg: action.msg,
        update: !state.update,
      };
    case actionTypes.UPDATE_PROFILE_ACCESS:
      return {
        ...state,

        msg: action.msg,
      };
    case actionTypes.VALIDATION_EMAIL_SUC:
      return {
        ...state,
        isCheckedEmail: "checked",
        msg: action.msg,
      };
    case actionTypes.VALIDATION_EMAIL_FAIL:
      return {
        ...state,
        isCheckedEmail: "unChecked",
        msg: action.msg,
      };
    case actionTypes.RESET_PASSWORD_SUC:
      return {
        ...state,
        isResetPassword: "success",
        alert: action.msg,
      };
    case actionTypes.RESET_PASSWORD_FAIL:
      return {
        ...state,
        isResetPassword: "fail",
        alert: action.msg,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        msg: action.msg,
        isLoggedIn: false,
        isLoggedOut: true,
      };
    case actionTypes.SET_lOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.state,
      };
    default:
      return state;
  }
};
