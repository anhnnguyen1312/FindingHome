import actionTypes from "./actionTypes";
import { callApiPost } from "../../../api/getPostApi";
import { jwtDecode } from "jwt-decode";
export const postAction = () => async (dispatch) => {
  try {
    const response = await callApiPost();

  const token = response.data.token
  const decodetoken = token.map(token => jwtDecode(token))

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
