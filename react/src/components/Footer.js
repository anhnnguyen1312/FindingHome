import React from "react";
import logo from "../assets/images/logo.jpg";

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
            <input
              className="py-[8px] px-[20px] rounded-[2px] mr-[10px] font-medium mb-[16px] border border-[#fff]"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button
              children={"Gửi Email "}
              textColor={"text-black"}
              bgColor={"bg-white"}
              borderRounded={"rounded-[6px]"}
              borderColor={"border-white"}
            />

          </div>
        </section>
        <div className=" flex justify-center w-full max-w-[1000px]">
          <div className="flex">
            <div className="flex flex-col items-start text-[#fff] m-[16px] w-[160px] text-left ">
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
            <div className="flex flex-col items-start text-[#fff] m-[16px] w-[160px] text-left footer-link-items ">
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
            <div className="flex flex-col items-start text-[#fff] m-[16px] w-[160px] text-left footer-link-items ">
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
        <section className="social-media max-w-[1000px] w-full">
          <div className="social-media-wrap flex justify-between items-center w-[90%] max-w-[1000px] mt-[5px] mx-auto ">
            <div className="footer-logo">
              <Link
                to="/"
                className="social-logo text-[#fff] justify-start ml-[20px] pointer font-xl flex items-center mb-[10px]"
              >
                <span className="mr-2 w-8">
                  <img src={logo} alt="findingHouse" className="rounded-full" />
                </span>
                ApparmentPro Corp.
              </Link>
            </div>
            <div className="flex justify-between items-center w-[240px]">
              <Link
                className="social-icon-link text-[#fff] font-xl facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link text-[#fff] font-xl instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className="social-icon-link text-[#fff] font-xl youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
              <Link
                className="social-icon-link text-[#fff] font-xl twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                className="social-icon-link text-[#fff] font-xl twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
