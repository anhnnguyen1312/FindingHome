import React, { useState, useEffect } from "react";
import { CardProduct, Search } from "./index";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Pagination } from "antd";

const Product = ({ type }) => {
  console.log("render")
  const [button, setButton] = useState(false);
  const { posts } = useSelector((state) => state.post);
  
  const allPosts = Object.values(posts).flat();
  const filteredProducts = type ? allPosts.filter(post => post.typeRoom === type) : allPosts;

  const savedPageKey = `currentPage-${type || 'all'}`;
  const initialPage = parseInt(localStorage.getItem(savedPageKey)) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const pageSize = 2;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPosts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClickFilter = () => {
    setButton(!button);
  };

  useEffect(() => {
    localStorage.setItem(savedPageKey, currentPage);
  }, [currentPage, savedPageKey]);

  useEffect(() => {
    // setCurrentPage(1);
    localStorage.setItem(savedPageKey, '1');
  }, [type]);

  return (
    <div className="flex flex-col justify-center gap-[30px]">
      <div className=" flex lg:flex-row flex-col gap-[2vw]   ">
        <div className="lg:hidden flex bg-gray">
          <div className=" w-full p-[20px] flex flex-col items-center justify-center gap-[20px] ">
            <div className=" flex-col md:flex-row bg-F8FAFC w-full p-[10px] flex items-center justify-center gap-[10px] ">
              <Search />
            </div>
          </div>
        </div>
        <div className="lg:flex-[80%] flex flex-col gap-[20px] p-[5px] ">

          <h1 className="mt-[5vh] text-[30px] font-semibold ">
            Danh Sách Bài Đăng{" "}
          </h1>
          <ul className="flex flex-col gap-[20px]  ">
            {currentPosts?.length > 0 &&
              currentPosts.map((product, index) => (
                <CardProduct key={index} props={product} />
              ))}
          </ul>
          <div className="flex items-center justify-center">
          <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredProducts.length}
              onChange={handlePageChange}
              hideOnSinglePage={true}
            />
          </div>
        </div>
        <div className="lg:flex-[20%] flex-col hidden lg:flex bg-gray">
          {/* Button */}
          <div className=" w-full flex flex-col items-center justify-start gap-[20px]  mt-[5vh] pt-[2px]  ">
            <div className="flex w-full items-center justify-end">
              <button
                onClick={() => handleClickFilter()}
                className="p-[15px] h-[40px] w-[130px] bg-white flex  items-center  hover:bg-[#E9F4F6] border border-transparent active:border-rose-500 justify-between rounded-md"
              >
                <p>Bộ Lọc</p>
                {button ? <DownOutlined /> : <UpOutlined />}
              </button>
            </div>
            {button && (
              <div className=" flex-col bg-F8FAFC w-full p-[10px] flex items-center justify-center gap-[10px] ">
                <Search />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
