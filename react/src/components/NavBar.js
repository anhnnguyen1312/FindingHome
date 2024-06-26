import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { path } from "../ultils/path";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../redux/store/action/authenAction";
import {  removeAuthToken } from "../api/cookieServices";
import ch3 from "../assets/images/canho/ch3.jpg";
import userAvatar from "../assets/images/userAvatar.jpg";
import logo from "../assets/images/logo.jpg";
import {Notifications} from "./index"

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [clickUser, setClickUser] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogInNavigate(stateIsRegister) {
    navigate(path.LOGIN, { state: { stateIsRegister } });
  }
  function handleUserProfileNavigate() {
    navigate("/logged-in/profile", { state: "profile" });
  }
  function handleManagePostNavigate() {
    navigate("/logged-in/profile", { state: "managepost" });
  }
  const stateAuth = useSelector((state) => state.auth);
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
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to={path.HOME}
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            {/* Anh-Phú */}
            {/* <i class="fa-brands fa-suse" /> */}
            <span class="mr-2 w-10">
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
                to={"/tim-phong"}
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
            <Link
              to={path.LOGIN}
              className="icon-navbar"
            >
              <i class="fa-solid fa-heart white_icon"></i>
            </Link>
            {!stateAuth.isLoggedIn && (
              <div className="icon-navbar" onClick={() => handleClickUser()}>
                <i class="fa-solid fa-user white_icon"></i>
              </div>
            )}
            {stateAuth.isLoggedIn ? (
              <Link to={"/logged-in/newpost"} className="icon-navbar">
                <i class="fa-solid fa-square-plus"></i>
              </Link>
            ) : (
              <div className="icon-navbar" onClick={() => handleNavIcon()}>
                <i class="fa-solid fa-square-plus"></i>
              </div>
            )}
            {stateAuth.isLoggedIn ? (
                <Notifications/>
              ) : (
              <div className="icon-navbar" onClick={() => handleNavIcon()}>
                <i class="fa-solid fa-bell white_icon"></i>
              </div>
            )}
          </div>

          {stateAuth.isLoggedIn && (
            // da dang nhap
            <div className="flex items-center gap-[5px] ml-[30px] ">
              <div
                className="cursor-pointer "
                onClick={() => handleManagePostNavigate()}
              >
                {stateAuth.data?.name}
              </div>
              {/* <Link to={"/logged-in/profile"}>{stateAuth.data?.name}</Link> */}
              <div
                className="cursor-pointer icon-navbar-user font-thin    relative"
                onClick={() => setClickUser(!clickUser)}
              >
                <img
                  src={stateAuth.data?.avatar || userAvatar}
                  className="w-[25px] h-[25px] bg-gray-300 rounded-full "
                ></img>
                {clickUser && (
                  <div className="cart__list py-[20px] ">
                    <ul
                      className="font-thin flex flex-col gap-[20px] bg-white"
                      // onClick={() => handleUserProfile()}
                    >
                      {stateAuth.data.role === "1" && (
                        <Link
                          className="cursor-pointer flex items-center justify-between"
                          to={path.SYSTEM}
                        >
                          {" "}
                          Hệ thống quản lí
                          <i class="fa-solid fa-gear text-rose-600"></i>
                        </Link>
                      )}

                      <li
                        onClick={() => handleUserProfileNavigate()}
                        className="cursor-pointer flex items-center justify-between"
                      >
                        {/* <Link to={"/logged-in/profile"}>Tài khoản</Link> */}
                        Tài khoản
                        <i class="fa-solid fa-user text-black "></i>
                      </li>
                      <li
                        onClick={() => handleManagePostNavigate()}
                        className="cursor-pointer flex justify-between items-center"
                      >
                        <div>Quản lí bài đăng</div>

                        <i class="fa-solid fa-square-plus text-black "></i>
                      </li>

                      <li
                        className=" cursor-pointer flex justify-between items-center "
                        onClick={() => handleLogOut()}
                      >
                        <div className="text-red">Đăng Xuất</div>

                        <i class="fa-solid fa-arrow-right-from-bracket text-red "></i>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* <div className="login--container"> */}
          {/* {!stateAuth.isLoggedIn ? 
          <> */}

          {/* <Button 
                children={ 'Đăng Nhập' }
                bgColor= {'bg-primary'}
                textColor= {'text-white'}
                boderColor= {'border-slate-950'}
                onClick= {() => handleLogInNavigate(false)}
            /> */}

          {/* <Button 
                children={ 'Đăng Ký' }
                bgColor= {'bg-transparent'}
                textColor= {'text-white'}
                borderColor= {'border-white'}
                onClick= {() => handleLogInNavigate(true)}
            /> */}
          {/* </>
            :      
            <Button 
                children={ 'Đăng Xuất' }
                bgColor= {'bg-red-600'}
                textColor= {'text-white'}
                borderColor= {'border-white'}
                onClick= {handleLogOut}
            />
           
            } */}
          {/* <Button
              children={"Đăng Bài"}
              bgColor={"bg-[#2ADA66]"}
              textColor={"text-white"}
              borderColor={"border-white"}
            /> */}
          {/* </div> */}
        </div>
      </nav>
    </>
    // </div>
  );
}
// }
