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
