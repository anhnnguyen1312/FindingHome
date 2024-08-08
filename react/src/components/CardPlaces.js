import React, { useEffect, useState } from "react";
import { CardComponent } from "./index";
import hcm2_img from "../assets/images/places/hcm.jpg";
import hn_img from "../assets/images/places/hn.jpg";
import hue_img from "../assets/images/places/hue.jpg";
import { useNavigate } from "react-router-dom";
import { path } from "../ultils/path";

const CardPlaces = () => {
  const [isClickNavigate, setIsClickNavigate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigateHcm = () => {
      if (isClickNavigate === "hcm") {
        navigate(`/${path.FINDROOM}`, {
          state: [10.7758439, 106.7017555],
        });
      } else if (isClickNavigate === "danang") {
        navigate(`/${path.FINDROOM}`, {
          state: [16.068, 108.212],
        });
      } else if (isClickNavigate === "hanoi") {
        navigate(`/${path.FINDROOM}`, {
          state: [21.0294498, 105.8544441],
        });
      }
    };
    isClickNavigate.length > 0 && handleNavigateHcm();
  }, [isClickNavigate]);
  return (
    <div className="p-[5px]">
      <h1 className=" text-center mt-[4vh] font-medium text-2xl ">
        {" "}
        Tìm Phòng ngay!{" "}
      </h1>
      <div className="flex justify-center items-center gap-[20px] py-[20px] ">
        <CardComponent
          onClick={() => setIsClickNavigate("hcm")}
          src={hn_img}
          title="Hồ Chí Minh"
          description="Giá rẻ chỉ từ 2tr"
        />
        <CardComponent
          onClick={() => setIsClickNavigate("hanoi")}
          src={hcm2_img}
          title="Hà Nội"
          description="Giá rẻ chỉ từ 2tr"
        />
        <CardComponent
          onClick={() => setIsClickNavigate("danang")}
          src={hue_img}
          title="Đà Nắng"
          description="Giá rẻ chỉ từ 1tr"
        />
      </div>
    </div>
  );
};

export default CardPlaces;
