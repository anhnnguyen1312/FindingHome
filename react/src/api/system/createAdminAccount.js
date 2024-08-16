import axiosConfig from "../../axiosConfig";

export const callApiCreateAdminAccount = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:3000/usersList",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
