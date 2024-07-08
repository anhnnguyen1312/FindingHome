import axiosConfig from "../axiosConfig";

export const callApiUserList = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "http://localhost:8000/list-user",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
