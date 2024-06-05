import axiosConfig from "../axiosConfig";

// api register
export const callApiRegister = (payload) =>
  new Promise(async (resolve, reject) => {
    // console.log('payloadp',payload)
    try {
      const response = await axiosConfig({
        method: "post",

        url: "http://localhost:8000/register",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

// api register
export const callApiLogin = (payload) =>
  new Promise(async (resolve, reject) => {
    // console.log('payloadp',payload)
    try {
      const response = await axiosConfig({
        method: "post",
        url: "http://localhost:3000/user",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiUserInfor = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",

        url: "",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
