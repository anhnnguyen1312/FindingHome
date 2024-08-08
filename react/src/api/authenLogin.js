import axiosConfig from "../axiosConfig";

export const callApiRegister = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:8000/register",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiLogin = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:8000/login",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const checkEmailUser = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:8000/check-email-user",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const resetPassword = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:8000/reset-password",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

  export const callApiDeleteUser = (payload) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "post",
          url: "http://localhost:8000/delete-user",
          data: payload,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });