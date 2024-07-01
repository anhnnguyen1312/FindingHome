import axiosConfig from "../../axiosConfig";

// api register
export const callApiGetUserProfile = (id) =>
  new Promise(async (resolve, reject) => {
    // console.log('payloadp',payload)
    try {
      const response = await axiosConfig({
        method: "get",
        url: `http://localhost:3000/usersList/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
