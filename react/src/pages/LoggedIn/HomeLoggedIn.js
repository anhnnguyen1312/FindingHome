import React, { useEffect, useState } from "react";
// import NavBar from '../../components/NavBar'
import { Outlet, Navigate } from "react-router-dom";
import { Search, NavBar } from "../../components/index";
import { Footer } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { path } from "../../ultils/path";
import { getUserAction } from "../../redux/store/action/authenAction";
import { getAuthToken } from "../../api/cookieServices";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton, Switch } from "antd";
export default function Home() {
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.auth);
  console.log("stateAuth data", stateAuth.data);

  // useEffect(() => {
  //   // k can lay token? chir lay isloggedin de check?
  //   const cookie = getAuthToken();
  //   cookie ? (
  //     dispatch(getUserAction(cookie))
  //   ) : (
  //     <Navigate to={`/${path.LOGIN}`} replace={true} />
  //   );

  // }, []);
  console.log("s!stateAuth.isLoggedIn", !stateAuth.isLoggedIn);
  if (!stateAuth.isLoggedIn)
    return <Navigate to={`/${path.LOGIN}`} replace={true} />;

  return (
    <div className="w-full bg-[#F8FAFC] font-[sans-serif]">
      {/* relative */}
      <NavBar />
      <div className="w-full m-auto h-full flex flex-col items-start justify-start ">
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
