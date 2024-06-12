import axiosConfig from "../axiosConfig";

export const callApiUpdateProfile = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",

        url: `http://localhost:8000/handle-profile`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
