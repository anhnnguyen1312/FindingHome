import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import userAvatar from "../../assets/images/userAvatar.jpg";
import actionTypes from "../../redux/store/action/actionTypes";
import {
  callApiUserNotification,
  callApiUserMarkAsRead,
} from "../../api/getUserNotificationApi";
import {
  callApiAdminNotification,
  callApiAdminMarkAsRead,
} from "../../api/system/getAdminNotificationApi";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../../ultils/path";
import { Pagination } from "antd";

const Notification = () => {
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentNotification = notifications?.slice(startIndex, endIndex);

  const { data } = useSelector((state) => state.auth);
  console.log(data);
  useEffect(() => {
    fetchNotifications();
  }, []);

  useEffect(() => {
    dispatch({
      type: actionTypes.COUNT_NOTIFICATIONS,
      count: notifications.length,
    });
  }, [dispatch, notifications]);

  const fetchNotifications = async () => {
    try {
      const response =
        data.role === "1"
          ? await callApiAdminNotification()
          : await callApiUserNotification(data.userId);

      if (response.data.token) {
        setNotifications(response.data.token.map(jwtDecode));
      } else if (response.data.fail) {
        setError(response.data.fail);
      } else {
        setNotifications([]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const markAsRead = async (id = null) => {
    try {
      const apiCall =
        data.role === "1" ? callApiAdminMarkAsRead : callApiUserMarkAsRead;
      const response = await apiCall(id);
      console.log("response", response);

      if (response.data.success) {
        const reApiCall =
          data.role === "1"
            ? callApiAdminNotification
            : callApiUserNotification;
        const reResponse = await reApiCall(data.userId);

        if (reResponse.data.token) {
          await fetchNotifications();
        } else if (reResponse.data.fail) {
          setError(reResponse.data.fail);
        } else {
          window.location.reload();
        }
      } else {
        setError(response.data.fail);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSplitName = (message) => {
    const data = message.split(",");
    return data[0];
  };
  const handleSplitMessege = (message) => {
    const data = message.split(",");
    return data[1];
  };
  const handleNotify = (postId) => {
    {
      data.role === 1
        ? navigate(`/system/${path.DETAIL}/${postId}`)
        : navigate(`/${path.DETAIL}/${postId}`);
    }
  };

  return (
    <>
      <div className="w-full h-[100vh]  py-10 flex flex-col gap-4 items-center justify-start bg-gray-900 dark:bg-white">
        <div className="md:text-4xl sm:text-3xl xs:text-2xl text-center font-serif font-extrabold border-b-2 dark:border-blue-500 rounded-b-md mb-6 border-yellow-500 text-white dark:text-black">
          Thông Báo Chưa Đọc
        </div>
        <div className="w-[80%] flex justify-end">
          <Link
            onClick={() => markAsRead()}
            className="text-right text-blue-500 px-[10px] py-[10px] rounded mr-[10px] hover:underline"
          >
            Đánh dấu tất cả là đã đọc
          </Link>
        </div>
        {currentNotification && currentNotification.length > 0 ? (
          currentNotification.map((notic) => (
            <li
              onClick={() => {
                handleNotify(notic.postId);
                markAsRead(notic.id);
              }}
              key={notic.id}
              className="sm:w-[80%] xs:w-[94%] mx-auto dark:bg-gray-300 bg-gray-700 p-4 rounded-md flex sm:gap-4 xs:gap-2 items-center justify-center"
            >
              <img
                src={notic.avatar ? notic.avatar : userAvatar}
                alt="user-avatar"
                className="w-[5rem] object-cover h-[5rem] outline outline-2 outline-blue-400 dark:outline-teal-400/20 rounded-full"
              />
              <div className="w-[80%] flex flex-col gap-1">
                <div className="text-lg font-semibold font-serif text-white dark:text-black">
                  {handleSplitName(notic.message)}
                </div>
                <p className="text-sm dark:text-gray-600 text-gray-300">
                  {handleSplitMessege(notic.message)}
                </p>
                <p className="text-[12px] text-semibold dark:text-gray-700 text-gray-400 text-right">
                  {notic.createAt}
                </p>
              </div>
            </li>
          ))
        ) : error ? (
          <li className="text-center text-white">{error}</li>
        ) : (
          <li className="text-center text-white">Không có thông báo</li>
        )}
        <div className="flex items-center justify-center mt-[10px]">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={notifications?.length}
            onChange={handlePageChange}
            hideOnSinglePage={true}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `Tổng ${total} bài đăng`}
          />
        </div>
      </div>
    </>
  );
};

export default Notification;
  