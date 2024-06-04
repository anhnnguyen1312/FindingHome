import axiosConfig from "../axiosConfig";

export const callApiPost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "http://localhost:3000/posts",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
