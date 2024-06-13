import React from "react";
import { CardProduct } from "./index";
import { useDispatch, useSelector } from "react-redux";

const ManagePostUser = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <h1 className="mt-[5vh] text-[30px] font-semibold text-rose-500">
          Tin đã đăng
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
                  placesNearby={product.placesNearby}
                  name={product.name}
                  phone={product.phone}
                  zalo={product.zalo}
                  // src={product.imgSrc}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default ManagePostUser;
