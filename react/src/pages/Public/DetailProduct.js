import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../ultils/path";
import ch3 from "../../assets/images/canho/ch3.jpg";
import user1 from "../../assets/images/user/user1.jpg";
const DetailProduct = () => {
  return (
    <>
      <div className="w-full ">
        {/* img */}
        <div className="border-b-4 border-rose-500">
          <Link to={path.DETAIL_PRODUCT} className="bloc relative min-h-64">
            <img
              src={ch3}
              className="block object-cover w-full min-h-64 max-h-128"
            />
            <div className="absolute text-[#1E95A6] right-0 top-0 btn btn-white mr-3 mt-3 flex">
              <div>
                <i class="fa-solid fa-camera"></i>
              </div>
              <div className="pl-[13px]">xem thêm 10 ảnh</div>
            </div>
          </Link>
        </div>
        {/* thong tin ve phonng */}
        <div className="max-w-2xl mx-auto">
          <div className="mt-4 mb-4 h-8  flex gap-1 items-center relative border-b-4 border-transparent">
            <div className="inline-flex items-center bg-rose-500 text-white text-sm font-semibold rounded-full px-3 py-1">
              10 + phòng
            </div>
            <div className="inline-flex items-center bg-rose-500 text-white text-sm font-semibold rounded-full px-3 py-1">
              20 + đánh giá
            </div>

            <div className="flex-shrink-0 relative flex justify-center items-center self-stretch aspect-aquare">
              <i class="fa-solid fa-badge-check"></i>
            </div>
            <div className="hidden sm:flex ml-auto border-4 bg-gray-200 border-gray-50 rounded-full h-24 w-24">
              <img className="block rounded-full" src={user1} />
            </div>
          </div>
        </div>
        {/* thong tin nguoi dang */}
        <div></div>
        {/* gg map  */}
        <div></div>
      </div>
    </>
  );
};

export default DetailProduct;
