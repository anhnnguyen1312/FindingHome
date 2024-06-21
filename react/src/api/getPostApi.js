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

export const callApiPostDemo = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        // url: "http://localhost:8000/list-all-post",
        url: "http://localhost:3000/allPosts",
      });
      resolve(response);
      console.log("response", response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiCreatePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:3000/allPosts",
        data: payload,
      });
      resolve(response);
      window.location.reload();
    } catch (error) {
      reject(error);
    }
  });

export const callApiUpdatePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:3000/allPosts",
        data: payload,
      });
      resolve(response);
      window.location.reload();
    } catch (error) {
      reject(error);
    }
  });

export const callApiDeletePost = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: `http://localhost:3000/allPosts/${id}`,
      });
      resolve(response);
      // window.location.reload();
    } catch (error) {
      reject(error);
    }
  });

export const callApiDetailPost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        // url: `http://localhost:8000/post-detail/${payload}`,
        url: `http://localhost:3000/allPosts/${payload}`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
