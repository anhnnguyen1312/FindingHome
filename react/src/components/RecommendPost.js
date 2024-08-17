import React, { useEffect, useState } from "react";
import { callApiRecommend } from "../api/getRecommendation";
import { useSelector } from "react-redux";
import { CardProduct } from "./index";
const RecommendPost = () => {
  const [postsRecommend, setPostsRecommend] = useState([]);
  const { homepagePosts } = useSelector((state) => state.post);

  const stateAuth = useSelector((state) => state.auth);

  useEffect(() => {
    const getApiRecommend = async () => {
      try {
        const response = await callApiRecommend(stateAuth.data.userId);

        const data = homepagePosts.filter((post) => {
          return response.data.postIds.includes(parseInt(post.id));
        });
        console.log("homepagePosts", homepagePosts);
        console.log("data", data);

        setPostsRecommend(data);
      } catch (error) {
        console.log(error);
      }
    };
    stateAuth.data.userId && getApiRecommend();
  }, [stateAuth, homepagePosts]);
  return (
    <div className="flex flex-col items-center justify-center gap-[30px] w-full">
      <div className=" flex xl:flex-row flex-col gap-[2vw] w-full ">
        <div className="xl:flex-[80%] flex flex-col gap-[10px] p-[5px] ">
          <div className="flex items-center justify-between mt-[5vh]">
            <h1 className="xl:mb-[24px] text-[30px] font-semibold text-rose-500">
              Có thể bạn sẽ thích
            </h1>
          </div>

          <ul className="flex flex-col gap-[20px]  ">
            {postsRecommend?.length > 0
              ? postsRecommend.map((product) => {
                  return <CardProduct key={product.id} props={product} />;
                })
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecommendPost;
