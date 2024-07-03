import React, { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { path } from "../ultils/path";
import { useNavigate } from "react-router-dom";
import AutoSlideShow from "./AutoSlideShow";
import {LikeComponent} from "./index"

import DetailProduct from "../pages/Public/DetailProduct";
const CardProduct = ({ props, checked, isSystem }) => {
  const navigate = useNavigate();
  function handleNavigate(e, idPost) {
    e.stopPropagation();
    isSystem
      ? navigate(`/system/${path.DETAIL}/${idPost}`)
      : navigate(`/${path.DETAIL}/${idPost}`, { state: { isSystem } });
  }
  const handleNavigateProfilePublic = (e, IdUser) => {
    console.log("IdUser", IdUser);

    e.stopPropagation();
    isSystem
      ? navigate(`/system/${path.PROFILE_PUBLIC}/${IdUser}`, {
          state: { isSystem },
        })
      : navigate(`/${path.PROFILE_PUBLIC}/${IdUser}`);
  };

  const handleStatusTag = (check) => {
    if (check) {
      switch (check) {
        case "1":
          return (
            <span className="bg-[#9bfaa3] border text-black px-2 py-1 m-2 rounded-md text-md font-medium">
              Đang hoạt động
            </span>
          );
        case "0":
          return (
            <span className="bg-[#fcf683] border border text-black px-2 py-1 m-2 rounded-md text-md font-medium">
              Chưa được duyệt
            </span>
          );
        case "2":
          return (
            <span className="bg-[#f78888] border text-black px-2 py-1 m-2 rounded-md text-md font-medium">
              Từ chối
            </span>
          );
        case "3":
          return (
            <span className="bg-[#b9bfc9] border text-black px-2 py-1 m-2 rounded-md text-md font-medium">
              Hết hạn
            </span>
          );
        default:
          return null;
      }
    }
  };

  return (
    <li>
      <div
        className="flex hover:bg-[#E9F4F6] h-full border border-transparent bg-white shadow flex-col sm:flex-row md:flex-row px-4 active:border-rose-500 rounded-2xl"
        onClick={(e) => handleNavigate(e, props.id)}
      >
        <figure className="m-0 flex-[30%] my-4 overflow-hidden rounded-2xl relative">
          {props.urlImages && <AutoSlideShow images={props.urlImages} />}
        </figure>

        <div className="gap-[1vh] flex flex-col flex-[70%] p-[1vh]  border-y-[#E2E8F0] border-l-red rounded-r-2xl  ">
          <div className="flex flex-row items-center flex-wrap justify-between">
            <div className="flex">
            <h2 className="text-red-500 font-medium mr-2 items-center flex">{props.title}</h2>
            {handleStatusTag(checked)}
            </div >
            <LikeComponent postId={props.id}/>

          </div>
          <div className="justify-start gap-[1vw] flex ">
            <div className="text-white font-medium flex items-center color:white px-[10px] py-[5px] rounded-[20px] bg-[#F2545B]">
              <div className="flex items-center px-[3px]"></div>
              {`${props.price} triệu/tháng`}
            </div>

            {props.area && (
              <div className=" text-white font-medium px-[10px] py-[5px] rounded-[20px] bg-[#F2545B]">
                {props.area} m&#178;
              </div>
            )}

            {props.status == 0 ? (
              <div className="  text-white font-medium px-[10px] py-[5px] rounded-[20px] bg-[#F2545B]">
                Còn trống
              </div>
            ) : (
              <div className="  text-white font-medium px-[10px] py-[5px] rounded-[20px] bg-[#F2545B]">
                Đã hết
              </div>
            )}
          </div>

          <div className="text-blue-600 flex ">
            <div
              style={{ color: "blue" }}
              className="flex items-center px-[3px] "
            >
              <i className="fa-solid fa-location-dot"></i>
            </div>
            {props.address}
          </div>
          <div className=" overflow-hidden text-ellipsis whitespace-normal leading-6 h-[3rem] text-black">
            {props.description} <p> ...</p>
          </div>

          <div className="overflow-hidden text-ellipsis whitespace-normal leading-6 h-[3rem] text-black">
            <b>{props.nearby} ... </b>
          </div>

          <div className="flex justify-between text-cyan-600 font-medium">
            <div
              onClick={(e) => handleNavigateProfilePublic(e, props.userId)}
              className="cursor-pointer owner--name"
            >
              {props.username}
            </div>
            <div className=" flex items-center">
              <AiFillPhone />
              {props.phone}
            </div>
            {props.zalo && (
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
                {props.zalo}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardProduct;
