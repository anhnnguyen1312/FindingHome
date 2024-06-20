import React, { useEffect } from "react";
// import NavBar from '../../components/NavBar'
import { Outlet } from "react-router-dom";
import { Search, NavBar } from "../../components/index";
import { Footer } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../LoggedIn/Profile";
import { getUserAction } from "../../redux/store/action/authenAction";
import { getAuthToken } from "../../api/cookieServices";
export default function Home() {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.auth);
  useEffect(() => {
    const cookie = getAuthToken();
    cookie && dispatch(getUserAction(cookie));
  }, []);
  return (
    <div className="relative bg-[#F8FAFC]">
      {/* relative */}
      <NavBar />
      <div className="md:w-full lg:w-4/5 sm:w-full  xl:w-4/5   m-auto h-full flex flex-col items-start justify-start ">
        {/* <Search /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
