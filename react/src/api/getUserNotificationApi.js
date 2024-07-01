import axiosConfig from "../axiosConfig";

export const callApiUserNotification = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:8000/user-notification",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiUserMarkAsRead = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = id
        ? `http://localhost:8000/user-mark-read/${id}`
        : `http://localhost:8000/user-mark-read`;
      const response = await axiosConfig({
        method: "put",
        url: url,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
