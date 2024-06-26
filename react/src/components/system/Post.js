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
const Post = ({ isManagePage, check, isExpired }) => {
  const [button, setButton] = useState(false);
  const [searchButtonClick, setSearchButtonClick] = useState(false);
  const [buttonFilterClick, setButtonFilterClick] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [currentpostData, setCurrentpostData] = useState([]);
  const [typePostClick, setTypePostClick] = useState({ type: "tất cả" });

  const [searchData, setSearchData] = useState();

  const { posts } = useSelector((state) => state.post);
  const savedPageKey = `currentPage-${"all"}`;
  const initialPage = parseInt(localStorage.getItem(savedPageKey)) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const pageSize = 2;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(postAction());
  //   console.log("distpatch");
  // }, []);

  useEffect(() => {
    const allPosts = Object.values(posts).flat();
    const filterCheckPosts = check
      ? allPosts.filter((post) => post.check === check)
      : allPosts;
    if (isExpired) {
      const today = new Date();
      const date = formatDate(today);
      console.log(date);

      const filterIsExpirePosts = filterCheckPosts.filter((post) =>
        moment(date).isSameOrAfter(post.dateExpired)
      );

      console.log("filterIsExpirePosts", filterIsExpirePosts);
      filterIsExpirePosts && setFilteredProducts(filterIsExpirePosts);
    } else {
      filterCheckPosts && setFilteredProducts(filterCheckPosts);
    }
  }, [posts]);

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
    if (typePostClick) {
      setCurrentPage(1);
      if (typePostClick.type === "chưa được duyệt") {
        const postFilter = filteredProducts?.filter(
          (post) => post.check === "0"
        );
        setFilteredProducts(postFilter);
      } else if (typePostClick.type === "đã hết hạn") {
        const postFilter = filteredProducts?.filter(
          (post) => post.check === "3"
        );
        setFilteredProducts(postFilter);
      } else if (typePostClick.type === "đã bị từ chối") {
        const postFilter = filteredProducts?.filter(
          (post) => post.check === "2"
        );
        setFilteredProducts(postFilter);
      } else if (typePostClick.type === "đang hoạt động") {
        const postFilter = filteredProducts?.filter(
          (post) => post.check === "1" && post.status === "0"
        );
        setFilteredProducts(postFilter);
      } else if (typePostClick.type === "hết phòng") {
        const postFilter = filteredProducts?.filter(
          (post) => post.check === "1" && post.status === "1"
        );
        setFilteredProducts(postFilter);
      }
    }
  }, [typePostClick]);

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
      setFilteredProducts(dataPostSearch);
    };
    searchButtonClick && checkFilter();
  }, [searchData]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    filteredProducts &&
      setCurrentPosts(filteredProducts?.slice(startIndex, endIndex));
  }, [filteredProducts, currentPage]);

  const handleDeletePost = (product) => {
    const deletePost = async () => {
      try {
        const response = await callApiDeletePost(product.id);
        console.log("response", response);
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
          postId: product.id,
          userId: product.userId,
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
          postId: product.id,
          userId: product.userId,
          check: "2",
        };

        const response = await callApiCensorPost(censorData);
        // console.log("response", response);
        // window.location.reload();

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
        console.log("product.id", product.id);
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

  console.log("currentpostData", currentpostData);
  console.log("currentPosts", currentPosts);
  console.log("filteredProducts", filteredProducts);
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
          <ul className="flex flex-col gap-[20px] group  ">
            {currentPosts?.length > 0 &&
              currentPosts.map((product) => {
                return (
                  <>
                    <div
                      key={product.id}
                      className="flex  gap-[20px] items-center justify-center "
                    >
                      <div className="w-[90%]">
                        <CardProduct props={product} />
                      </div>
                      <div className="w-[10%] flex flex-col gap-[20px] items-center justify-between hidden group-hover:flex">
                        {isManagePage && (
                          <Popconfirm
                            title="Xóa bài đăng"
                            description="Bạn có chắc chắn muốn xóa bài đăng này"
                            onConfirm={() => handleDeletePost(product)}
                            okText="Xóa"
                            cancelText="Hủy"
                          >
                            <Button
                              icon={"fa-solid fa-trash-can"}
                              style={"hover:bg-[#eb4d4d]"}
                              bgColor={"bg-[#DE3E36]"}
                              textColor={"text-white"}
                              borderColor={"border-[#DE3E36]"}
                              width={"w-12"}
                              height={"h-12"}
                              fullRounded={"rounded-full"}
                              title={"xóa"}
                            />
                          </Popconfirm>
                        )}
                        {check === "0" && (
                          <>
                            <Button
                              icon={"fa-solid fa-check"}
                              width={"w-12"}
                              height={"h-12"}
                              fullRounded={"rounded-full"}
                              title={"Duyệt"}
                              bgColor={"bg-[#4ecc5a]"}
                              style={"hover:bg-[#8bf794]"}
                              textColor={"text-white"}
                              borderColor={"border-white"}
                              onClick={() => handleCensorPost(product)}
                            />
                            <Button
                              icon={"fa-solid fa-ban"}
                              width={"w-12"}
                              height={"h-12"}
                              fullRounded={"rounded-full"}
                              title={"Từ chối"}
                              bgColor={"bg-[#de2828]"}
                              style={"hover:bg-[#eb4d4d]"}
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
              })}
            {currentPosts?.length === 0 && <img src={no_data_img}></img>}
          </ul>
          <div className="flex items-center justify-center">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={
                searchButtonClick ? postData.length : filteredProducts.length
              }
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
