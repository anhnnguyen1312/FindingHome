import actionTypes from "./actionTypes";
import { callApiPost } from "../../../api/getPostApi";
export const postAction = () => async (dispatch) => {
  try {
    const response = await callApiPost();
    ///api phải trả về token và

    if (!response?.data.message) {
      dispatch({
        type: actionTypes.GET_POST,
        posts: response.data,
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
