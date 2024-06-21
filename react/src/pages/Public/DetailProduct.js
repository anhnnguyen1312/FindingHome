import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { path } from "../../ultils/path";
import userAvatar from "../../assets/images/userAvatar.jpg";
import { FaTableList } from "react-icons/fa6";
import { GeoCoding } from "../../components/index";
import { callApiDetailPost } from "../../api/getPostApi";
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SlideShow from "../../components/SlideShow";

const DetailProduct = () => {
  const useLocate = useLocation();
  const [detailPost, setDetailPost] = useState([]);
  const [descriptionSplit, setDescriptionSplit] = useState([]);
  const [ruleSplit, setRuleSplit] = useState([]);
  const [id, setId] = useState(useLocate.state?.idPost);
  console.log("useLocate.state?.idPost", useLocate.state?.idPost);

  useEffect(() => {
    const getApiDetailPost = async () => {
      try {
        const response = await callApiDetailPost(id);
        const decodeToken = jwtDecode(response.data.token);
        setDetailPost(decodeToken);
      } catch (error) {
        console.log(error);
      }
    };
    getApiDetailPost();
  }, []);

  useEffect(() => {
    const splitData = () => {
      detailPost.description &&
        setDescriptionSplit(detailPost?.description.split("\n"));
      detailPost.description && setRuleSplit(detailPost?.rule.split("\n"));
    };
    splitData();
  }, [detailPost]);

  const ruleItem = ruleSplit.map((rule, id) => (
    <div className="whitespace-pre-line" key={id}>
      {rule}{" "}
    </div>
  ));
  const descriptionItem = descriptionSplit.map((description, id) => (
    <div className="whitespace-pre-line" key={id}>
      {description}{" "}
    </div>
  ));

  return (
    <>
      <div className="w-full">
        {/* img */}
        <div className="border-b-4 border-rose-500">
          {detailPost.urlImages && <SlideShow images={detailPost.urlImages} />}
        </div>
        {/* thong tin ve phonng */}
        <div className="px-[20px] lg:px-[0px]">
          <div className="max-w-2xl mx-auto">
            <div className="-mt-4 mb-10 h-8  flex gap-1 items-center relative border-b-4 border-transparent">
              <div className="flex-shrink-0 relative flex justify-center items-center self-stretch ">
                <div className="absolute inset-0 text-teal">
                  <i class="fa-solid fa-badge-check"></i>
                </div>
              </div>
              <div className="hidden sm:flex ml-auto border-4 bg-gray-200 border-gray-50 rounded-full h-24 w-24">
                <img
                  className="block rounded-full"
                  src={detailPost.avatar || userAvatar}
                />
              </div>
            </div>
          </div>
          {/* thong tin nguoi dang */}
          <div className="mb-8 flex sm:flex-row flex-col gap-[20px] justify-between">
            <div className="mb-6 md:mb-0 flex flex-col gap-[20px]">
              <h1 className="text-red-600">{detailPost.title}</h1>
              <h1 className="  flex gap-[10px]">
                <div className="text-[#4ca976]">
                  <i class="fa-solid fa-map-location-dot"></i>
                </div>
                {detailPost.address}
              </h1>
              <div className="flex justify-between gap-10">
                <h1 className="flex gap-[10px] text-red-600 font-bold text-xl items-center">
                  {detailPost.price + " triệu/ Tháng"}
                </h1>
                {detailPost.status == 0 ? (
                  <h1 className="items-center flex gap-[10px]">
                    {"Tình trạng: còn trống"}
                  </h1>
                ) : (
                  <h1 className="items-center flex gap-[10px]">
                    {"Tình trạng: đã hết"}
                  </h1>
                )}
                <h1 className="items-center flex gap-[10px]">
                  {"Ngày đăng: " + detailPost.dateCreateAt}
                </h1>
              </div>
            </div>
            <div className="flex  text-[#d1d100] text-center">
              <i class="fa-solid fa-star mt-[5px]"></i>
              <i class="fa-solid fa-star mt-[5px]"></i>
              <i class="fa-solid fa-star mt-[5px]"></i>
              <i class="fa-solid fa-star mt-[5px]"></i>
              <i class="fa-solid fa-star mt-[5px]"></i>
              <div className="pl-[20px] text-gray-700">(40 lượt đánh giá)</div>
            </div>
          </div>
          {/* //table */}
          <div className="mb-8">
            <div className="bg-white py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700">Diện tích</div>
                {detailPost.area} m&#178;
              </div>
            </div>
            <div className="bg-inherit py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700">chi phí khác</div>
                {detailPost.otherFee}
              </div>
            </div>
            <div className="bg-white py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700">Nội thất trong phòng</div>
                {detailPost.furniture}
              </div>
            </div>
            <div className="bg-inherit py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700">tiện ích gần đây </div>
                {detailPost.nearby}
              </div>
            </div>
          </div>
          {/* tag */}
          <div className="mb-16 ">
            <div className="  border border-[#1E95A6] bg-white text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className=" flex gap-[10px] items-center">
                <div>
                  <i class="fa-solid fa-motorcycle"></i>
                </div>
                bãi đậu xe
              </div>
            </div>

            <div className="bg-white border border-[#1E95A6] mx-[10px] text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className="flex gap-[10px] items-center">
                <div>
                  <i class="fa-solid fa-wifi"></i>
                </div>
                wifi
              </div>
            </div>
            <div className="bg-white border border-[#1E95A6]  mx-[10px] text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className="flex gap-[10px] items-center">
                <div>
                  <i class="fa-solid fa-cat"></i>{" "}
                </div>
                thú cưng
              </div>
            </div>
            <div className="bg-white border border-[#1E95A6] mx-[10px] text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className="flex gap-[10px] items-center">
                <div className="">
                  {/* <i class="fa-sharp fa-thin fa-child-reaching"></i> */}
                  <i class="fa-solid fa-child-reaching"></i>
                </div>
                trẻ em
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[10px] text-red-600 font-bold text-2xl items-center">
              <FaTableList /> <h1 className="">Mô tả và Quy Định</h1>
            </div>
            <h1 className="text-blue-600 font-bold  text-lg">Mô tả </h1>
            <div className=" whitespace-pre-line">{descriptionItem} </div>
            <h1 className="text-red-500 font-semibold text-lg whitespace-pre-line ">
              Quy Định{" "}
            </h1>
            <div className=" whitespace-pre-line">{ruleItem} </div>

            {/* <h1 className="">Không dùng chất kích thích, tiệc BBQ, Karaoke</h1>
            <h1 className="">
              khai báo với chủ trọ khi dẫn người ngoài về nhà qua đêm
            </h1>
            <h1 className="">Camera an ninh, Bảo vệ, 24/24</h1>
            <h1 className="">Không chung chủ</h1> */}

            <div className=""></div>
          </div>
          <div className="mb-16">
            <div className=" mb-[20px] flex gap-[10px] text-red-600 font-bold text-2xl items-center">
              <i class="fa-regular fa-address-card"></i>{" "}
              <h1 className="">Thông Tin Liên Hệ</h1>
            </div>

            <div className="bg-inherit py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700 flex ">
                  {" "}
                  <div className="px-[10px] text-[#1E95A6]">
                    <i class="fa-solid fa-phone"></i>
                  </div>{" "}
                  Số điện thoại
                </div>
                {detailPost.phone}
              </div>
            </div>
            <div className="bg-white py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700 flex">
                  {" "}
                  <div className="px-[10px] text-[#1E95A6]">
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
                  </div>
                  Zalo
                </div>
                {detailPost.zalo}
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[20px] mb-[10px]">
              <div className="text-[#F2545B] ">
                <i class="fa-solid fa fa-map-marker"></i>
              </div>
              <div className=" text-xl font-medium">{detailPost.address}</div>
            </div>

            <p className="mb-[20px]"> {detailPost.nearby}</p>
            <div className="w-full h-[60%vh]  mb-[30px]">
              <GeoCoding address={detailPost.address} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
