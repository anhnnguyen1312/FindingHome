import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import no_data_img from "../assets/images/no-data-icon-10.png";
import { Pagination } from "antd";

const StatisticPost = ({ userId }) => {
  const { posts } = useSelector((state) => state.post);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
    const allPosts = Object.values(posts).flat();
    const filterTypePosts = allPosts.filter((post) => post.userId === userId);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPostData = filterTypePosts?.slice(startIndex, endIndex);

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

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full mb-12  px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Thống kê bài đã đăng
                </h3>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    STT
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Tên bài đăng
                  </th>

                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Ngày đăng
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Lượt thích
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Trạng thái
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentPostData.length > 0
                  ? currentPostData.map((post, index) => {
                      return (
                        <tr key={index}>
                          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                            {index + 1}
                          </td>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                            {post.title}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                            {post.dateCreateAt}
                          </td>
                          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                            {post.likes}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {handleStatusTag(post.check)}
                          </td>
                        </tr>
                      );
                    })
                  : currentPostData?.length === 0 && (
                      <td colSpan={5}>
                        <img src={no_data_img} alt="No data available"></img>
                      </td>
                    )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[10px]">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filterTypePosts?.length}
            onChange={handlePageChange}
            hideOnSinglePage={true}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `Tổng ${total} bài đăng`}
          />
        </div>
      </div>
    </section>
  );
};

export default StatisticPost;
