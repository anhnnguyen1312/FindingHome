import React, { useState, useEffect } from "react";
import { CardProduct, Search, Button } from "./index";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Pagination } from "antd";
import no_data_img from "../assets/images/no-data-icon-10.png";

const Product = ({ type, isSystem }) => {
  const [button, setButton] = useState(false);
  const [searchButtonClick, setSearchButtonClick] = useState(false);

  const [postData, setPostData] = useState([]);
  const [searchData, setSearchData] = useState();

  const { posts } = useSelector((state) => state.post);

  const allPosts = Object.values(posts).flat();
  const filteredProducts = type
    ? allPosts.filter((post) => post.typeRoom === type)
    : allPosts;

  const savedPageKey = `currentPage-${type || "all"}`;
  const initialPage = parseInt(localStorage.getItem(savedPageKey)) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const pageSize = 2;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPosts = filteredProducts.slice(startIndex, endIndex);
  const currentpostData = postData.slice(startIndex, endIndex);

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

  const checkPrice = (dataPostSearch) => {
    console.log("dataPostSearch", dataPostSearch);
    let postPrice = [];
    switch (searchData.price) {
      case "DUOI_2TR":
        postPrice = dataPostSearch.filter((post) => post.price <= 2);

        return postPrice;

      case "Tu2TR_4TR":
        postPrice = dataPostSearch.filter(
          (post) => post.price > 2 && post.price <= 4
        );
        return postPrice;

      case "Tu4TR_6TR":
        postPrice = dataPostSearch.filter(
          (post) => post.price > 4 && post.price <= 6
        );
        return postPrice;

      case "Tu6TR_8TR":
        postPrice = dataPostSearch.filter(
          (post) => post.price > 6 && post.price <= 8
        );
        return postPrice;

      case "TREN_8TR":
        postPrice = dataPostSearch.filter(
          (post) => post.price > 8 && post.price < 19.9
        );
        return postPrice;

      case "TREN_20TR":
        postPrice = dataPostSearch.filter((post) => post.price > 20);
        return postPrice;

      default:
        return (postPrice = [123]);
    }
  };
  const checkArea = (dataPostSearch) => {
    let postArea = [];
    switch (searchData.area) {
      case "DUOI_10m2":
        postArea = dataPostSearch.filter((post) => post.area < 10);

        return postArea;

      case "Tu10m2_20m2":
        postArea = dataPostSearch.filter(
          (post) => post.area > 10 && post.area < 20
        );
        return postArea;
      case "Tu20m2_30m2":
        postArea = dataPostSearch.filter(
          (post) => post.area > 20 && post.area < 30
        );
        return postArea;
      case "Tu30m2_40m2":
        postArea = dataPostSearch.filter(
          (post) => post.area > 30 && post.area < 40
        );
        return postArea;
      case "TREN_40m2":
        postArea = dataPostSearch.filter(
          (post) => post.area > 40 && post.area < 79.9
        );
        return postArea;
      case "TREN_80m2":
        postArea = dataPostSearch.filter(
          (post) => post.area > 80 && post.area < 149.9
        );
        return postArea;
      case "TREN_150m2":
        postArea = dataPostSearch.filter((post) => post.area > 150);
        return postArea;
      default:
        return postArea;
    }
  };
  useEffect(() => {
    const checkFilter = () => {
      let dataPostSearch = [];
      if (searchData) {
        //check type- address
        console.log("searchData có", searchData);

        if (searchData.type) {
          console.log("searchData.type true", searchData.type);
          const postType = filteredProducts.filter(
            (post) => post.typeRoom === searchData.type
          );
          console.log("postType", postType);

          dataPostSearch = postType;
          if (searchData.address.trim()) {
            console.log("searchData", searchData);

            const postAddress = dataPostSearch.filter((post) =>
              post.address.trim().includes(searchData.address.trim())
            );
            dataPostSearch = postAddress;
          }
          console.log("dataPostSearch type", dataPostSearch);
        } else {
          if (searchData.address?.trim()) {
            const postAddress = filteredProducts.filter((post) =>
              post.address.trim().includes(searchData.address.trim())
            );
            dataPostSearch = postAddress;
            console.log("dataPostSearch address", dataPostSearch);
          } else {
            dataPostSearch = filteredProducts;
          }
        }
        //check price- area
        if (searchData.price && dataPostSearch) {
          // if (searchData.price === "DUOI_2TR") {
          //   const postPrice = dataPostSearch.filter((post) => post.price < 2);
          //   dataPostSearch = postPrice;
          // }
          console.log("dataPostSearch price", dataPostSearch);

          const dataPrice = checkPrice(dataPostSearch);
          dataPostSearch = dataPrice;
          console.log("dataPostSearch price", dataPostSearch);
          if (searchData.area?.trim() && dataPrice) {
            const dataArea = checkArea(dataPrice);
            dataPostSearch = dataArea;
            console.log("dataPostSearch price area ", dataPostSearch);
          }
        } else {
          if (searchData.area?.trim() && dataPostSearch) {
            const dataArea = checkArea(dataPostSearch);
            console.log("dataArea", dataArea);
            dataPostSearch = dataArea;
            console.log("dataPostSearch dataArea", dataPostSearch);
          } else {
            return dataPostSearch;
          }
        }
        console.log("dataPostSearch", dataPostSearch);

        // setPostData(dataPostSearch);
      }
      return dataPostSearch;
    };
    const data = checkFilter();
    data && setPostData(data);
  }, [searchData]);
  console.log(posts);
  console.log("postData", postData);
  console.log("currentpostData", currentpostData);

  return (
    <div className="flex flex-col items-center justify-center gap-[30px] w-full">
      <div className=" flex lxl:flex-row flex-col gap-[2vw] w-full ">
        <div className="xl:hidden flex bg-gray">
          <div className=" w-full p-[20px] flex flex-col items-center justify-center gap-[20px] ">
            <div className=" flex-col xl:flex-row bg-F8FAFC w-full p-[10px] flex items-center justify-center gap-[10px] ">
              <Search
                type={type}
                setSearchData={setSearchData}
                setSearchButtonClick={setSearchButtonClick}
              />
            </div>
          </div>
        </div>
        <div className="xl:flex-[80%] flex flex-col gap-[10px] p-[5px] ">
          {/* {isSystem ? <div className="xl:flex-[80%] flex flex-col gap-[20px] p-[5px]"> : <div className="lg:flex-[80%] flex flex-col gap-[20px] p-[5px]"> } */}

          <h1 className="mt-[5vh] text-[30px] font-semibold ">
            Danh Sách Bài Đăng{" "}
          </h1>
          <ul className="flex flex-col gap-[20px]  ">
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
                  return (
                    <>
                      {isSystem ? (
                        <>
                          <div
                            key={product.id}
                            className="flex  gap-[20px] items-center justify-center "
                          >
                            <div className="w-[90%]">
                              <CardProduct props={product} />
                            </div>
                            <div className="w-[10%] flex flex-col gap-[5px] items-center justify-between">
                              <Button
                                children={"Chỉnh sửa"}
                                bgColor={"bg-[#6F7B92]"}
                                textColor={"text-white"}
                                borderColor={"border-white"}
                                //  onClick={() => handleUpdatePost(product)}
                              />
                              <Button
                                children={"Đăng lại"}
                                bgColor={"bg-[#2EAFA1]"}
                                textColor={"text-white"}
                                borderColor={"border-white"}
                                //  onClick={() => handleReUpPost(product)}
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <CardProduct key={product.id} props={product} />
                      )}

                      {/* <Popconfirm
                   title="Xóa bài đăng"
                   description="Bạn có chắc chắn muốn xóa bài đăng này"
                   onConfirm={() => confirm(product)}
                   // onCancel={cancel}
                   okText="Xóa"
                   cancelText="Hủy"
                 >
                   <Button
                     children={"xóa"}
                     bgColor={"bg-[#DE3E36]"}
                     textColor={"text-white "}
                     borderColor={"border-[#DE3E36]"}
                     // onClick={() => handleLogInNavigate(true)}
                   />
                 </Popconfirm> */}
                    </>
                  );
                }))}
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
          {/* Button */}
          {/* {isSystem ? <div className="xl:flex-[20%]  xl:flex  flex-col bg-gray hidden">: <div className="bg-gray lg:flex-[20%]  lg:flex  flex-col hidden">} */}

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
