import actionTypes from "./actionTypes";
import { callApiPost } from "../../../api/getPostApi";
export const postAction = () => async (dispatch) => {
  try {
    const response = await callApiPost();
    ///api phải trả về token và
    // if (response?.data.err === 0) {
    if (response) {
      dispatch({
        type: actionTypes.GET_POST,
        posts: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST,
        posts: null,
      });
    }
  } catch (eror) {
    dispatch({
      type: actionTypes.GET_POST,
      data: null,
    });
  }
};
