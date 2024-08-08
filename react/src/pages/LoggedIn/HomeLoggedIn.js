import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { NavBar } from "../../components/index";
import { Footer } from "../../components/index";
import { useSelector } from "react-redux";
import { path } from "../../ultils/path";
import {
  CommentOutlined,
  CustomerServiceOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import { checkAuthenToken } from "../../api/cookieServices";

export default function Home() {
  checkAuthenToken();
  const [open, setOpen] = useState(true);

  const stateAuth = useSelector((state) => state.auth);

  if (!stateAuth.isLoggedIn)
    return <Navigate to={`/${path.LOGIN}`} replace={true} />;

  return (
    <div className="w-full bg-[#F8FAFC] font-[sans-serif]">
      <NavBar />
      <div className="w-full m-auto h-full flex flex-col items-start justify-start ">
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
            <FloatButton
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              tooltip={<div>Cuộn lên đầu trang</div>}
              icon={<ArrowUpOutlined />}
            />
            <FloatButton tooltip={<div>Chính sách</div>} />
            <FloatButton
              tooltip={<div>Tư vấn ngay</div>}
              icon={<CommentOutlined />}
            />
          </FloatButton.Group>
        </div>
      </div>
      <Footer />
    </div>
  );
}
