import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { path } from "../ultils/path";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../redux/store/action/authenAction";
import { removeAuthToken } from "../api/cookieServices";
import userAvatar from "../assets/images/userAvatar.jpg";
import logo from "../assets/images/logo.jpg";
import { Notifications } from "./index";
import { checkAuthenToken } from "../api/cookieServices";

export default function NavBar() {
  checkAuthenToken();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [clickUser, setClickUser] = useState(false);

  const stateAuth = useSelector((state) => state.auth);
  const userRole = stateAuth.data.role;
  const userId = stateAuth.data.userId;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("stateAuth", stateAuth);
  function handleLogInNavigate(stateIsRegister) {
    navigate(path.LOGIN, { state: { stateIsRegister } });
  }
  function handleUserProfileNavigate() {
    navigate("/logged-in/profile", { state: "profile" });
  }
  function handleManagePostNavigate() {
    navigate("/logged-in/profile", { state: "managepost" });
  }

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleLogOut = () => {
    removeAuthToken();
    dispatch(logoutAction());
  };

  const handleNavIcon = () => {
    swal({
      text: "Bạn cần đăng nhập",
      icon: "error",
      timer: 2000,
    });
    navigate(path.LOGIN);
  };
  const handleLogInMobile = () => {
    closeMobileMenu();
    handleLogInNavigate(false);
  };
  const handleLogOutMobile = () => {
    closeMobileMenu();
    dispatch(logoutAction());
  };
  const handleClickUser = () => {
    if (!stateAuth.isLoggedIn) {
      handleLogInNavigate(false);
    }
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    if (stateAuth.isLoggedOut && !stateAuth.isLoggedIn) {
      swal({
        text: stateAuth.msg,
        icon: "success",
        timer: 2000,
      });
    }
  }, [stateAuth.isLoggedOut]);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar font-[sans-serif]">
        <div className="navbar-container">
          <Link
            to={path.HOME}
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <span className="mr-2 w-10">
              <img src={logo} alt="findingHouse" className="rounded-full" />
            </span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to={path.HOME}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/${path.FINDROOM}`}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tìm gần đây
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={path.ROOM_RENTAL}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tìm phòng trọ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/tim-nha"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tìm nhà
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={"/tim-mat-bang"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tìm mặt bằng
              </NavLink>
            </li>

            {!stateAuth.isLoggedIn ? (
              <li className="nav-item login-btn-mobile">
                <div
                  className="nav-links login-btn-mobile"
                  onClick={() => handleLogInMobile()}
                >
                  Đăng Nhập
                </div>
              </li>
            ) : (
              <li className="nav-item login-btn-mobile">
                <div
                  className="nav-links login-btn-mobile"
                  onClick={() => handleLogOutMobile()}
                >
                  Đăng Xuất
                </div>
              </li>
            )}
          </ul>
          <div className="navbar_search">
            <Link to={`/logged-in/${path.LIST_LIKED}`} className="icon-navbar">
              <i className="fa-solid fa-heart white_icon"></i>
            </Link>
            {!stateAuth.isLoggedIn && (
              <div className="icon-navbar" onClick={() => handleClickUser()}>
                <i className="fa-solid fa-user white_icon"></i>
              </div>
            )}
            {stateAuth.isLoggedIn ? (
              <Link to={"/logged-in/newpost"} className="icon-navbar">
                <i className="fa-solid fa-square-plus"></i>
              </Link>
            ) : (
              <div className="icon-navbar" onClick={() => handleNavIcon()}>
                <i className="fa-solid fa-square-plus"></i>
              </div>
            )}
            {stateAuth.isLoggedIn ? (
              <Notifications userId={userId} userRole={userRole} />
            ) : (
              <div className="icon-navbar" onClick={handleNavIcon}>
                <i className="fa-solid fa-bell white_icon"></i>
              </div>
            )}
          </div>

          {stateAuth.isLoggedIn && (
            <div className="flex items-center gap-[5px] ml-[30px] ">
              <div
                className="cursor-pointer "
                onClick={() => handleManagePostNavigate()}
              >
                {stateAuth.data?.name}
              </div>
              <div
                className="cursor-pointer icon-navbar-user font-thin  relative"
                onClick={() => setClickUser(!clickUser)}
              >
                <img
                  src={stateAuth.data?.avatar || userAvatar}
                  className="w-[25px] h-[25px] bg-gray-300 rounded-full "
                ></img>
                {clickUser && (
                  <div className="cart__list py-[20px] ">
                    <ul className="font-thin flex flex-col gap-[20px] bg-white">
                      {stateAuth.data.role === "1" && (
                        <Link
                          className="cursor-pointer flex items-center justify-between"
                          // to={`${path.MANAGE_POST_SYSTEM}`}
                          to={`system/manage-post-system`}
                        >
                          {" "}
                          Hệ thống quản lí
                          <i className="fa-solid fa-gear text-black"></i>
                        </Link>
                      )}

                      <li
                        onClick={() => handleUserProfileNavigate()}
                        className="cursor-pointer flex items-center justify-between"
                      >
                        Tài khoản
                        <i className="fa-solid fa-user text-black "></i>
                      </li>
                      <li
                        onClick={() => handleManagePostNavigate()}
                        className="cursor-pointer flex justify-between items-center"
                      >
                        <div>Quản lí bài đăng</div>

                        <i className="fa-solid fa-square-plus text-black "></i>
                      </li>

                      <li
                        className=" cursor-pointer flex justify-between items-center "
                        onClick={() => handleLogOut()}
                      >
                        <div className="text-red">Đăng Xuất</div>

                        <i className="fa-solid fa-arrow-right-from-bracket text-red "></i>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
