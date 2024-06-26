import React from "react";
import { Link } from "react-router-dom";

export default function Notifications() {

    return (
        <div className="icon-navbar-user icon-navbar font-thin   relative ">
        <i class="fa-solid fa-bell white_icon"></i>
        <div className="notify  ">
          <header class="h-[20px]">
            <h3>Thong bao moi nhan</h3>
          </header>
          <ul className="font-thin flex flex-col bg-white">
            <li class="flex hover:bg-[#f7f7f7] bg-[#ee4b2b17]">
              <Link
                to={"/logged-in/thongbao"}
                className="flex p-[8px] w-full gap-[5px] border border-transparent border-2 active:border-rose-500  "
                // onClick={closeMobileMenu}
              >
                <img
                //   src={ch3}
                  alt=""
                  class="object-contain w-[50px]"
                />
                <div class="m-l-[12px] flex flex-grow flex-col">
                  <span class="flex-grow block ">
                    {" "}
                    1 người đã đánh giá vào bài đăng của bạn
                  </span>
                  <span class="flex-grow block text-[#756f6e]">
                    Nguyen đã đánh giá vào bài đăng Phòng...
                  </span>
                </div>
              </Link>
            </li>
          </ul>
          <footer class="flex">
            <Link
              to={"/logged-in/thongbao"}
              className="m-auto text-black px-[30px] py-[3px] "
            >
              Xem tat ca
            </Link>
          </footer>
        </div>
      </div>
    )
}