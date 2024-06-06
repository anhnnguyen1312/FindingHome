import React from "react";

import { Button } from "./index";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-[#242424] py-[1rem] flex flex-col items-center justify-center mt-[2rem] ">
        <section className="flex flex-col items-center justify-center p-[10px] mb-[0px] text-[#fff]">
          <p className="mb-[20px] text-2xl">Chọn phòng ưng ý ngay</p>
          <p className="mb-[20px] text-xl">
            Nhập email để nhân thông báo về phòng mới nhất ngay!
          </p>
          <div className="">
            {/* <form> */}
            <input
              className="py-[8px] px-[20px] rounded-[2px] mr-[10px] font-medium mb-[16px] border border-[#fff]"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            {/* <Button buttonStyle="btn--outline"></Button> */}
            <Button
              children={"Gửi Email "}
              textColor={"text-black"}
              bgColor={"bg-white"}
              borderRounded={"rounded-[6px]"}
              borderColor={"border-white"}
              //   custom={'h-10 w-[15rem]'}
            />

            {/* </form>*/}
          </div>
        </section>
        <div class=" flex justify-center w-full max-w-[1000px]">
          <div className="flex">
            <div class="flex flex-col items-start text-[#fff] m-[16px] w-[160px] text-left ">
              {/* <h2 className="mb-[16px] text-[#fff] ">About Us</h2> */}
              <Link className="mb-[10px]" to="/">
                Giới thiệu
              </Link>
              <Link className="mb-[10px] " to="/">
                Trang Chủ
              </Link>
              <Link className="mb-[10px] " to="/">
                Tìm Phòng
              </Link>
              <Link className="mb-[10px] " to="/">
                Tìm Nhà
              </Link>
              <Link className="mb-[10px] " to="/">
                Tìm Mặt bằng
              </Link>
            </div>
            <div class="flex flex-col items-start text-[#fff] m-[16px] w-[160px] text-left footer-link-items ">
              {/* <h2 className="mb-[16px] text-[#fff] ">Contact Us</h2> */}
              <Link className="mb-[10px] " to="/">
                Liên hệ
              </Link>
              <Link className="mb-[10px] " to="/">
                Khiếu nại
              </Link>
              <Link className="mb-[10px] " to="/">
                Hợp tác
              </Link>
              <Link className="mb-[10px] " to="/">
                Tài trợ
              </Link>
              <Link className="mb-[10px] " to="/">
                Chính Sách
              </Link>
            </div>
            <div class="flex flex-col items-start text-[#fff] m-[16px] w-[160px] text-left footer-link-items ">
              {/* <h2 className="mb-[16px] text-[#fff] ">Contact Us</h2> */}
              <Link className="mb-[10px] " to="/">
                Hỗ trợ khách hàng
              </Link>
              <Link className="mb-[10px] " to="/">
                Hướng dẫn đăng tin
              </Link>
              <Link className="mb-[10px] " to="/">
                Bảng giá dịch vụ
              </Link>
              <Link className="mb-[10px] " to="/">
                Quy định đăng tin
              </Link>
              <Link className="mb-[10px] " to="/">
                Quy định khiếu nại
              </Link>
            </div>
          </div>
        </div>
        <section class="social-media max-w-[1000px] w-full">
          <div class="social-media-wrap flex justify-between items-center w-[90%] max-w-[1000px] mt-[5px] mx-auto ">
            <div class="footer-logo">
              <Link
                to="/"
                className="social-logo text-[#fff] justify-start ml-[20px] pointer font-xl flex items-center mb-[10px]"
              >
                Anh-Phu
                <i class="fa-brands fa-suse" />
              </Link>
            </div>
            <div class="flex justify-between items-center w-[240px]">
              <Link
                class="social-icon-link text-[#fff] font-xl facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link text-[#fff] font-xl instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link text-[#fff] font-xl youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social-icon-link text-[#fff] font-xl twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link text-[#fff] font-xl twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
