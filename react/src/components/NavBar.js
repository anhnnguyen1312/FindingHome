import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { Input, Select } from "antd";
import { path } from "../ultils/path";
import { useDispatch, useSelector } from "react-redux";
import activeUser from "../assets/images/active-user.png";
// import { logoutAction } from '../../redux/store/action/authenAction.js';
import { logoutAction } from "../redux/store/action/authenAction";
const { Search } = Input;
import ch3 from "../assets/images/canho/ch3.jpg";
export default function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogInNavigate(stateIsRegister) {
    // navigate('/home');
    navigate(path.LOGIN, { state: { stateIsRegister } });
  }
  const stateAuth = useSelector((state) => state.auth);
  console.log("render", stateAuth.isLoggedIn);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogOut = () => {
    dispatch(logoutAction());
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
    } else {
      handleLogOut();
    }
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
    console.log("isLogIn", stateAuth.isLoggedIn);
    // stateAuth.isLogIn && usenavi('/')
  }, [stateAuth.isLoggedIn]);

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
              <Link
                to={path.ROOM_RENTAL}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tìm phòng trọ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={path.HOUSE_RENTAL}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tìm nhà
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to={path.ESTATE_RENTAL}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tìm mặt bằng
              </Link>
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
            {!stateAuth.isLoggedIn ? (
              <div className="icon-navbar" onClick={() => handleClickUser()}>
                <i class="fa-solid fa-user white_icon"></i>
              </div>
            ) : (
              <div
                className="icon-navbar icon-navbar-user font-thin    relative"
                onClick={() => handleClickUser()}
              >
                {/* <img src={activeUser} className='w-[10px] h-[10px]'></img> */}
                <i class="fa-solid fa-user-check white_icon"></i>
                <div className="cart__list py-[20px] ">
                  <ul className="font-thin flex flex-col bg-white">
                    <li className="flex items-center justify-between">
                      <div>Tài khoản</div>

                      <i class="fa-solid fa-user text-black "></i>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>Phòng đã đăng</div>

                      <i class="fa-solid fa-square-plus text-black "></i>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>Mã giảm giá</div>
                      <i class="fa-regular fa-ticket text-black"></i>
                    </li>
                    <li className="flex justify-between items-center ">
                      <div className="text-red">Đăng Xuất</div>

                      <i class="fa-solid fa-arrow-right-from-bracket text-red "></i>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <Link
              to={path.ESTATE_RENTAL}
              className="icon-navbar"
              // onClick={closeMobileMenu}
            >
              <i class="fa-solid fa-square-plus"></i>
            </Link>

            <Link
              to={path.ESTATE_RENTAL}
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
                          to={path.ESTATE_RENTAL}
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
                          to={path.ESTATE_RENTAL}
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
                          to={path.ESTATE_RENTAL}
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
                          to={path.ESTATE_RENTAL}
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
                        to={path.ESTATE_RENTAL}
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
