import actionTypes from "../actionTypes";

const initialState = {
  isLoggedIn: false,
  token: null,
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
        data: action.data,
        msg: null,
      };
    case actionTypes.REGISTER__FAIL:
    case actionTypes.LOGIN__FAIL:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        msg: action.data,
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
        msg: null,
      };
    case actionTypes.UPDATE_PROFILE_FAIL:
      return {
        ...state,
        isLoggedIn: true,
        data: null,
        msg: action.data,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        msg: null,
        data: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
