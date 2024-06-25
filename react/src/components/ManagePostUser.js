  import React, { useEffect, useState } from "react";
  import { Button, CardProduct, Loading } from "./index";
  import { useDispatch, useSelector } from "react-redux";
  import { SelectNewPost, UpdatePost } from "./index";
  import typePost from "../data/typePost";
  import { message, Popconfirm, Pagination } from "antd";
  import { callApiDeletePost } from "../api/getPostApi";
  import { UpdatePostAction } from "../redux/store/action/postAction";

  const ManagePostUser = ({ userId }) => {
    const [typePostClick, setTypePostClick] = useState({ type: "tất cả" });
    const [updatePostClick, setUpdatePostClick] = useState(false);
    const [updatePostData, setUpdatePostData] = useState({});
    const [postDataFilter, setPostDataFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const { posts } = useSelector((state) => state.post);
    const allPosts = Object.values(posts).flat();
    const filteredProducts = userId
      ? allPosts.filter((post) => post.userId === userId)
      : [];   
    console.log("filter", filteredProducts)

    const initialPage = parseInt(localStorage.getItem('currentPage')) || 1;
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [currentPosts, setCurrentPosts] = useState([]);
    const pageSize = 2;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    useEffect(() => {
      localStorage.setItem('currentPage', currentPage);
    }, [currentPage]);

    useEffect(() => {
      if (typePostClick) {
        if (typePostClick.type === "tất cả") {
          setPostDataFilter(filteredProducts);
        } else if (typePostClick.type === "chưa được duyệt") {
          const postFilter = filteredProducts.filter((post) => post.check === "0");
          setPostDataFilter(postFilter);
        } else if (typePostClick.type === "đã hết hạn") {
          const postFilter = filteredProducts.filter((post) => post.check === "3");
          setPostDataFilter(postFilter);
        } else if (typePostClick.type === "đã bị từ chối") {
          const postFilter = filteredProducts.filter((post) => post.check === "2");
          setPostDataFilter(postFilter);
        } else if (typePostClick.type === "đã đăng thành công") {
          const postFilter = filteredProducts.filter((post) => post.check === "1");
          setPostDataFilter(postFilter);
        }
      }
    }, [typePostClick], [filteredProducts]);

    console.log("type", typePostClick)
    console.log("data", postDataFilter)
    console.log("currentPost", currentPosts)

    useEffect(() => {
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      setCurrentPosts(postDataFilter.slice(startIndex, endIndex));
    }, [postDataFilter]);

    const handleUpdatePost = (data) => {
      setUpdatePostClick(true);
      setUpdatePostData(data);
    };

    const confirm = (product) => {
      setLoading(true);
      const deletePost = async () => {
        try {
          const response = await callApiDeletePost(product.id);
          if (response.data.fail) {
            message.error(response.data.fail);
          } else {
            message.success(response.data.success);
            window.location.reload();
          }
        } catch (error) {
          setLoading(false);
          console.error(error);
          message.error("Xóa bài đăng không thành công");
        }
      };
      deletePost();
      setLoading(false);
    };

    return (
      <>
        {loading && <Loading />}
        <div className="flex flex-col gap-[20px] m-[10px]">
          <div className="flex items-center justify-between mt-[5vh]">
            <h1 className="mb-[24px] text-[30px] font-semibold text-rose-500">
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

          <ul className="flex flex-col gap-[20px]">
            {postDataFilter.length  &&
              currentPosts.map((product) => (
                <div key={product.id} className="flex gap-[20px] items-center justify-center">
                  <div className="w-[80%]">
                    <div className="relative">
                      <CardProduct props={product} checked={product.check} />

                    </div>
                  </div>
                  <div className="w-[20%] flex flex-col gap-[20px] items-center justify-between">
                    <Button
                      children={product.check === "3" ? "Đăng lại" : "Chỉnh sửa"}
                      bgColor={"bg-[#6F7B92]"}
                      textColor={"text-white"}
                      borderColor={"border-white"}
                      onClick={() => handleUpdatePost(product)}
                    />
                    <Popconfirm
                      title="Xóa bài đăng"
                      description="Bạn có chắc chắn muốn xóa bài đăng này"
                      onConfirm={() => confirm(product)}
                      okText="Xóa"
                      cancelText="Hủy"
                    >
                      <Button
                        children={"xóa"}
                        bgColor={"bg-[#DE3E36]"}
                        textColor={"text-white"}
                        borderColor={"border-[#DE3E36]"}
                      />
                    </Popconfirm>
                  </div>
                </div>
              ))}
          </ul>
          <div className="flex items-center justify-center">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={postDataFilter.length}
              onChange={handlePageChange}
              hideOnSinglePage={true}
            />
          </div>
          {updatePostClick && <UpdatePost updatePostData={updatePostData} />}
        </div>
      </>
    );
  };

  export default ManagePostUser;
