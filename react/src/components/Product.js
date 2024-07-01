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
import { Link } from "react-router-dom";
import { path } from "../ultils/path";
const Product = ({ type, isHomePage }) => {
  const [button, setButton] = useState(false);
  const [searchButtonClick, setSearchButtonClick] = useState(false);
  const [buttonFilterClick, setButtonFilterClick] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [currentPostData, setCurrentPostData] = useState([]);
  const [postData, setPostData] = useState([]);

  const [searchData, setSearchData] = useState();

  const { homepagePosts } = useSelector((state) => state.post);

  // const allPosts = Object.values(posts).flat();
  // const filteredProducts = type
  //   ? allPosts.filter((post) => post.typeRoom === type)
  //   : allPosts;

  const savedPageKey = `currentPage-${type || "all"}`;
  const initialPage = parseInt(localStorage.getItem(savedPageKey)) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchInput, setSearchInput] = useState("");

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

  const handleOnChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };
  const handleSearchInputClick = () => {
    const search = filteredProducts.filter((post) => {
      let result = false;

      for (const key in post) {
        if (
          typeof post[key] === "string" &&
          post[key].toLowerCase().includes(searchInput.toLowerCase())
        ) {
          result = true;
          break;
        }
      }
      return result;
    });
    search && setPostData(search);
  };

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
            // return dataPostSearch;
          }
        }
      } else {
        dataPostSearch = filteredProducts;
        console.log("dataPostSearch", dataPostSearch);
      }
      setPostData(dataPostSearch);
    };
    // searchButtonClick &&
    checkFilter();
  }, [searchData, filteredProducts]);
  console.log("currentPostData", currentPostData);
  console.log("postData", postData);

  // useEffect(() => {
  //   const checkFilter = () => {
  //     let dataPostSearch = [];
  //     if (searchData) {
  //       setCurrentPage(1);
  //       //check type- address
  //       if (searchData.type) {
  //         const postType = filteredProducts.filter(
  //           (post) => post.typeRoom === searchData.type
  //         );

  //         dataPostSearch = postType;
  //         if (searchData.address.trim()) {
  //           const postAddress = dataPostSearch.filter((post) =>
  //             post.address.trim().includes(searchData.address.trim())
  //           );
  //           dataPostSearch = postAddress;
  //         }
  //       } else {
  //         if (searchData.address?.trim()) {
  //           const postAddress = filteredProducts.filter((post) =>
  //             post.address.trim().includes(searchData.address.trim())
  //           );
  //           dataPostSearch = postAddress;
  //         } else {
  //           dataPostSearch = filteredProducts;
  //         }
  //       }
  //       //check price- area
  //       if (searchData.price && dataPostSearch) {
  //         const dataPrice = checkPrice(dataPostSearch, searchData);
  //         dataPostSearch = dataPrice;
  //         if (searchData.area?.trim() && dataPrice) {
  //           const dataArea = checkArea(dataPrice);
  //           dataPostSearch = dataArea;
  //         }
  //       } else {
  //         if (searchData.area?.trim() && dataPostSearch) {
  //           const dataArea = checkArea(dataPostSearch, searchData);
  //           dataPostSearch = dataArea;
  //         } else {
  //           return dataPostSearch;
  //         }
  //       }
  //     } else {
  //       dataPostSearch = filteredProducts;
  //     }
  //     // return dataPostSearch;
  //     setFilteredProducts(dataPostSearch);
  //   };
  //   searchButtonClick && checkFilter();
  //   // data && setPostData(data);
  //   // data && setFilteredProducts(data);
  // }, [searchData]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    postData && setCurrentPostData(postData?.slice(startIndex, endIndex));
    // postData && setCurrentpostData(postData?.slice(startIndex, endIndex));
  }, [filteredProducts, currentPage, postData]);

  return (
    <div className="flex flex-col items-center justify-center gap-[30px] w-full">
      <div className=" flex xl:flex-row flex-col gap-[2vw] w-full ">
        <div className="xl:flex-[80%] flex flex-col gap-[10px] p-[5px] ">
          <div className="flex items-center justify-between mt-[5vh]">
            <h1 className="xl:mb-[24px] text-[30px] font-semibold text-rose-500">
              Danh Sách Bài Đăng
            </h1>
          </div>

          <div
            class="flex flex-row justify-between border-b-2
				dark:border-[#374151] dark:text-gray-400 transition duration-500
				ease-in-out"
          >
            <div class="flex items-center flex-grow justify-between m-4 select-none">
              <input
                class="w-12 bg-transparent flex-grow focus:outline-none"
                placeholder="Tìm kiếm"
                type="text"
                value={searchInput}
                onChange={(e) => handleOnChangeSearchInput(e)}
              />
              <button
                onClick={() => handleSearchInputClick()}
                class="hover:text-rose-600 dark-hover:text-green-300
						cursor-pointer mr-3 transition duration-500 ease-in-out  "
              >
                <svg viewBox="0 0 512 512" class="h-5 w-5 fill-current">
                  <path
                    d="M505 442.7L405.3
								343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
								44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
								208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
								2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
								0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
								0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
								128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="xl:hidden flex bg-gray">
            <div className=" w-full p-[20px] flex flex-col items-center justify-center gap-[20px] ">
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
                    setSearchData={setSearchData}
                    setSearchButtonClick={setSearchButtonClick}
                  />
                </div>
              )}
            </div>
          </div>
          <ul className="flex flex-col gap-[20px]  ">
            {currentPostData?.length > 0
              ? currentPostData.map((product) => {
                  return <CardProduct key={product.id} props={product} />;
                })
              : currentPostData?.length === 0 && <img src={no_data_img}></img>}
          </ul>

          <div className="flex items-center justify-center mt-[10px]">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={postData?.length}
              onChange={handlePageChange}
              hideOnSinglePage={true}
              showSizeChanger
              showQuickJumper
              showTotal={(total) => `Tổng ${total} bài đăng`}
            />
            {/* <Pagination total={500} itemRender={itemRender} /> */}
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
