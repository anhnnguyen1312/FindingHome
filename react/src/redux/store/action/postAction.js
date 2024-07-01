import actionTypes from "./actionTypes";
import { callApiHomepagePost } from "../../../api/getPostApi";
import { callApiPost } from "../../../api/system/getPostListAdmin";

import { jwtDecode } from "jwt-decode";

export const postAction = () => async (dispatch) => {
  try {
    const response = await callApiPost();

    const token = response.data.token;
    const decodetoken = token.map((token) => jwtDecode(token));
    console.log(decodetoken);
    if (response?.data.token) {
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

export const homepagePostAction = () => async (dispatch) => {
  try {
    const response = await callApiHomepagePost();

    const token = response.data.token;
    const decodetoken = token.map((token) => jwtDecode(token));
    if (response?.data.token) {
      dispatch({
        type: actionTypes.GET_POST_HOMEPAGE,
        posts: decodetoken,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST_HOMEPAGE,
        posts: null,
        msg: response.data.message,
      });
    }
  } catch (eror) {
    dispatch({
      type: actionTypes.GET_POST_HOMEPAGE,
      posts: null,
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
