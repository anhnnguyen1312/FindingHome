import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { path } from "../../ultils/path";
import userAvatar from "../../assets/images/userAvatar.jpg";
import { FaTableList } from "react-icons/fa6";
import { Button, CardProduct } from "../../components/index";
import {
  callApiDetailPost,
  callApiRecommendSystem,
} from "../../api/getPostApi";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SlideShow from "../../components/SlideShow";
import VietMap from "../../components/VietMap";
import { message, Collapse, Popconfirm } from "antd";
import { useSelector } from "react-redux";
import { callApiCensorPostAdmin } from "../../api/system/getPostAdminApi";
import { LikeComponent } from "../../components/index";
import no_data_img from "../../assets/images/no-data-icon-10.png";

const DetailProduct = () => {
  const useLocate = useLocation();
  const [detailPost, setDetailPost] = useState([]);
  const [descriptionSplit, setDescriptionSplit] = useState([]);
  const [ruleSplit, setRuleSplit] = useState([]);
  const [places, setPlaces] = useState();
  const [postsRecommend, setPostsRecommend] = useState([]);

  const navigate = useNavigate();
  const stateAuth = useSelector((state) => state.auth);

  const isSystem = useLocate.state?.isSystem;
  const params = useParams();
  const id = params.postId;
  const { homepagePosts } = useSelector((state) => state.post);

  const handleNavigateProfilePublic = (IdUser) => {
    if (useLocate.pathname.includes("system")) {
      navigate(`/system/${path.PROFILE_PUBLIC}/${IdUser}`, {
        state: { isSystem },
      });
    } else {
      navigate(`/${path.PROFILE_PUBLIC}/${IdUser}`);
    }
  };
  useEffect(() => {
    const getApiDetailPost = async () => {
      try {
        const response = await callApiDetailPost(id);
        const decodeToken = jwtDecode(response.data.token);
        setDetailPost(decodeToken);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } catch (error) {
        console.log(error);
      }
    };
    getApiDetailPost();
  }, [id]);

  useEffect(() => {
    const getApiRecommend = async () => {
      try {
        //await callApiRecommend(stateAuth.data.userId);
        let userId = null;

        const response = await callApiRecommendSystem(
          detailPost.id,
          stateAuth.data.userId ? (userId = stateAuth.data.userId) : userId
        );
        const postRecommmend = [
          ...response.data.postId,
          ...response.data.userId,
        ];
        const data = homepagePosts.filter((post) => {
          return postRecommmend.includes(parseInt(post.id));
        });

        setPostsRecommend(data);
      } catch (error) {
        console.log(error);
      }
    };
    detailPost.id && getApiRecommend();
  }, [detailPost]);

  useEffect(() => {
    const splitData = () => {
      detailPost.description &&
        setDescriptionSplit(detailPost?.description.split("\n"));
      detailPost.description && setRuleSplit(detailPost?.rule.split("\n"));
    };
    splitData();
  }, [detailPost]);

  const ruleItem = ruleSplit.map((rule, id) => (
    <div className="whitespace-pre-line" key={id}>
      {rule}{" "}
    </div>
  ));
  const descriptionItem = descriptionSplit.map((description, id) => (
    <div className="whitespace-pre-line" key={id}>
      {description}{" "}
    </div>
  ));

  const handleStatusTag = (check) => {
    if (check) {
      switch (check) {
        case "1":
          return (
            <span className="bg-[#9bfaa3] border text-black px-2 py-1 m-2 rounded-md text-md font-medium">
              Đang hoạt động
            </span>
          );
        case "0":
          return (
            <span className="bg-[#fcf683] border border text-black px-2 py-1 m-2 rounded-md text-md font-medium">
              Chưa được duyệt
            </span>
          );
        case "2":
          return (
            <span className="bg-[#f78888] border text-black px-2 py-1 m-2 rounded-md text-md font-medium">
              Từ chối
            </span>
          );
        case "3":
          return (
            <span className="bg-[#b9bfc9] border text-black px-2 py-1 m-2 rounded-md text-md font-medium">
              Hết hạn
            </span>
          );
        default:
          return null;
      }
    }
  };
  const handleCensorPost = (detailPost) => {
    const censorPost = async () => {
      try {
        const censorData = {
          adminId: stateAuth.data.userId,
          postId: detailPost.id,
          userId: detailPost.userId,
          title: detailPost.title,
          check: "1",
        };

        const response = await callApiCensorPostAdmin(censorData);

        if (response.data.fail) {
          message.error(response.data.fail);
        } else {
          message
            .success(response.data.success)
            .then(() => window.location.reload());
        }
      } catch (error) {
        console.error(error);
        message.error("Duyệt bài đăng không thành công");
      }
    };
    censorPost();
  };
  const handleDenyPost = (detailPost) => {
    const denyPost = async () => {
      try {
        const censorData = {
          adminId: stateAuth.data.userId,
          postId: detailPost.id,
          userId: detailPost.userId,
          title: detailPost.title,
          check: "2",
        };

        const response = await callApiCensorPostAdmin(censorData);
        window.location.reload();

        if (response.data.fail) {
          message.error(response.data.fail);
        } else {
          message
            .success(response.data.success)
            .then(() => window.location.reload());
        }
      } catch (error) {
        console.error(error);
        message.error("Từ chối bài đăng không thành công");
      }
    };
    denyPost();
  };
  console.log("detailPost", detailPost);
  return (
    <>
      <div className="w-full ">
        <div className="border-b-4 border-rose-500">
          {detailPost.urlImages?.length > 1 && (
            <SlideShow images={detailPost.urlImages} />
          )}
          {detailPost.urlImages?.length == 1 && (
            <div className="flex h-[70vh]">
              <img
                src={detailPost.urlImages[0]}
                alt="ảnh mặt bằng"
                className="w-full h-auto h-full object-cover"
              />
            </div>
          )}
        </div>
        {/* thong tin ve phonng */}
        <div className="px-[20px] relative ">
          <div className="max-w-full mr-[14px]">
            <div className="-mt-4 mb-10 h-8  flex gap-1 items-center relative border-b-4 border-transparent">
              <div className="flex-shrink-0 relative flex justify-center items-center self-stretch ">
                <div className="absolute inset-0 text-teal">
                  <i className="fa-solid fa-badge-check"></i>
                </div>
              </div>
              <div
                onClick={() => handleNavigateProfilePublic(detailPost.userId)}
                className="flex flex-col gap-[10px] cursor-pointer ml-auto "
              >
                <div className="hidden sm:flex border-4 bg-gray-200 border-gray-50 rounded-full h-24 w-24">
                  <img
                    alt=""
                    className="block rounded-full"
                    src={detailPost.avatar || userAvatar}
                  />
                </div>
                <div className="text-center flex items-center justify-center ">
                  <b>{detailPost.username}</b>
                </div>
              </div>
            </div>
          </div>
          {/* thong tin nguoi dang */}
          <div className="mb-4 flex sm:flex-row flex-col-reverse justify-end">
            {stateAuth.data.role === "1" ||
            detailPost.userId === stateAuth.data.userId ? (
              <>
                <div className="flex flex-row gap-[10px] justify-center absolute top-[38px] left-[20px] ">
                  {handleStatusTag(detailPost.check)}
                  {detailPost.check === "0" && (
                    <div className="flex flex-row gap-[20px] justify-center ">
                      <Button
                        icon={"fa-solid fa-check"}
                        bgColor={"bg-[#374151]"}
                        textColor={"text-white"}
                        borderColor={"border-white"}
                        width={"w-10"}
                        height={"h-10"}
                        title={"Duyệt"}
                        onClick={() => handleCensorPost(detailPost)}
                      />
                      <Popconfirm
                        title="Từ chối duyệt bài đăng"
                        description="Bạn có chắc chắn muốn từ chối bài đăng này"
                        onConfirm={() => handleDenyPost(detailPost)}
                        okText="Từ chối"
                        cancelText="Hủy"
                      >
                        <Button
                          icon={"fa-solid fa-trash-can"}
                          bgColor={"bg-[#DE3E36]"}
                          textColor={"text-white"}
                          borderColor={"border-[#DE3E36]"}
                          width={"w-10"}
                          height={"h-10"}
                          title={"Từ chối Duyệt"}
                        />
                      </Popconfirm>
                    </div>
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="mb-8 ">
            <div className="mb-6 md:mb-0 flex flex-col gap-[20px]">
              <div className="flex flex-row items-center gap-[20px]">
                <h1 className="text-red-600 text-medium mt-[5px]">
                  {detailPost.title}
                </h1>
                <h1 className=" text-gray-700 text-center mt-[5px]">
                  ({detailPost.likes} lượt thích)
                </h1>
                <LikeComponent postId={detailPost.id} />
              </div>
              <h1 className="  flex gap-[10px]">
                <div className="text-[#4ca976]">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                {detailPost.address}
              </h1>
              <div className="flex justify-between gap-10">
                <h1 className="flex gap-[10px] text-red-600 font-bold text-xl items-center">
                  {detailPost.price + " triệu/ Tháng"}
                </h1>
                {detailPost.status == 0 ? (
                  <h1 className="items-center flex gap-[10px]">
                    {"Tình trạng: còn trống"}
                  </h1>
                ) : (
                  <h1 className="items-center flex gap-[10px]">
                    {"Tình trạng: đã hết"}
                  </h1>
                )}
                <h1 className="items-center flex gap-[10px]">
                  {"Ngày đăng: " + detailPost.dateCreateAt}
                </h1>
              </div>
            </div>
          </div>
          {/* //table */}
          <div className="mb-8">
            <div className="bg-white py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700">Diện tích</div>
                {detailPost.area} m&#178;
              </div>
            </div>
            <div className="bg-inherit py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700">chi phí khác</div>
                {detailPost.otherFee}
              </div>
            </div>
            <div className="bg-white py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700">Nội thất trong phòng</div>
                {detailPost.furniture}
              </div>
            </div>
            <div className="bg-inherit py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700">tiện ích gần đây </div>
                {detailPost.nearby}
              </div>
            </div>
          </div>
          {/* tag */}
          <div className="mb-16 ">
            <div className="  border border-[#1E95A6] bg-white text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className=" flex gap-[10px] items-center">
                <div>
                  <i className="fa-solid fa-motorcycle"></i>
                </div>
                bãi đậu xe
              </div>
            </div>

            <div className="bg-white border border-[#1E95A6] mx-[10px] text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className="flex gap-[10px] items-center">
                <div>
                  <i className="fa-solid fa-wifi"></i>
                </div>
                wifi
              </div>
            </div>
            <div className="bg-white border border-[#1E95A6]  mx-[10px] text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className="flex gap-[10px] items-center">
                <div>
                  <i className="fa-solid fa-cat"></i>{" "}
                </div>
                thú cưng
              </div>
            </div>
            <div className="bg-white border border-[#1E95A6] mx-[10px] text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className="flex gap-[10px] items-center">
                <div className="">
                  <i className="fa-solid fa-child-reaching"></i>
                </div>
                trẻ em
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[10px] text-red-600 font-bold text-2xl items-center">
              <FaTableList /> <h1 className="">Mô tả và Quy Định</h1>
            </div>
            <h1 className="text-blue-600 font-bold  text-lg">Mô tả </h1>
            <div className=" whitespace-pre-line">{descriptionItem} </div>
            <h1 className="text-red-500 font-semibold text-lg whitespace-pre-line ">
              Quy Định{" "}
            </h1>
            <div className=" whitespace-pre-line">{ruleItem} </div>

            <div className=""></div>
          </div>
          <div className="mb-16">
            <div className=" mb-[20px] flex gap-[10px] text-red-600 font-bold text-2xl items-center">
              <i className="fa-regular fa-address-card"></i>{" "}
              <h1 className="">Thông Tin Liên Hệ</h1>
            </div>

            <div className="bg-inherit py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700 flex ">
                  {" "}
                  <div className="px-[10px] text-[#1E95A6]">
                    <i className="fa-solid fa-phone"></i>
                  </div>{" "}
                  Số điện thoại
                </div>
                {detailPost.phone}
              </div>
            </div>
            <div className="bg-white py-2">
              <div className="container grid grid-cols-2">
                <div className="text-gray-700 flex">
                  {" "}
                  <div className="px-[10px] text-[#1E95A6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#2962ff"
                        d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"
                      ></path>
                      <path
                        fill="#eee"
                        d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"
                      ></path>
                    </svg>
                  </div>
                  Zalo
                </div>
                {detailPost.zalo}
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[20px] mb-[10px]">
              <div className="text-[#F2545B] ">
                <i className="fa-solid fa fa-map-marker"></i>
              </div>
              <div className=" text-xl font-medium">{detailPost.address}</div>
            </div>
            <p className="mb-[20px]"> {detailPost.nearby}</p>
            <div className="flex gap-[20px] mb-[10px]">
              <div className="text-[#F2545B] ">
                <i className="fa-solid fa fa-map-marker"></i>
              </div>
              <div className=" text-xl font-medium">Những tiện ích gần đây</div>
            </div>
            {places && (
              <>
                <Collapse
                  className="text-[18px] bg-white text-rose-600 text-bold"
                  collapsible="header"
                  bordered={false}
                  defaultActiveKey={["1"]}
                  items={[
                    {
                      key: "1",
                      label: "Bệnh viện",
                      children: (
                        <div>
                          {" "}
                          {places?.hospital?.map((place, index) => (
                            <div
                              key={index}
                              className="flex text-[16px] justify-between p-[5px]"
                            >
                              <p title={place.display}>
                                {place.display.substr(0, 90) + "..."}
                              </p>
                              <p className="text-rose-600">
                                {place.distance.toFixed(2)} km
                              </p>
                            </div>
                          ))}{" "}
                        </div>
                      ),
                    },
                  ]}
                />
                <Collapse
                  className="text-[18px] bg-white "
                  collapsible="header"
                  bordered={false}
                  defaultActiveKey={["1"]}
                  items={[
                    {
                      key: "2",
                      label: "Trung tâm thương mại/ Siêu thị/ Chợ",
                      children: (
                        <div>
                          {" "}
                          {places?.plaza?.map((place, index) => (
                            <div
                              key={index}
                              className="flex  text-[16px]  justify-between p-[5px]"
                            >
                              <p>{place.display.substr(0, 80) + "..."}</p>
                              <p className="text-rose-600">
                                {place.distance.toFixed(2)} km
                              </p>
                            </div>
                          ))}{" "}
                        </div>
                      ),
                    },
                  ]}
                />{" "}
                <Collapse
                  className="text-[18px] bg-white "
                  collapsible="header"
                  bordered={false}
                  defaultActiveKey={["2"]}
                  items={[
                    {
                      key: "3",
                      label: "Đại học/Cao đẳng",
                      children: (
                        <div>
                          {" "}
                          {places?.university?.map((place, index) => (
                            <div
                              key={index}
                              className="flex  text-[16px] justify-between p-[5px]"
                            >
                              <p>{place.display.substr(0, 80) + "..."}</p>
                              <p className="text-rose-600">
                                {place.distance.toFixed(2)} km
                              </p>
                            </div>
                          ))}{" "}
                        </div>
                      ),
                    },
                  ]}
                />{" "}
                <Collapse
                  className="text-[18px] bg-white "
                  collapsible="header"
                  bordered={false}
                  defaultActiveKey={["1"]}
                  items={[
                    {
                      key: "4",
                      label: "Trường học",
                      children: (
                        <div>
                          {" "}
                          {places?.school?.map((place, index) => (
                            <div
                              key={index}
                              className="flex  text-[16px]  justify-between p-[5px]"
                            >
                              <p>{place.display.substr(0, 80) + "..."}</p>
                              <p className="text-rose-600">
                                {place.distance.toFixed(2)} km
                              </p>
                            </div>
                          ))}{" "}
                        </div>
                      ),
                    },
                  ]}
                />{" "}
                <Collapse
                  className="text-[18px] bg-white "
                  collapsible="header"
                  bordered={false}
                  defaultActiveKey={["1"]}
                  items={[
                    {
                      key: "5",
                      label: "Cơ quan chính quyền",
                      children: (
                        <div>
                          {" "}
                          {places?.commitee?.map((place, index) => (
                            <div
                              key={index}
                              className="flex  text-[16px]  justify-between p-[5px]"
                            >
                              <p>{place.display.substr(0, 80) + "..."}</p>
                              <p className="text-rose-600">
                                {place.distance.toFixed(2)} km
                              </p>
                            </div>
                          ))}{" "}
                        </div>
                      ),
                    },
                  ]}
                />{" "}
                <Collapse
                  className="text-[18px] bg-white "
                  collapsible="header"
                  bordered={false}
                  defaultActiveKey={["1"]}
                  items={[
                    {
                      key: "6",
                      label: "phương tiện công cộng",
                      children: (
                        <div>
                          {" "}
                          {places?.public_transport?.map((place, index) => (
                            <div
                              key={index}
                              className="flex  text-[16px]  justify-between p-[5px]"
                            >
                              <p>{place.display.substr(0, 80) + "..."}</p>
                              <p className="text-rose-600">
                                {place.distance.toFixed(2)} km
                              </p>
                            </div>
                          ))}{" "}
                        </div>
                      ),
                    },
                  ]}
                />{" "}
                <Collapse
                  className="text-[18px] bg-white "
                  collapsible="header"
                  bordered={false}
                  defaultActiveKey={["1"]}
                  items={[
                    {
                      key: "7",
                      label: "Bãi đậu xe - Trạm sạc điện",
                      children: (
                        <div>
                          {" "}
                          {places?.parking?.map((place, index) => (
                            <div
                              key={index}
                              className="flex  text-[16px]  justify-between p-[5px]"
                            >
                              <p>{place.display.substr(0, 80) + "..."}</p>
                              <p className="text-rose-600">
                                {place.distance.toFixed(2)} km
                              </p>
                            </div>
                          ))}{" "}
                        </div>
                      ),
                    },
                  ]}
                />{" "}
              </>
            )}

            <div className="w-full h-[60%vh]  mb-[30px]">
              <VietMap
                lat={detailPost.lat}
                lng={detailPost.lng}
                address={detailPost.address}
                setPlaces={setPlaces}
              />
            </div>
            <div className="m-4 flex flex-col">
              <div className=" mb-[10px] flex gap-[10px] text-red-600 font-semibold text-xl items-center">
                <i className="fa-regular fa-address-card"></i>{" "}
                <h1 className="">Gợi ý</h1>
              </div>
              <ul className="flex flex-col gap-[20px]  ">
                {postsRecommend?.length > 0
                  ? postsRecommend.map((product) => {
                      return <CardProduct key={product.id} props={product} />;
                    })
                  : postsRecommend?.length === 0 && (
                      <img alt="" src={no_data_img}></img>
                    )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
