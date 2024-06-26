import React, { useState, useEffect } from "react";
import { CardProduct, Search, Button } from "./index";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, message } from "antd";
import no_data_img from "../assets/images/no-data-icon-10.png";
import { callApiDeletePost } from "../api/getPostApi";
import { SelectNewPost } from "./index";
import typePost from "../data/typePost";
import checkPrice from "./checkPrice";
import checkArea from "./checkArea";
import { homepagePostAction } from "../redux/store/action/postAction";
const Product = ({ type, isHomePage }) => {
  const [button, setButton] = useState(false);
  const [searchButtonClick, setSearchButtonClick] = useState(false);
  const [buttonFilterClick, setButtonFilterClick] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);

  const [searchData, setSearchData] = useState();

  const { homepagePosts } = useSelector((state) => state.post);

  // const allPosts = Object.values(posts).flat();
  // const filteredProducts = type
  //   ? allPosts.filter((post) => post.typeRoom === type)
  //   : allPosts;

  const savedPageKey = `currentPage-${type || "all"}`;
  const initialPage = parseInt(localStorage.getItem(savedPageKey)) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const dispatch = useDispatch();
  const pageSize = 2;
  // const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = startIndex + pageSize;
  // const currentPosts = filteredProducts.slice(startIndex, endIndex);
  // const currentpostData = postData.slice(startIndex, endIndex);

  // useEffect(() => {
  //   dispatch(homepagePostAction());
  // }, []);

  useEffect(() => {
    const allPosts = Object.values(homepagePosts).flat();
    const filterTypePosts = type
      ? allPosts.filter((post) => post.typeRoom === type)
      : allPosts;

    filterTypePosts && setFilteredProducts(filterTypePosts);
    console.log("filterTypePosts", filterTypePosts);
  }, [homepagePosts]);

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
    localStorage.setItem(savedPageKey, "1");
  }, [type]);

  useEffect(() => {
    const checkFilter = () => {
      let dataPostSearch = [];
      if (searchData) {
        setCurrentPage(1);
        //check type- address
        if (searchData.type) {
          const postType = filteredProducts.filter(
            (post) => post.typeRoom === searchData.type
          );

          dataPostSearch = postType;
          if (searchData.address.trim()) {
            const postAddress = dataPostSearch.filter((post) =>
              post.address.trim().includes(searchData.address.trim())
            );
            dataPostSearch = postAddress;
          }
        } else {
          if (searchData.address?.trim()) {
            const postAddress = filteredProducts.filter((post) =>
              post.address.trim().includes(searchData.address.trim())
            );
            dataPostSearch = postAddress;
          } else {
            dataPostSearch = filteredProducts;
          }
        }
        //check price- area
        if (searchData.price && dataPostSearch) {
          const dataPrice = checkPrice(dataPostSearch, searchData);
          dataPostSearch = dataPrice;
          if (searchData.area?.trim() && dataPrice) {
            const dataArea = checkArea(dataPrice);
            dataPostSearch = dataArea;
          }
        } else {
          if (searchData.area?.trim() && dataPostSearch) {
            const dataArea = checkArea(dataPostSearch, searchData);
            dataPostSearch = dataArea;
          } else {
            return dataPostSearch;
          }
        }
      } else {
        dataPostSearch = filteredProducts;
      }
      // return dataPostSearch;
      setFilteredProducts(dataPostSearch);
    };
    searchButtonClick && checkFilter();
    // data && setPostData(data);
    // data && setFilteredProducts(data);
  }, [searchData]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    filteredProducts &&
      setCurrentPosts(filteredProducts?.slice(startIndex, endIndex));
    // postData && setCurrentpostData(postData?.slice(startIndex, endIndex));
  }, [filteredProducts, currentPage]);

  return (
    <div className="flex flex-col items-center justify-center gap-[30px] w-full">
      <div className=" flex xl:flex-row flex-col gap-[2vw] w-full ">
        <div className="xl:hidden flex bg-gray">
          <div className=" w-full p-[20px] flex flex-col items-center justify-center gap-[20px] ">
            {/* //button */}
            <button
              onClick={() => setButtonFilterClick(!buttonFilterClick)}
              className="p-[15px] w-full h-[40px]  bg-[#374151] flex text-gray-300 items-center hover:bg-slate-600 border border-transparent active:border-white justify-between rounded-md"
            >
              <p>Bộ Lọc</p>
              {buttonFilterClick ? <DownOutlined /> : <UpOutlined />}
            </button>
            {buttonFilterClick && (
              <div className=" flex-col xl:flex-row bg-F8FAFC w-full p-[10px] flex items-center justify-center gap-[10px] ">
                <Search
                  type={type}
                  setSearchData={setSearchData}
                  setSearchButtonClick={setSearchButtonClick}
                />
              </div>
            )}
          </div>
        </div>
        <div className="xl:flex-[80%] flex flex-col gap-[10px] p-[5px] ">
          <div className="flex items-center justify-between mt-[5vh]">
            <h1 className="mb-[24px] text-[30px] font-semibold text-rose-500">
              Danh Sách Bài Đăng
            </h1>
          </div>
          {/* <ul className="flex flex-col gap-[20px]  ">
            {searchButtonClick &&
              currentpostData?.length > 0 &&
              currentpostData.map((product) => {
                return <CardProduct key={product.id} props={product} />;
              })}
            {searchButtonClick && postData?.length === 0 && (
              <img src={no_data_img}></img>
            )}
            {searchButtonClick ||
              (currentPosts?.length > 0 &&
                currentPosts.map((product) => {
                  return <CardProduct key={product.id} props={product} />;
                }))}
          </ul> */}

          <ul className="flex flex-col gap-[20px]  ">
            {currentPosts?.length > 0 &&
              currentPosts.map((product) => {
                return <CardProduct key={product.id} props={product} />;
              })}
            {currentPosts?.length === 0 && <img src={no_data_img}></img>}
          </ul>

          <div className="flex items-center justify-center">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredProducts?.length}
              onChange={handlePageChange}
              hideOnSinglePage={true}
            />
          </div>
        </div>
        <div className="xl:flex-[20%] flex-col hidden xl:flex bg-gray">
          <div className=" w-full flex flex-col items-center justify-start gap-[20px]  mt-[5vh] pt-[2px]  ">
            <div className="flex w-full items-center justify-end pr-[10px]">
              <button
                onClick={() => handleClickFilter()}
                className="p-[15px]  h-[40px] w-[130px] bg-[#374151]  flex text-gray-300  hover:bg-slate-600  items-center   border border-transparent active:border-white justify-between rounded-md"
              >
                <p>Bộ Lọc</p>
                {button ? <DownOutlined /> : <UpOutlined />}
              </button>
            </div>
            {button && (
              <div className=" flex-col bg-F8FAFC w-full p-[10px] flex items-center justify-center gap-[10px] ">
                <Search
                  type={type}
                  setSearchData={setSearchData}
                  setSearchButtonClick={setSearchButtonClick}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
