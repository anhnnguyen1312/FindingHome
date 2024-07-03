import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import userAvatar from "../../assets/images/userAvatar.jpg";
import {
  callApiUserNotification,
  callApiUserMarkAsRead,
} from "../../api/getUserNotificationApi";
import {
  callApiAdminNotification,
  callApiAdminMarkAsRead,
} from "../../api/system/getAdminNotificationApi";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/path";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.auth);
  console.log(data);
  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response =
        data.role === "1"
          ? await callApiAdminNotification()
          : await callApiUserNotification(data.id);

      if (response.data.token) {
        setNotifications(response.data.token.map(jwtDecode));
      } else {
        setError(response.data.fail);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const markAsRead = async (id = null) => {
    try {
      const apiCall =
        userRole === "1" ? callApiAdminMarkAsRead : callApiUserMarkAsRead;
      const response = await apiCall(id);
      console.log("response", response);

      if (response.data.success) {
        const reApiCall =
          userRole === "1" ? callApiAdminNotification : callApiUserNotification;
        const reResponse = await reApiCall(userId);
        console.log("reResponse", reResponse);

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
  const handleSplitName = (message) => {
    const data = message.split(",");
    return data[0];
  };
  const handleSplitMessege = (message) => {
    const data = message.split(",");
    return data[1];
  };
  const handleNotify = (postId, id) => {
    navigate(`/system/${path.DETAIL}/${postId}`);
    markAsRead(id);
  };
  console.log("notifications", notifications);

  return (
    <>
      <div className="w-full h-[100vh]  py-10 flex flex-col gap-4 items-center justify-start bg-gray-900 dark:bg-white">
        <div className="md:text-4xl sm:text-3xl xs:text-2xl text-center font-serif font-extrabold border-b-2 dark:border-blue-500 rounded-b-md mb-6 border-yellow-500 text-white dark:text-black">
          Thông báo
        </div>

        {notifications && notifications.length > 0 ? (
          notifications.map((notic) => (
            <li
              onClick={() => handleNotify(notic.postId, notic.id)}
              key={notic.id}
              className="sm:w-[70%] xs:w-[94%] mx-auto dark:bg-gray-300 bg-gray-700 p-4 rounded-md flex sm:gap-4 xs:gap-2 items-center justify-center"
            >
              {/* <div className=""> */}
              <img
                src={notic.avatar ? notic.avatar : userAvatar}
                alt="Ảnh đại diện"
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
              {/* </div> */}
            </li>
          ))
        ) : error ? (
          <li className="text-center text-white">{error}</li>
        ) : (
          <li className="text-center text-white">Không có thông báo</li>
        )}
      </div>
    </>
  );
};

export default Notification;
