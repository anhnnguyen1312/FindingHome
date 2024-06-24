import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { Input, Select } from "antd";
import { path } from "../ultils/path";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import activeUser from "../assets/images/active-user.png";
import { logoutAction } from "../redux/store/action/authenAction";
import { getAuthToken, removeAuthToken } from "../api/cookieServices";
const { Search } = Input;
import ch3 from "../assets/images/canho/ch3.jpg";
import userAvatar from "../assets/images/userAvatar.jpg";

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
    // navigate('/home');
    navigate("/logged-in/profile", { state: "profile" });
  }
  function handleManagePostNavigate() {
    // navigate('/home');
    navigate("/logged-in/profile", { state: "managepost" });
  }
  const stateAuth = useSelector((state) => state.auth);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleLogOut = () => {
    removeAuthToken();
    dispatch(logoutAction());
  };

  const handleCreatePost = () => {
    // if (stateAuth.isLoggedIn) {
    //   handleCreatePostNavigate(stateAuth.data?.id);
    // } else {
    swal({
      text: "Bạn cần đăng nhập",
      icon: "error",
      timer: 2000,
    });
    navigate(path.LOGIN);
    // }
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
    //  else {
    //   handleLogOut();
    // }
  };
  // }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      // setButton(false);
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
            <i class="fa-brands fa-suse" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className='nav-item'>
              <NavLink to={path.HOME} className='nav-links' activeClassName="nav-links-active" onClick={closeMobileMenu}>
                Trang chủ 
              </NavLink>
            </li> */}
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
            {/* <li className='nav-item'>
            <Button 
                children={ 'Đăng Nhập' }
                bgColor= {'bg-primary'}
                textColor= {'text-white'}
                boderColor= {'border-slate-950'}
                onClick= {() => handleLogInNavigate(false)}
            />
            </li> */}
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
            {/* <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{
                width: '215px',
                color:'white'
              }}
              /> */}

            {/* <Link
                to={path.LOGIN}
                className='cart'
              >
               <i class="fa-solid fa-user"></i>
              </Link> */}

            <Link
              to={path.LOGIN}
              className="icon-navbar"
              // onClick={closeMobileMenu}
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
              <div className="icon-navbar" onClick={() => handleCreatePost()}>
                <i class="fa-solid fa-square-plus"></i>
              </div>
            )}
            <Link
              to={"/logged-in/thongbao"}
              className="icon-navbar"
              // onClick={closeMobileMenu}
            >
              {!stateAuth.isLoggedIn ? (
                <div className=" " onClick={() => handleClickUser()}>
                  <i class="fa-solid fa-bell white_icon"></i>
                </div>
              ) : (
                <div className="icon-navbar-user font-thin   relative ">
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
                            src={ch3}
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
                      <li class="flex hover:bg-[#f7f7f7] bg-[#ee4b2b17] border border-transparent border-2 active:border-rose-500 ">
                        <Link
                          to={"/logged-in/thongbao"}
                          className="flex p-[8px] w-full gap-[5px] "
                          // onClick={closeMobileMenu}
                        >
                          <img
                            src={ch3}
                            alt=""
                            class="object-contain w-[50px]"
                          />
                          <div class="m-l-[12px] flex flex-grow flex-col">
                            <span class="flex-grow block px-[10px]">
                              Bài đăng của bạn đã được admin duyệt
                            </span>
                            <span class="flex-grow block text-[#756f6e]">
                              Bìa đăng Phòng Chính chủ ... đã dược duyệt
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li class="flex hover:bg-[#f7f7f7] border border-transparent border-2 active:border-rose-500 ">
                        <Link
                          to={"/logged-in/thongbao"}
                          className="flex p-[8px] w-full gap-[5px] "
                          // onClick={closeMobileMenu}
                        >
                          <img
                            src={ch3}
                            alt=""
                            class="object-contain w-[50px]"
                          />
                          <div class="m-l-[12px] flex flex-grow flex-col">
                            <span class="flex-grow block ">
                              bài đăng của bạn đã bị admin gỡ{" "}
                            </span>
                            <span class="flex-grow block text-[#756f6e]">
                              yêu cầu xóa bài đăng ... đã được duyệt
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li class="flex hover:bg-[#f7f7f7] border border-transparent border-2 active:border-rose-500 ">
                        <Link
                          to={"/logged-in/thongbao"}
                          className="flex p-[8px] w-full gap-[5px] "
                          // onClick={closeMobileMenu}
                        >
                          <img
                            src={ch3}
                            alt=""
                            class="object-contain w-[50px]"
                          />
                          <div class="m-l-[12px] flex flex-grow flex-col">
                            <span class="flex-grow block ">
                              1 người khác đã thích bài đăng
                            </span>
                            <span class="flex-grow block text-[#756f6e]">
                              Nguyen Binh đã thích bài đăng ...
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <footer class="flex">
                      <Link
                        to={"/logged-in/thongbao"}
                        className="m-auto text-black px-[30px] py-[3px] "
                        // onClick={closeMobileMenu}
                      >
                        Xem tat ca
                      </Link>
                    </footer>
                  </div>
                </div>
              )}
            </Link>
            {/* <a className='cart' href='/'>
              
            </a> */}
            {/* <a className='cart'>
            <i class="fa-solid fa-heart"></i>
            </a> */}
          </div>

          {stateAuth.isLoggedIn && (
            // da dang nhap
            <div className="flex items-center gap-[5px] ml-[30px] ">
              <div
                className="cursor-pointer "
                onClick={() => handleUserProfileNavigate()}
              >
                {stateAuth.data?.name}
              </div>
              {/* <Link to={"/logged-in/profile"}>{stateAuth.data?.name}</Link> */}
              <div
                className="cursor-pointer icon-navbar-user font-thin    relative"
                // onClick={() => handleClickUser()}
                onClick={() => setClickUser(!clickUser)}
              >
                {/* <img src={activeUser} className='w-[10px] h-[10px]'></img> */}
                {/* <i class="fa-solid fa-user-check white_icon"></i> */}
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
