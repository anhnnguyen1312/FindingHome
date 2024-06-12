import actionTypes from "../actionTypes";

const initialState = {
  isLoggedIn: false,
  isLoggedOut: false,
  msg: "",
  data: "",
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
        isLoggedIn: true,
        data: action.data,
        msg: action.msg,
      };
    case actionTypes.UPDATE_PROFILE_FAIL:
      return {
        ...state,
        isLoggedIn: true,
        msg: action.msg,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        msg: action.msg,
        isLoggedIn: false,
        isLoggedOut: true
      };
    default:
      return state;
  }
};
