import axiosConfig from "../../axiosConfig";

export const callApiGetUserProfile = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `http://localhost:8000/user-profile/${userId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
