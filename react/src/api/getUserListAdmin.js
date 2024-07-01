import axiosConfig from "../axiosConfig";

export const callApiUserList = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "http://localhost:3000/usersList",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
