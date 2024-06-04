import React from "react";
// import NavBar from '../../components/NavBar'
import { Outlet } from "react-router-dom";
import { Search, NavBar } from "../../components/index";
export default function Home() {
  return (
    <div className="relative">
      {/* relative */}
      <NavBar />
      <div className="md:w-full lg:w-4/5 sm:w-full  xl:w-4/5   m-auto h-full flex flex-col items-start justify-start ">
        {/* <Search /> */}
        <Outlet />
      </div>
    </div>
  );
}
