import React, { useEffect, useState } from "react";
import { Button, CardProduct, Loading } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { SelectNewPost, UpdatePost, ReUpPost } from "./index";
import typePost from "../data/typePost";
import { message, Popconfirm } from "antd";
import { callApiDeletePost } from "../api/getPostApi";

import { UpdatePostAction } from "../redux/store/action/postAction";
const ManagePostUser = () => {
  const [typePostClick, setTypePostClick] = useState({
    type: "",
  });
  const [updatePostClick, setUpdatePostClick] = useState(false);
  const [updatePostData, setUpdatePostData] = useState({});
  const [reUpPostClick, setReUpPostClick] = useState(false);

  const [ReUpPostData, setReUpPostData] = useState({});
  const [postDataFilter, setPostDataFilter] = useState([]);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const handleLogInNavigate = () => {};
  const handleUpdatePost = (data) => {
    setUpdatePostClick(true);

    setUpdatePostData(data);
    // dispatch(UpdatePostAction(data));
  };

  const handleReUpPost = (product) => {
    setReUpPostClick(true);

    setReUpPostData(product);
    // dispatch(UpdatePostAction(data));
  };
  const confirm = (product) => {
    setLoading(true);
    const deletePost = async () => {
      try {
        const response = await callApiDeletePost(product.id);
        if (response.data.msg) {
          swal({
            text: "Xóa bài đăng không thành công",
            icon: "error",
            timer: 2000,
          });
        } else {
          swal({
            text: "Xóa bài đăng thành công",
            icon: "success",
            timer: 2000,
          });
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        swal({
          text: "Xóa bài đăng không thành công",
          icon: "error",
          timer: 2000,
        });
      }
    };
    deletePost();
    setLoading(false);
    // message.success("Xóa thành công");
  };
  const cancel = (e) => {
    message.error("Xóa không thành công");
  };

  const handleStatusTag = (status, check) => {
    if (status && check) {
      if (status === "0" && check === "1") {
        return (
          <div>
            <i class="fa-solid fa-circle-check text-green-500  mr-2"></i>
            Đang hoạt động
          </div>
        );
      }
      if (check === "0") {
        return (
          <div>
            <i class="fa-solid fa-stopwatch text-blue-500  mr-2 "></i>
            Chưa được duyệt
          </div>
        );
      }
      if (check === "2") {
        return (
          <div>
            <i class="fa-solid fa-x text-red-500  mr-2"></i>
            Từ chối
          </div>
        );
      }
      if (check === "3") {
        return (
          <div>
            <i class="fa-solid fa-circle-xmark text-red-500  mr-2"></i>
            Hết hạn
          </div>
        );
      }
      if (check === "1" && status === "1") {
        return (
          <div>
            <i class="fa-solid fa-circle-xmark text-red-500  mr-2"></i>
            Hết phòng
          </div>
        );
      }
    }
  };
  console.log("postDataFilter", postDataFilter);
  useEffect(() => {
    if (typePostClick) {
      if (typePostClick.type === "Tất cả") {
        setPostDataFilter(posts);
      } else if (typePostClick.type === "chưa được duyệt") {
        const postFilter = posts.filter((post) => post.check === "0");
        setPostDataFilter(postFilter);
      } else if (typePostClick.type === "đã hết hạn") {
        const postFilter = posts.filter((post) => post.check === "3");
        setPostDataFilter(postFilter);
      } else if (typePostClick.type === "đã bị từ chối") {
        const postFilter = posts.filter((post) => post.check === "2");
        setPostDataFilter(postFilter);
      } else if (typePostClick.type === "đã đăng thành công") {
        const postFilter = posts.filter(
          (post) => post.check === "1" && post.status === "0"
        );
        setPostDataFilter(postFilter);
      } else {
        console.log("none type");
        setPostDataFilter(posts);
      }
    }
  }, [typePostClick]);

  useEffect(() => {
    if (!typePostClick) {
      setPostDataFilter(posts);
    }
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="flex flex-col gap-[20px] m-[10px]">
        <div className="flex items-center justify-between mt-[5vh]">
          <h1 className=" mb-[24px] text-[30px] font-semibold text-rose-500">
            Tin đã đăng
          </h1>
          <div className="w-[180px] flex items-center m-0 justify-center">
            <SelectNewPost
              placeholder={"Phân loại"}
              id={"type"}
              typeRoom={typePost}
              setFormData={setTypePostClick}
              style={{ width: "180px", margin: 0 }}
            />
          </div>
        </div>

        <ul className="flex flex-col gap-[20px]  ">
          {postDataFilter?.length > 0 &&
            postDataFilter.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex  gap-[20px] items-center justify-center "
                >
                  <div className="w-[80%]">
                    <div className="relative">
                      <CardProduct props={product} />
                      <div class="absolute top-0 left-0 bg-white border border-[#329D67]  text-black px-2 py-1 m-2 rounded-md text-sm font-medium">
                        {handleStatusTag(product.status, product.check)}
                      </div>
                    </div>
                  </div>
                  <div className="w-[20%] flex flex-col gap-[20px] items-center justify-between">
                    <Button
                      children={"Chỉnh sửa"}
                      bgColor={"bg-[#6F7B92]"}
                      textColor={"text-white"}
                      borderColor={"border-white"}
                      onClick={() => handleUpdatePost(product)}
                    />
                    <Button
                      children={"Đăng lại"}
                      bgColor={"bg-[#2EAFA1]"}
                      textColor={"text-white"}
                      borderColor={"border-white"}
                      onClick={() => handleReUpPost(product)}
                    />

                    <Popconfirm
                      title="Xóa bài đăng"
                      description="Bạn có chắc chắn muốn xóa bài đăng này"
                      onConfirm={() => confirm(product)}
                      onCancel={cancel}
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
                    </Popconfirm>
                  </div>
                </div>
              );
            })}
        </ul>
        {updatePostClick && (
          <UpdatePost
            updatePostData={updatePostData}
            setUpdatePostClick={setUpdatePostClick}
          />
        )}
        {reUpPostClick && (
          <ReUpPost
            ReUpPostData={ReUpPostData}
            setReUpPostClick={setReUpPostClick}
          />
        )}
      </div>
    </>
  );
};

export default ManagePostUser;
