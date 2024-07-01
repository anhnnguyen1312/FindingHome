import axiosConfig from "../../axiosConfig";

export const callApiAdminNotification = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "http://localhost:8000/admin-notification",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiAdminMarkAsRead = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = id
        ? `http://localhost:8000/admin-mark-read/${id}`
        : `http://localhost:8000/admin-mark-read`;
      const response = await axiosConfig({
        method: "put",
        url: url,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
