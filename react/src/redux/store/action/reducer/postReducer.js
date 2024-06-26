import actionTypes from "../actionTypes";

const initialState = {
  posts: [],
  msg: "",
  // count: 0,
  homepagePosts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POST:
      return {
        ...state,

        posts: action.posts || [],
        msg: action.msg || "get post Success",
      };
    case actionTypes.GET_POST_HOMEPAGE:
      return {
        ...state,

        homepagePosts: action.posts || [],
        msg: action.msg || "get post Success",
      };

    default:
      return state;
  }
};
