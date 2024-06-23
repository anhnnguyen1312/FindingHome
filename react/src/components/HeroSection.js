import React from "react";
import Button from "./Button";
import "./HeroSection.css";
// import Banner from  '../../public/assets/images/Banner.jpg'
import banner from "../assets/images/Banner.jpg";
import { path } from "../ultils/path";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const HeroSection = () => {
  const navigate = useNavigate();
  const stateAuth = useSelector((state) => state.auth);

  function handleCreatePostNavigate(UserId) {
    navigate(path.NEWPOST, { state: { UserId } });
  }

  const handleCreatePost = () => {
    if (stateAuth.isLoggedIn) {
      handleCreatePostNavigate(stateAuth.data?.id);
    } else {
      swal({
        text: "Bạn cần đăng nhập",
        icon: "error",
        timer: 2000,
      });
      navigate(path.LOGIN);
    }
  };
  
  const handlePost = () => {
    navigate(path.ROOM_RENTAL);
  };
  return (
    <div className="block div">
      <div className="hero-container text-white text-lg">
        {/* <img className=" " src={banner}></img> */}
        <h1 className="text-2xl">Tìm Phòng, Studio, Căn hộ mới ngay</h1>
        <p className="text-2xl">Uy tín, chất lượng giá rẻ</p>
        <div className="mt-[32px] flex gap-[20px]">
          <Button
            children={"Tìm phòng"}
            textColor={"text-white"}
            onClick={() => handlePost()}
            bgColor={"bg-transparent"}
            borderRounded={"rounded-[6px]"}
            borderColor={"border-white"}
          ></Button>
          <Button
            children={"Đăng bài "}
            textColor={"text-black"}
            onClick={() => handleCreatePost()}
            bgColor={"bg-white"}
            borderRounded={"rounded-[6px]"}
            borderColor={"border-white"}
            //   custom={'h-10 w-[15rem]'}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
