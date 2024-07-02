import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  callApiUserNotification,
  callApiUserMarkAsRead,
} from "../api/getUserNotificationApi";
import {
  callApiAdminNotification,
  callApiAdminMarkAsRead,
} from "../api/system/getAdminNotificationApi";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import userAvatar from "../assets/images/userAvatar.jpg";
import { path } from "../ultils/path";
const Notifications = ({ userId, userRole }) => {
  const [notifications, setNotifications] = useState([]);
  console.log("oke", notifications);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotifications();
  }, [userId, userRole]);

  const fetchNotifications = async () => {
    try {
      const response =
        userRole === "1"
          ? await callApiAdminNotification()
          : await callApiUserNotification(userId);

      if (response.data.token) {
        setNotifications(response.data.token.map(jwtDecode));
      } else {
        setError(response.data.fail);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const markAsRead = async (id = null) => {
    try {
      const apiCall =
        userRole === "1" ? callApiAdminMarkAsRead : callApiUserMarkAsRead;
      const response = await apiCall(id);

      if (response.data.success) {
        const reApiCall =
          userRole === "1" ? callApiAdminNotification : callApiUserNotification;
        const reResponse = await reApiCall(userId);

        if (reResponse.data.token) {
          await fetchNotifications();
        } else {
          setError(reResponse.data.fail);
        }
      } else {
        setError(response.data.fail);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="icon-navbar-user icon-navbar font-thin relative">
      <i className="fa-solid fa-bell white_icon"></i>
      <div className="notify">
        <header className="h-[50px] text-center">
          <h3>Thông báo</h3>
        </header>
        <ul className="font-thin flex flex-col bg-white">
          {notifications && notifications.length > 0 ? (
            notifications.map((notic) => (
              <li
                key={notic.id}
                className="flex hover:bg-[#f7f7f7] bg-[#ee4b2b17] mb-[10px]"
              >
                <Link
                  to={`/system/${path.DETAIL}/${notic.postId}`}
                  className="flex p-[8px] w-full gap-[5px] border border-transparent border-2 active:border-rose-500  "
                  onClick={() => markAsRead(notic.id)}
                >
                  <img
                    src={notic.avatar ? notic.avatar : userAvatar}
                    alt=""
                    className="object-contain w-[30px] h-[30px] rounded-full border-full flex"
                  />
                  <div className="m-l-[12px] flex flex-grow flex-col">
                    <span className="flex-grow block ">{notic.message}</span>
                    <span className="flex-grow block text-[#756f6e]">
                      {"vào lúc: "}
                      {notic.createAt}
                    </span>
                  </div>
                </Link>
              </li>
            ))
          ) : error ? (
            <li className="text-center">{error}</li>
          ) : (
            <li className="text-center">Không có thông báo</li>
          )}
        </ul>
        <footer className="flex">
          <button
            onClick={() => markAsRead()}
            className="flex-1 text-black px-[10px] py-[10px] bg-gray-200 hover:bg-gray-300 rounded mr-[10px]"
          >
            Đánh dấu tất cả là đã đọc
          </button>
          <Link
            to={`/logged-in/${path.NOTIFICATION}`}
            className="flex-1 text-black px-[10px] py-[10px] bg-gray-200 hover:bg-gray-300 rounded text-center"
          >
            Xem tất cả
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Notifications;
