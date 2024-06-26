import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { path } from "../../ultils/path";

import { Outlet, Navigate } from "react-router-dom";
import { SideBarSystem } from "../../components";
const System = () => {
  const stateAuth = useSelector((state) => state.auth);
  console.log(stateAuth.data);
  if (!stateAuth.isLoggedIn || stateAuth.data.role === "0")
    return <Navigate to={`/${path.LOGIN}`} replace={true} />;
  return (
    <>
      <div class="w-screen bg-gray-100 flex lg:flex-row flex-col">
        <SideBarSystem />
        <div className="w-full   h-full flex items-center justify-center ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default System;
