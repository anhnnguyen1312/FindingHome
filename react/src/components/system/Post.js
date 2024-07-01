import React, { useState, useEffect } from "react";
import { CardProduct, Search, Button } from "../index";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, message, Popconfirm } from "antd";
import no_data_img from "../../assets/images/no-data-icon-10.png";
import { callApiDeletePost, callApiCensorPost } from "../../api/getPostApi";
import { SelectNewPost, formatDate } from "../index";
import typePost from "../../data/typePost";
import checkPrice from "../checkPrice";
import checkArea from "../checkArea";
import { postAction } from "../../redux/store/action/postAction";
import moment from "moment";
import { Link } from "react-router-dom";
import { path } from "../../ultils/path";
const Post = ({ isManagePage, check, isExpired }) => {
  const [button, setButton] = useState(false);
  const [searchButtonClick, setSearchButtonClick] = useState(false);
  const [buttonFilterClick, setButtonFilterClick] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [postData, setPostData] = useState([]);
  const [currentPostData, setCurrentPostData] = useState([]);

  // const [typePostClick, setTypePostClick] = useState({ type: "tất cả" });
  const [typePostClick, setTypePostClick] = useState({ type: "tất cả" });

  const [searchInput, setSearchInput] = useState("");

  const [searchData, setSearchData] = useState();

  const { posts } = useSelector((state) => state.post);
  const { data } = useSelector((state) => state.auth);

  const savedPageKey = `currentPage-${"all"}`;
  const initialPage = parseInt(localStorage.getItem(savedPageKey)) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const pageSize = 2;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(postAction());
  //   console.log("distpatch");
  // }, []);

  // useEffect(() => {
  //   if (!isManagePage) {
  //     const allPosts = Object.values(posts).flat();
  //     const filterCheckPosts = check
  //       ? allPosts.filter((post) => post.check === check)
  //       : allPosts;
  //     if (isExpired) {
  //       const today = new Date();
  //       const date = formatDate(today);
  //       const filterIsExpirePosts = filterCheckPosts.filter((post) =>
  //         moment(date).isSameOrAfter(post.dateExpired)
  //       );

  //       filterIsExpirePosts && setFilteredProducts(filterIsExpirePosts);
  //     } else {
  //       filterCheckPosts && setFilteredProducts(filterCheckPosts);
  //     }
  //     console.log("set lai data ne");
  //   }
  // }, [posts, searchData]);

  useEffect(() => {
    const allPosts = Object.values(posts).flat();
    const filterCheckPosts = check
      ? allPosts.filter((post) => post.check === check)
      : allPosts;
    if (isExpired) {
      const today = new Date();
      const date = formatDate(today);
      const filterIsExpirePosts = filterCheckPosts.filter((post) =>
        moment(date).isSameOrAfter(post.dateExpired)
      );

      filterIsExpirePosts && setFilteredProducts(filterIsExpirePosts);
    } else {
      filterCheckPosts && setFilteredProducts(filterCheckPosts);
    }
    console.log("set lai data ne");
  }, [posts, searchData]);
  console.log("filteredProducts", filteredProducts);
  console.log("typepostClick", typePostClick && `value`);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

  const handleClickFilter = () => {
    setButton(!button);
  };
  useEffect(() => {
    localStorage.setItem(savedPageKey, currentPage);
  }, [currentPage, savedPageKey]);

  // useEffect(() => {
  //   if (typePostClick) {
  //     setCurrentPage(1);
  //     if (typePostClick.type === "chưa được duyệt") {
  //       const postFilter = filteredProducts?.filter(
  //         (post) => post.check === "0"
  //       );
  //       setFilteredProducts(postFilter);
  //     } else if (typePostClick.type === "đã hết hạn") {
  //       const postFilter = filteredProducts?.filter(
  //         (post) => post.check === "3"
  //       );
  //       setFilteredProducts(postFilter);
  //     } else if (typePostClick.type === "đã bị từ chối") {
  //       const postFilter = filteredProducts?.filter(
  //         (post) => post.check === "2"
  //       );
  //       setFilteredProducts(postFilter);
  //     } else if (typePostClick.type === "đang hoạt động") {
  //       const postFilter = filteredProducts?.filter(
  //         (post) => post.check === "1" && post.status === "0"
  //       );
  //       setFilteredProducts(postFilter);
  //     } else if (typePostClick.type === "hết phòng") {
  //       const postFilter = filteredProducts?.filter(
  //         (post) => post.check === "1" && post.status === "1"
  //       );
  //       setFilteredProducts(postFilter);
  //     }
  //   }
  // }, [typePostClick]);

  useEffect(() => {
    if (!isManagePage) {
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
        }
        setPostData(dataPostSearch);
      };
      // searchButtonClick &&
      checkFilter();
    }
  }, [searchData, filteredProducts]);
  console.log("curent", searchButtonClick);

  useEffect(() => {
    if (isManagePage) {
      let data = [];
      if (typePostClick) {
        console.log("typePostClick", typePostClick);
        setCurrentPage(1);
        if (
          typePostClick.type == undefined ||
          typePostClick.type === "tất cả"
        ) {
          data = filteredProducts;
        } else if (typePostClick.type === "chưa được duyệt") {
          const postFilter = filteredProducts?.filter(
            (post) => post.check === "0"
          );
          // setFilteredProducts(postFilter);
          data = postFilter;
        } else if (typePostClick.type === "đã hết hạn") {
          const postFilter = filteredProducts?.filter(
            (post) => post.check === "3"
          );
          data = postFilter;
          // setFilteredProducts(postFilter);
        } else if (typePostClick.type === "đã bị từ chối") {
          const postFilter = filteredProducts?.filter(
            (post) => post.check === "2"
          );
          data = postFilter;
          // setFilteredProducts(postFilter);
        } else if (typePostClick.type === "đang hoạt động") {
          const postFilter = filteredProducts?.filter(
            (post) => post.check === "1" && post.status === "0"
          );
          data = postFilter;
          // setFilteredProducts(postFilter);
        } else if (typePostClick.type === "hết phòng") {
          const postFilter = filteredProducts?.filter(
            (post) => post.check === "1" && post.status === "1"
          );
          data = postFilter;
          // setFilteredProducts(postFilter);
        }
      }
      const checkFilter = () => {
        let dataPostSearch = [];
        if (searchData) {
          setCurrentPage(1);
          //check type- address
          if (searchData.type) {
            const postType = data.filter(
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
              const postAddress = data.filter((post) =>
                post.address.trim().includes(searchData.address.trim())
              );
              dataPostSearch = postAddress;
            } else {
              dataPostSearch = data;
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
          dataPostSearch = data;
        }
        setPostData(dataPostSearch);
      };
      checkFilter();
    }
  }, [searchData, typePostClick, filteredProducts]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    // filteredProducts &&
    //   setCurrentPosts(filteredProducts?.slice(startIndex, endIndex));
    postData && setCurrentPostData(postData?.slice(startIndex, endIndex));
  }, [filteredProducts, currentPage, postData]);

  const handleDeletePost = (product) => {
    const deletePost = async () => {
      try {
        const response = await callApiDeletePost(product.id);
        // window.location.reload();

        if (response.data.fail) {
          message.error(response.data.fail);
        } else {
          message.success(response.data.success);
          dispatch(postAction());
        }
      } catch (error) {
        console.error(error);
        message.error("Xóa bài đăng không thành công");
      }
    };
    deletePost();
  };
  const handleCensorPost = (product) => {
    const censorPost = async () => {
      try {
        const censorData = {
          adminId: stateAuth.data.userId,
          postId: product.id,
          userId: product.userId,
          title: product.title,
          check: "1",
        };

        const response = await callApiCensorPost(censorData);

        // window.location.reload();

        if (response.data.fail) {
          message.error(response.data.fail);
        } else {
          message.success(response.data.success);
          dispatch(postAction());
        }
      } catch (error) {
        console.error(error);
        message.error("Duyệt bài đăng không thành công");
      }
    };
    censorPost();
  };

  const handleDenyPost = (product) => {
    const denyPost = async () => {
      try {
        const censorData = {
          adminId: stateAuth.data.userId,
          postId: product.id,
          userId: product.userId,
          title: product.title,
          check: "2",
        };

        const response = await callApiCensorPost(censorData);
        window.location.reload();

        if (response.data.fail) {
          message.error(response.data.fail);
        } else {
          message.success(response.data.success);
          dispatch(postAction());
        }
      } catch (error) {
        console.error(error);
        message.error("Từ chối bài đăng không thành công");
      }
    };
    denyPost();
  };

  const handleIsExpiredPost = (product) => {
    const censorPost = async () => {
      try {
        const censorData = {
          idPost: product.id,
          userId: product.userId,
          check: "3",
        };

        const response = await callApiCensorPost(censorData);

        // window.location.reload();

        if (response.data.fail) {
          message.error(response.data.fail);
        } else {
          message.success(response.data.success);
          dispatch(postAction());
        }
      } catch (error) {
        console.error(error);
        message.error("Duyệt bài hết hạn không thành công");
      }
    };
    censorPost();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[30px] w-full">
      <div className=" flex xl:flex-row flex-col gap-[2vw] w-full ">
        {/* <div className="xl:hidden flex bg-gray">
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
        </div> */}
        <div className="xl:flex-[80%] flex flex-col gap-[10px] p-[10px] ">
          <div
            class="flex flex-row justify-between border-b
				dark:border-gray-600 dark:text-gray-400 transition duration-500
				ease-in-out"
          >
            <div class="flex">
              <Link
                to={`/system/${path.MANAGE_POST_SYSTEM}`}
                class="py-2 block text-[#374151] border-green-500
						dark:text-green-200 dark:border-green-200
						focus:outline-none border-b-2 font-medium capitalize
						transition duration-500 ease-in-out flex"
              >
                <p className="text-rose-600 pr-[5px]">{posts.length}</p>
                Bài đăng
              </Link>
              <Link
                to={`/system/${path.MANAGE_USER_SYSTEM}`}
                class="ml-6 py-2 block border-b-2 border-transparent
						focus:outline-none font-medium capitalize text-center
						focus:text-green-500 focus:border-green-500
						dark-focus:text-green-200 dark-focus:border-green-200
						transition duration-500 ease-in-out flex"
              >
                <p className="text-rose-600 pr-[5px]">{posts.length}</p>
                Người dùng
              </Link>

              <Link
                to={`/system/${path.MANAGE_USER_SYSTEM}`}
                class="ml-6 py-2 block border-b-2 border-transparent
						focus:outline-none font-medium capitalize text-center
						focus:text-green-500 focus:border-green-500
						dark-focus:text-green-200 dark-focus:border-green-200
						transition duration-500 ease-in-out flex"
              >
                <p className="text-rose-600 pr-[5px]">{posts.length}</p>
                Admin
              </Link>
            </div>

            <div class="flex items-center flex-grow justify-between ml-[20vw] select-none">
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
          <div className="flex items-center justify-between mt-[1vh]">
            <h1 className=" xl:mb-[24px] text-[25px] font-semibold text-rose-500">
              Danh Sách Bài Đăng
            </h1>
            {isManagePage && (
              <div className="w-[180px] flex items-center m-0 justify-center">
                <SelectNewPost
                  placeholder={"Phân loại"}
                  id={"type"}
                  typeRoom={typePost}
                  setFormData={setTypePostClick}
                  style={{ width: "180px", margin: 0 }}
                />
              </div>
            )}
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

          <div className="font-[sans-serif] overflow-x-auto">
            <ul className="flex flex-col gap-[20px]  ">
              {currentPostData?.length > 0
                ? currentPostData.map((product) => {
                    return (
                      <>
                        <div
                          key={product.id}
                          className="flex  gap-[20px] items-center justify-center "
                        >
                          <div className="w-[90%] min-w-[500px]">
                            <CardProduct props={product} isSystem />
                          </div>
                          <div className="w-[10%] flex flex-col gap-[5px] items-center justify-between">
                            {isManagePage && (
                              <Button
                                children={"xóa"}
                                bgColor={"bg-[#DE3E36]"}
                                textColor={"text-white"}
                                borderColor={"border-[#DE3E36]"}
                                onClick={() => handleDeletePost(product)}
                              />
                            )}
                            {check === "0" && (
                              <>
                                <Button
                                  children={"Duyệt"}
                                  bgColor={"bg-[#374151]"}
                                  textColor={"text-white"}
                                  borderColor={"border-white"}
                                  style={"hover:bg-slate-600"}
                                  onClick={() => handleCensorPost(product)}
                                />
                                <Button
                                  children={"Từ chối"}
                                  bgColor={"bg-[#DE3E36]"}
                                  textColor={"text-white"}
                                  borderColor={"border-[#DE3E36]"}
                                  onClick={() => handleDenyPost(product)}
                                />
                              </>
                            )}
                            {isExpired && (
                              <>
                                <Button
                                  children={"Duyệt hết hạn"}
                                  bgColor={"bg-[#374151]"}
                                  textColor={"text-white"}
                                  borderColor={"border-white"}
                                  style={"hover:bg-slate-600"}
                                  onClick={() => handleIsExpiredPost(product)}
                                />
                              </>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })
                : currentPostData?.length === 0 && (
                    <img src={no_data_img}></img>
                  )}
              {/* {!(typePostClick || searchButtonClick) && currentPosts?.length > 0
                ? currentPosts.map((product) => {
                    return (
                      <>
                        <div
                          key={product.id}
                          className="flex  gap-[20px] items-center justify-center "
                        >
                          <div className="w-[90%]">
                            <CardProduct props={product} />
                          </div>
                          <div className="w-[10%] flex flex-col gap-[5px] items-center justify-between">
                            {isManagePage && (
                              <Button
                                children={"xóa"}
                                bgColor={"bg-[#DE3E36]"}
                                textColor={"text-white"}
                                borderColor={"border-[#DE3E36]"}
                                onClick={() => handleDeletePost(product)}
                              />
                            )}
                            {check === "0" && (
                              <>
                                <Button
                                  children={"Duyệt"}
                                  bgColor={"bg-[#374151]"}
                                  textColor={"text-white"}
                                  borderColor={"border-white"}
                                  style={"hover:bg-slate-600"}
                                  onClick={() => handleCensorPost(product)}
                                />
                                <Button
                                  children={"Từ chối"}
                                  bgColor={"bg-[#DE3E36]"}
                                  textColor={"text-white"}
                                  borderColor={"border-[#DE3E36]"}
                                  onClick={() => handleDenyPost(product)}
                                />
                              </>
                            )}
                            {isExpired && (
                              <>
                                <Button
                                  children={"Duyệt hết hạn"}
                                  bgColor={"bg-[#374151]"}
                                  textColor={"text-white"}
                                  borderColor={"border-white"}
                                  style={"hover:bg-slate-600"}
                                  onClick={() => handleIsExpiredPost(product)}
                                />
                              </>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })
                : currentPosts?.length === 0 && <img src={no_data_img}></img>} */}
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

export default Post;
