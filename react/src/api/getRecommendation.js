import axiosConfig from "../axiosConfig";

// api register
export const callUserAction = (payload) =>
  new Promise(async (resolve, reject) => {
    console.log('payloadp',payload)
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:8000/user-action",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

  export const callApiRecommend = (userId) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "get",
          url: `http://127.0.0.1:5000/get-recommendation?id=${userId}`,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });