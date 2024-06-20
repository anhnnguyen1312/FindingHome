import actionTypes from "../actionTypes";

const initialState = {
  posts: [],
  msg: "",
  // count: 0,
  newPosts: [],
  updatePostData: [123],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POST:
      return {
        ...state,

        posts: action.posts || [],
        msg: action.msg || "get post Success",
      };
    case actionTypes.UPDATE_POST:
      return {
        ...state,
        updatePostData: action.updatePostData || [],
      };
    case actionTypes.UPDATE_POST_CLEAR:
      return {
        ...state,
        updatePostData: null,
      };
    default:
      return state;
  }
};
