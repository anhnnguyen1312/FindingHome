import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  callApiUserNotification,
  callApiUserMarkAsRead,
} from "../api/getUserNotificationApi";
import {
  callApiAdminNotification,
  callApiAdminMarkAsRead,
} from "../api/system/getAdminNotificationApi";
import { jwtDecode } from "jwt-decode";
import userAvatar from "../assets/images/userAvatar.jpg";
import { path } from "../ultils/path";
const Notifications = ({ userId, userRole }) => {

  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);
  const limitNotification = notifications.slice(0, 1);
  const navigate = useNavigate();


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
      } else if (response.data.fail) {
        setError(response.data.fail);
      } else {
        setNotifications([]);
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
      userRole === 1
      ? navigate(`/system/${path.DETAIL}/${postId}`) 
      : navigate(`/${path.DETAIL}/${postId}`)
    }
  }

  return (
    <div className="icon-navbar-user icon-navbar font-thin relative">
      <i className="fa-solid fa-bell white_icon"></i>
      <div className="notify">
        <header className="h-[50px] text-center">
          <h3>Thông Báo Mới Nhất</h3>
        </header>
        <ul className="font-thin flex flex-col bg-white">
          {limitNotification && limitNotification.length > 0 ? (
            limitNotification.map((notic) => (
              <li
                key={notic.id}
                className="flex hover:bg-[#f7f7f7] bg-[#ee4b2b17] mb-[10px]"
              >
                <a
                  className="flex flex-row p-[8px] w-full gap-[5px] border border-transparent border-2 active:border-rose-500 "
                  alt="user-avatar"
                  onClick={() => {
                    markAsRead(notic.id)
                    handleNotify(notic.postId)
                  }}
                >
                  <img
                    src={notic.avatar ? notic.avatar : userAvatar}
                    className="object-cover w-[30px] h-[30px] rounded-full border-full flex"
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
                </a>
              </li>
            ))
          ) : error ? (
            <li className="text-center">{error}</li>
          ) : (
            <li className="text-center">Không có thông báo</li>
          )}
        </ul>
          <footer className="flex">
            <Link
              to={`/logged-in/${path.NOTIFICATION}`}
              className="flex-1 text-black px-[10px] py-[10px] bg-gray-200 hover:bg-gray-300 rounded text-center"
            >
               Xem tất cả ({notifications.length})
            </Link>
          </footer>
      </div>
    </div>
  );
};

export default Notifications;
