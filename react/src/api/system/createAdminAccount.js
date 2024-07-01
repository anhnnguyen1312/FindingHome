import axiosConfig from "../../axiosConfig";

// api register
export const callApiCreateAdminAccount = (payload) =>
  new Promise(async (resolve, reject) => {
    // console.log('payloadp',payload)
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
