import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { path } from "../../ultils/path";

import { Outlet, Navigate } from "react-router-dom";
import SideBarSystem from "../../components/system/SideBarSystem";
const System = () => {
  const stateAuth = useSelector((state) => state.auth);
  console.log(stateAuth.data);
  if (!stateAuth.isLoggedIn || stateAuth.data.role === "0")
    return <Navigate to={`/${path.LOGIN}`} replace={true} />;
  return (
    <>
      <div className="w-full bg-gray-100 flex lg:flex-row flex-col font-[sans-serif]">
        <SideBarSystem />
        <div className="w-full lg:w-[calc(100%-224px)]  h-full flex items-center justify-center ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default System;
