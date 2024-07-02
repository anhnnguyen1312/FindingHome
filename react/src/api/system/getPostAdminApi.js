import axiosConfig from "../../axiosConfig";

export const callApiPostAdmin = (payload) =>
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

  export const callApiCensorPostAdmin = (payload) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "post",
          url: `http://localhost:8000/handle-user-post`,
          data: payload,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });

    export const callApiDeletePostAdmin = (payload) =>
      new Promise(async (resolve, reject) => {
        console.log("data", payload);
        try {
          const response = await axiosConfig({
            method: "post",
            url: `http://localhost:8000/post-delete/${payload.postId}`,
            data: payload
          });
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
