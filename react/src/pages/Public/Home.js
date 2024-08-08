import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/index";
import { Footer } from "../../components/index";

import {
  CommentOutlined,
  CustomerServiceOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { FloatButton, Switch } from "antd";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative bg-[#F8FAFC] font-[sans-serif]">
      <NavBar />
      <div className="md:w-full lg:w-4/5 sm:w-full  xl:w-4/5   m-auto h-full flex flex-col items-center justify-center ">
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
