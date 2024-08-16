import React, { useState } from "react";
import userAvatar from "../assets/images/userAvatar.jpg";
import { Loading } from "./index";
import { callApiUploadImages } from "../api/uploadImage";
const AvatarUpload = ({ setUserData, avatar, id }) => {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ml_default");

    try {
      const response = await callApiUploadImages(data);
      if (response.status === 200)
        setUserData((prevState) => ({
          ...prevState,
          [id]: response.data?.secure_url,
        }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleDeleteImage = () => {
    setUserData((prevState) => ({
      ...prevState,
      [id]: [],
    }));
  };

  return (
    <>
      {loading && <Loading />}
      <div className="flex flex-col gap-4 py-4  lg:flex-row">
        <div className="shrink-0 w-32  sm:py-4">
          <p className="mb-auto font-medium">Ảnh đại diện</p>
          <p className="text-sm text-gray-600">Thay đổi</p>
        </div>
        <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
          <div className="relative">
            <img
              src={avatar || userAvatar}
              alt="user Avatar"
              className="h-20 w-20 rounded-full"
            />
            <span
              title="Xóa"
              onClick={() => handleDeleteImage()}
              className="absolute top-0 right-1   cursor-pointer  rounded-full"
            >
              <div className="text-red-600 hover:text-red-300 ">
                <i className="fa-solid fa-x"></i>
              </div>
            </span>
          </div>

          <p className="text-sm text-gray-600">
            Thả ảnh bạn mong muốn thay đổi
          </p>
          <input
            type="file"
            onChange={uploadImage}
            className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
      </div>
    </>
  );
};

export default AvatarUpload;
