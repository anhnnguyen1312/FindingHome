import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { path } from "../../ultils/path";
import { removeAuthToken } from "../../api/cookieServices";
import { logoutAction } from "../../redux/store/action/authenAction";
import logo from "../../assets/images/logo.jpg";
import { checkAuthenToken } from "../../api/cookieServices";
import swal from "sweetalert";

const SideBarSystem = () => {
  checkAuthenToken();
  const [selectBtn, setSelectBtn] = useState(false);

  const stateAuth = useSelector((state) => state.auth);
  const { countNoti } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    removeAuthToken();
    dispatch(logoutAction());
  };
  useEffect(() => {
    if (stateAuth.isLoggedOut && !stateAuth.isLoggedIn) {
      swal({
        text: stateAuth.msg,
        icon: "success",
        timer: 2000,
      });
    }
  }, [stateAuth.isLoggedOut]);
  return (
    <>
      <div className="h-screen hidden   lg:block pb-10">
        <div className=" h-full w-56 hidden lg:flex flex-grow flex-col overflow-y-auto rounded-br-lg rounded-tr-lg bg-white pt-5 shadow-md">
          <div className="flex mt-10 items-center px-4">
            <img
              className="h-12 w-auto max-w-full align-middle rounded-full"
              src={stateAuth.data.avatar}
              alt=""
            />
            <div className="flex ml-3 flex-col">
              <h3 className="font-medium">{stateAuth.data.name}</h3>
              <p className="text-xs text-gray-500">
                {stateAuth.data.role === "1" && "Admin"}
              </p>
            </div>
          </div>

          <div className="flex mt-3 flex-1 justify-between flex-col">
            <div className="">
              <nav className="flex-1">
                <Link
                  to={path.HOME}
                  // to={path.MANAGE_POST_SYSTEM}
                  className="flex cursor-pointer items-center border-l-4 border-l-rose-600 py-2 px-4 text-md font-medium text-rose-600 outline-none transition-all duration-100 ease-in-out focus:border-l-4"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      className=""
                    ></path>
                  </svg>
                  Trang chủ
                </Link>

                <Link
                  to={path.NOTIFICATION}
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-md font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  Thông báo
                  <span className="ml-auto rounded-full bg-rose-600 px-2 text-xs text-white">
                    {countNoti}
                  </span>
                </Link>
                <div className="relative transition">
                  <button
                    onClick={() => setSelectBtn(!selectBtn)}
                    className="flex cursor-pointer peer relative w-full items-center border-l-rose-600 py-3 px-4 text-md font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600 focus:border-l-4"
                  >
                    <span className="flex mr-5 w-5  text-md font-medium text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </span>
                    <div className="flex  text-md font-medium text-gray-600 w-full justify-between">
                      <div>Thống kê</div>
                      {selectBtn ? <DownOutlined /> : <UpOutlined />}
                    </div>
                  </button>

                  {selectBtn && (
                    <ul className="duration-400 flex m-2  flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 max-h-96">
                      <li className="">
                        <Link
                          to={path.MANAGE_POST_SYSTEM}
                          className="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-md text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600"
                        >
                          <span className="mr-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                              />
                            </svg>
                          </span>
                          Báo cáo
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to={path.MANAGE_POST_SYSTEM}
                          className="flex m-2 cursor-pointer border-l-rose-600 py-3 pl-5 text-md text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-rose-600"
                        >
                          <span className="mr-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </span>
                          lợi nhuận
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>

              <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
                Quản lí bài đăng
              </span>

              <nav className="flex-1">
                <Link
                  to={path.MANAGE_POST_SYSTEM}
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-md font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      className=""
                    ></path>
                  </svg>
                  Quản lí chung
                </Link>

                <Link
                  to={path.CENSORSHIP_POST_SYSTEM}
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-md font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  Duyệt bài đăng
                </Link>

                <Link
                  to={path.MANAGE_POST_EXPIRED_SYSTEM}
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-md font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Xử lí bài hết hạn
                </Link>
              </nav>

              <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
                Quản lí người dùng
              </span>

              <nav className="flex-1">
                <Link
                  to={path.MANAGE_USER_SYSTEM}
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-md font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      className=""
                    ></path>
                  </svg>
                  Quản lí chung
                </Link>
                <Link
                  to={path.CREATE_ACCOUNT_ADMIN}
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-md font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  Tạo tài khoản admin
                </Link>
              </nav>
            </div>
            <div className="mb-4 ">
              <nav className="flex-1 ">
                <div
                  onClick={() => handleLogOut()}
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-md font-medium text-rose-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket text-rose-600 mr-4"></i>
                  Đăng xuất
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <header className="lg:hidden text-gray-300 bg-[#374151] flex w-full  relative mx-auto  flex-col overflow-hidden px-8 py-2 lg:flex-row lg:items-center">
        <Link
          // to={path.HOME}
          className="flex items-center whitespace-nowrap text-2xl text-gray-300"
        >
          <span className="mr-2 w-10">
            <Link to={path.HOME}>
              <img src={logo} alt="findingHouse" className="rounded-full" />
            </Link>
          </span>
          <p className="text-xs text-gray-300">{stateAuth.data.name}</p>
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-3 right-10 cursor-pointer lg:hidden"
          htmlFor="navbar-open"
        >
          <svg
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:pt-8 peer-checked:max-h-96 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
        >
          <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            <li className="lg:mr-12">
              <Link
                to={path.HOME}
                className="rounded flex hover:text-white text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              >
                <svg
                  className="mr-4 h-5 w-5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    className=""
                  ></path>
                </svg>
                Trang chủ
              </Link>
            </li>
            <li className="lg:mr-12">
              <Link
                to={path.NOTIFICATION}
                className="rounded flex hover:text-white text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              >
                <svg
                  className="mr-4 h-5 w-5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                Thông báo
              </Link>
            </li>
            <li className="lg:mr-12">
              <Link
                to={path.HOME}
                className="rounded flex hover:text-white text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Thống kê
              </Link>
            </li>
            <li className="lg:mr-12">
              <Link
                to={path.MANAGE_POST_SYSTEM}
                className="rounded flex hover:text-white text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              >
                <svg
                  className="mr-4 h-5 w-5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    className=""
                  ></path>
                </svg>
                Quản lí bài đăng
              </Link>
            </li>
            <li className="lg:mr-12">
              <Link
                to={path.CENSORSHIP_POST_SYSTEM}
                className="rounded flex hover:text-white text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              >
                <svg
                  className="mr-4 h-5 w-5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Duyệt bài đăng
              </Link>
            </li>
            <li className="lg:mr-12">
              <Link
                to={path.MANAGE_POST_EXPIRED_SYSTEM}
                className="rounded flex hover:text-white text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              >
                <svg
                  className="mr-4 h-5 w-5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Xử lí bài hết hạn
              </Link>
            </li>
            <li className="lg:mr-12">
              <Link
                to={path.MANAGE_USER_SYSTEM}
                className="rounded flex hover:text-white text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              >
                <svg
                  className="mr-4 h-5 w-5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    className=""
                  ></path>
                </svg>
                Quản lí người dùng
              </Link>
            </li>
            <li className="lg:mr-12">
              <Link
                to={path.CREATE_ACCOUNT_ADMIN}
                className="rounded flex hover:text-white text-gray-300 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              >
                <svg
                  className="mr-4 h-5 w-5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Tạo tài khoản admin
              </Link>
            </li>
          </ul>
          <hr className="mt-4 w-full lg:hidden" />
          <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
            <Link
              to={path.HOME}
              className="whitespace-nowrap flex rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"
            >
              Finding House
            </Link>
            <div
              onClick={() => handleLogOut()}
              className="whitespace-nowrap rounded-xl bg-rose-600 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-rose-700"
            >
              Đăng xuất
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default SideBarSystem;
