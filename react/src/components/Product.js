import React, { useState } from "react";
import { Search, CardProduct, Button } from "./index";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import ch1 from "../assets/images/canho/ch1.jpg";
import ch2 from "../assets/images/canho/ch2.jpg";
import ch3 from "../assets/images/canho/ch3.jpg";
import ch4 from "../assets/images/canho/ch4.jpg";
import ch5 from "../assets/images/canho/ch5.jpg";
import ch6 from "../assets/images/canho/ch6.jpg";
import ch7 from "../assets/images/canho/ch7.jpg";
import ch8 from "../assets/images/canho/ch8.jpg";

const Product = (props) => {
  const [button, setButton] = useState(false);
  const handleClickFilter = () => {
    setButton(!button);
  };
  return (
    <div className="absolute bg-[#F8FAFC]  left-0 right-0">
      <div className="md:w-full lg:w-4/5 sm:w-full  xl:w-4/5   m-auto flex lg:flex-row flex-col gap-[2vw]   ">
        <div className="lg:hidden flex bg-gray">
          <div className=" w-full p-[20px] flex flex-col items-center justify-center gap-[20px] ">
            <div className=" flex-col md:flex-row bg-F8FAFC w-full p-[10px] flex items-center justify-center gap-[10px] ">
              <Search />
            </div>
          </div>
        </div>
        <div className="lg:flex-[70%] flex flex-col gap-[20px] p-[5px] ">
          <h1 className="mt-[5vh] text-[30px] font-semibold ">
            Phòng Đang Cho Thuê{" "}
          </h1>
          <ul className="flex flex-col gap-[20px]  ">
            <CardProduct src={ch1} />
            <CardProduct src={ch2} />
            <CardProduct src={ch3} />
            <CardProduct src={ch4} />
            <CardProduct src={ch5} />
            <CardProduct src={ch6} />
            <CardProduct src={ch7} />
            <CardProduct src={ch8} />
          </ul>
        </div>
        <div className="lg:flex-[30%] flex-col hidden lg:flex bg-gray">
          {/* Button */}
          <div className=" w-full flex flex-col items-center justify-start gap-[20px]  mt-[5vh] pt-[2px]  ">
            <div className="flex w-full items-center justify-end">
              <button
                onClick={() => handleClickFilter()}
                className="p-[15px] h-[40px] w-[130px] bg-white flex  items-center  hover:bg-[#E9F4F6] border border-transparent active:border-rose-500 justify-between rounded-md"
              >
                <p>Bộ Lọc</p>
                {button ? <DownOutlined /> : <UpOutlined />}
              </button>
            </div>
            {button && (
              <div className=" flex-col bg-F8FAFC w-full p-[10px] flex items-center justify-center gap-[10px] ">
                <Search />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
