import React from "react";
import ch1 from "../assets/images/canho/ch1.jpg";
import { AiFillPhone } from "react-icons/ai";

import { Link } from "react-router-dom";

const CardProduct = (src) => {
  return (
    <div>
      <li className=" ">
        <Link
          className="flex h-full border border-transparent  active:border-rose-500 rounded-2xl"
          to="/"
        >
          <figure
            className="m-0 flex-[30%] overflow-hidden rounded-l-2xl"
            data-category={src.label}
          >
            <img
              className="h-full w-full object-cover"
              alt="phòng trọ "
              src={ch1}
            />
          </figure>

          <div className="gap-[1vh] flex flex-col flex-[70%] p-[1vh] border border-y-[#E2E8F0] border-l-red rounded-r-2xl hover:bg-[#E9F4F6] ">
            <div className="text-red">
              <h2 className="text-red-500 font-medium">
                BÌNH THẠNH, HỒ CHÍ MINH
              </h2>
              {/* <p>Chính chủ cho thuê phòng </p> */}
              {/* <h2 className='text-red-500 font-medium'>CHINH CHỦ CHO THUÊ PHÒNG TRỌ- ĐƯỜNG NGUYỄN XÍ , BÌNH THẠNH</h2> */}
            </div>

            <div className="justify-start gap-[1vw] flex ">
              <div className="text-white font-medium flex items-center color:white px-[10px] py-[5px] rounded-[20px] bg-[#F2545B]">
                <div className="flex items-center px-[3px]">
                  <i class="fa-solid fa-dollar-sign"></i>
                </div>
                5tr/tháng
              </div>
              <div className=" text-white font-medium px-[10px] py-[5px] rounded-[20px] bg-[#F2545B]">
                20m2
              </div>
              <div className="  text-white font-medium px-[10px] py-[5px] rounded-[20px] bg-[#F2545B]">
                Mới
              </div>
            </div>

            <div className="text-blue-600 flex ">
              <div
                style={{ color: "blue" }}
                className="flex items-center px-[3px] "
              >
                <i class="fa-solid fa-location-dot"></i>
              </div>
              12 Nguyễn xí , phường 25, quận Bình Thạnh
            </div>
            <div className="text-black">
              phòng trong chung cư Saigonres, wc riêng, có cửa sổ view sông.
            </div>
            <div className="text-black">
              Tiện ích: Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình
              Thạnh,...
            </div>

            <div className="flex justify-between text-cyan-600 font-medium">
              <div className="owner--name">nguyễn văn hưng</div>
              <div className=" flex items-center">
                <AiFillPhone />
                082362862
              </div>
              <div className=" flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#2962ff"
                    d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"
                  ></path>
                  <path
                    fill="#eee"
                    d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"
                  ></path>
                  <path
                    fill="#2962ff"
                    d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"
                  ></path>
                  <path
                    fill="#2962ff"
                    d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"
                  ></path>
                  <path
                    fill="#2962ff"
                    d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"
                  ></path>
                  <path
                    fill="#2962ff"
                    d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"
                  ></path>
                </svg>
                082362862
              </div>
            </div>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default CardProduct;
