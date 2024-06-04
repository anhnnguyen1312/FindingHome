import actionTypes from "../actionTypes";

const initialState = {
  posts: [],
  msg: "",
  // count: 0,
  newPosts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POST:
      return {
        ...state,
        isLoggedIn: true,
        posts: action.posts || [],
        msg: "get post Success",
      };
    //   case actionTypes.GET_POST:
    //     return {
    //       ...state,
    //       isLoggedIn: false,

    //       msg: "get post  Fail!",

    //     };
    default:
      return state;
  }
};
