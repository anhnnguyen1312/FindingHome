import axiosConfig from "../../axiosConfig";
export const callApiPost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "http://localhost:8000/list-all-post",

        data: payload,
      });
      console.log(response);

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
