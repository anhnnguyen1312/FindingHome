import React, { useState, useEffect } from "react";
import ProductData from "../data/ProductData";
// import { callApiPost } from "../api/getPostApi";
import { Search, CardProduct, Button } from "./index";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../redux/store/action/postAction";
const CardRoom = () => {
  const ch2 = "../assets/images/canho/ch1.jpg";

  const [button, setButton] = useState(false);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const handleClickFilter = () => {
    setButton(!button);
  };
  useEffect(() => {
    dispatch(postAction());
  }, []);
  return (
    <>
      <div className="">
        <div className=" flex lg:flex-row flex-col gap-[2vw]   ">
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
            <div class="bg-gray-100 px-2 py-10">
              <article class="mx-auto my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow lg:max-w-5xl lg:flex-row lg:items-center">
                <div class="shrink-0 my-4 md:mr-8 lg:max-w-sm">
                  <img
                    class="rounded-2xl"
                    src="https://images.unsplash.com/photo-1663287695452-bf59337d8746?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                    alt=""
                  />
                </div>
                <div class="py-4 lg:py-8">
                  <a
                    href="#"
                    class="mb-6 block text-xl font-medium text-gray-700"
                  >
                    Long walks are helpful in decreasing stress levels
                  </a>
                  <p class="mb-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit illum consequatur quia doloremque! Similique
                    eius enim nostrum totam.
                  </p>
                  <div class="flex items-center">
                    <img
                      class="h-10 w-10 rounded-full object-cover"
                      src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
                      alt="Simon Lewis"
                    />
                    <p class="ml-4 w-56">
                      <strong class="block font-medium text-gray-700">
                        Johanson Levinsiki
                      </strong>
                      <span class="text-sm text-gray-400">Jun 26, 2022</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
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
    </>
  );
};

export default CardRoom;
