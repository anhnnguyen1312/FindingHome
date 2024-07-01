import React, { useEffect, useState } from "react";
// import NavBar from '../../components/NavBar'
import { Outlet } from "react-router-dom";
import { Search, NavBar } from "../../components/index";
import { Footer } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../LoggedIn/Profile";
import { getUserAction } from "../../redux/store/action/authenAction";
import { getAuthToken } from "../../api/cookieServices";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton, Switch } from "antd";

export default function Home() {
  const [open, setOpen] = useState(true);
  // const onChange = (checked) => {
  //   setOpen(checked);
  // };
  // useEffect(() => {
  //   const cookie = getAuthToken();
  //   console.log("cookie", cookie);

  //   cookie && dispatch(getUserAction(cookie));
  // }, []);
  return (
    <div className="relative bg-[#F8FAFC] font-[sans-serif]">
      {/* relative */}
      <NavBar />
      <div className="md:w-full lg:w-4/5 sm:w-full  xl:w-4/5   m-auto h-full flex flex-col items-center justify-center ">
        {/* <Search /> */}
        <Outlet />
        <div className="fixed right-2 bottom-2">
          <FloatButton.Group
            open={open}
            trigger="click"
            style={{
              right: 24,
            }}
            icon={<CustomerServiceOutlined />}
            onClick={() => setOpen(!open)}
          >
            <FloatButton tooltip={<div>Chính sách</div>} />
            <FloatButton
              tooltip={<div>Tư vấn ngay</div>}
              icon={<CommentOutlined />}
            />
          </FloatButton.Group>
          {/* <Switch
            onChange={onChange}
            checked={open}
            style={{
              margin: 16,
            }}
          /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
