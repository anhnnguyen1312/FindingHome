import React, { useState, useEffect } from "react";
import ProductData from "../data/ProductData";
// import { callApiPost } from "../api/getPostApi";
import { Search, CardProduct, Button } from "./index";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { postAction, postActionDemo } from "../redux/store/action/postAction";
import { Pagination } from "antd";
import no_data_img from "../assets/images/no-data-icon-10.png";
const Product = ({ posts, isHomePage }) => {
  const ch2 = "../assets/images/canho/ch1.jpg";

  const [button, setButton] = useState(false);
  const [searchButtonClick, setSearchButtonClick] = useState(false);

  const [postData, setPostData] = useState([]);
  const [searchData, setSearchData] = useState();

  const dispatch = useDispatch();
  // const { posts } = useSelector((state) => state.post);
  const handleClickFilter = () => {
    setButton(!button);
  };
  console.log("isHomePage", isHomePage);

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
          const postType = posts.filter(
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
            const postAddress = posts.filter((post) =>
              post.address.trim().includes(searchData.address.trim())
            );
            dataPostSearch = postAddress;
            console.log("dataPostSearch address", dataPostSearch);
          } else {
            dataPostSearch = posts;
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
    console.log("postData", postData);
  }, [searchData]);
  console.log("postData", postData);
  return (
    <div className="flex flex-col items-center justify-center gap-[30px]">
      <div className=" flex lg:flex-row flex-col gap-[2vw] w-full ">
        <div className="lg:hidden flex bg-gray">
          <div className=" w-full p-[20px] flex flex-col items-center justify-center gap-[20px] ">
            <div className=" flex-col lg:flex-row bg-F8FAFC w-full p-[10px] flex items-center justify-center gap-[10px] ">
              <Search
                isHomePage
                setSearchData={setSearchData}
                setSearchButtonClick={setSearchButtonClick}
              />
            </div>
          </div>
        </div>
        <div className="lg:flex-[80%] flex flex-col gap-[20px] p-[5px] ">
          <h1 className="mt-[5vh] text-[30px] font-semibold ">
            Phòng Đang Cho Thuê{" "}
          </h1>
          <ul className="flex flex-col gap-[20px]  ">
            {searchButtonClick &&
              postData?.length > 0 &&
              postData.map((product) => {
                return <CardProduct props={product} />;
              })}
            {searchButtonClick && postData?.length === 0 && (
              <img src={no_data_img}></img>
            )}
            {searchButtonClick ||
              (posts?.length > 0 &&
                posts.map((product) => {
                  return <CardProduct props={product} />;
                }))}
          </ul>
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
                <Search
                  isHomePage
                  setSearchData={setSearchData}
                  setSearchButtonClick={setSearchButtonClick}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Pagination defaultCurrent={1} total={posts?.length} />
    </div>
  );
};

export default Product;
