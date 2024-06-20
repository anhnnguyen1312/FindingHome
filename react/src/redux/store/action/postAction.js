import actionTypes from "./actionTypes";
import { callApiPost, callApiPostDemo } from "../../../api/getPostApi";
import { jwtDecode } from "jwt-decode";
export const postAction = () => async (dispatch) => {
  try {
    const response = await callApiPost();

    const token = response.data.token;
    const decodetoken = token.map((token) => jwtDecode(token));

    if (!response?.data.message) {
      dispatch({
        type: actionTypes.GET_POST,
        posts: decodetoken,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST,
        posts: null,
        msg: response.data.message,
      });
    }
  } catch (eror) {
    dispatch({
      type: actionTypes.GET_POST,
      posts: null,
    });
  }
};

export const postActionDemo = () => async (dispatch) => {
  try {
    const response = await callApiPostDemo();

    if (response?.data) {
      console.log("call api", response);
      dispatch({
        type: actionTypes.GET_POST,
        posts: response.data,
        msg: null,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST,
        msg: "get post fail",
        posts: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POST,
      posts: null,
      msg: "get post fail",
    });
  }
};

export const UpdatePostAction = (updatePostData) => ({
  type: actionTypes.UPDATE_POST,
  updatePostData: updatePostData,
});

export const UpdatePostActionClearData = () => ({
  type: actionTypes.UPDATE_POST_CLEAR,
});
