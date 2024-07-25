import axiosConfig from "../axiosConfig";

export const callApiHomepagePost = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "http://localhost:8000/list-homepage-post",
      });
      console.log(response);
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

export const callApiRecommendSystem = (postId, userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `http://127.0.0.1:5001/recommend?id=${postId},${userId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApihandleLikePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: `http://localhost:8000/handle-like-post`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiCheckLikePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "put",
        url: `http://localhost:8000/check-like-post`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiListLikePost = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `http://localhost:8000/list-liked-post/${userId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
