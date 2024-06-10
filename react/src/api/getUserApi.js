import axiosConfig from "../axiosConfig";

export const callApiUserProfile = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",

        url: `http://localhost:3000/users/${userId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
