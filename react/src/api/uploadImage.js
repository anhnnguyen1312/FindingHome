import axios from "axios";
export const callApiUploadImages = (images) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "post",
        url: `https://api.cloudinary.com/v1_1/dx3nwkh2i/image/upload/`,
        data: images,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
