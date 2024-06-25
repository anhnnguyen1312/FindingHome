import axiosConfig from "../axiosConfig";

export const callApiPost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "http://localhost:8000/list-all-post",

        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });


export const callApiCreatePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:8000/create-post",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiUpdatePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:8000/update-post",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiDeletePost = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: `http://localhost:8000/post-delete/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiDetailPost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `http://localhost:8000/post-detail/${payload}`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
