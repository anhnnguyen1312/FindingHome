import React, { useState, useEffect } from "react";
import ProductData from "../data/ProductData";
// import { callApiPost } from "../api/getPostApi";
import { Search, CardProduct, Button } from "./index";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../redux/store/action/postAction";
const Product = (props) => {
  const ch2 = "../assets/images/canho/ch1.jpg";

  const [button, setButton] = useState(false);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const handleClickFilter = () => {
    setButton(!button);
  };
  useEffect(() => {
    dispatch(postAction());
  }, []);
  console.log("posts", posts);
  return (
    <div className="">
      <div className=" flex lg:flex-row flex-col gap-[2vw]   ">
        <div className="lg:hidden flex bg-gray">
          <div className=" w-full p-[20px] flex flex-col items-center justify-center gap-[20px] ">
            <div className=" flex-col md:flex-row bg-F8FAFC w-full p-[10px] flex items-center justify-center gap-[10px] ">
              <Search />
            </div>
          </div>``
        </div>
        <div className="lg:flex-[80%] flex flex-col gap-[20px] p-[5px] ">
          <h1 className="mt-[5vh] text-[30px] font-semibold ">
            Phòng Đang Cho Thuê{" "}
          </h1>
          <ul className="flex flex-col gap-[20px]  ">
            {posts?.length > 0 &&
              posts.map((product) => {
                return (
                  <CardProduct
                    key={product.id}
                    address={product.address}
                    price={product.price}
                    area={product.area}
                    status={product.status}
                    description={product.description}
                    nearby={product.nearby}
                    username={product.username}
                    phone={product.phone}
                    zalo={product.zalo}
                    title={product.title}
                    id={product.id}
                    urlImages={product.urlImages}
                  />
                );
              })}
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
