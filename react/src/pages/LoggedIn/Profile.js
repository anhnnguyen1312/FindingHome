import React, { useEffect, useState } from "react";
import {
  ManagePostUser,
  UpdateUserProfile,
  StatisticPost,
} from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";

import userAvatar from "../../assets/images/userAvatar.jpg";
import { removeAuthToken } from "../../api/cookieServices";
import { logoutAction } from "../../redux/store/action/authenAction";
import { path } from "../../ultils/path";
import { message, Popconfirm } from "antd";
import { callApiDeleteUser } from "../../../src/api/authenLogin";
const Profile = () => {
  const [updateClick, setUpdateClick] = useState(false);
  const [managePostClick, setManagePostClick] = useState(false);
  const usenavi = useNavigate();
  const dispatch = useDispatch();
  const useLocate = useLocation();
  const stateAuth = useSelector((state) => state.auth);
  const userId = stateAuth?.data.userId;

  const confirm = async (userId) => {
    try {
      const response = await callApiDeleteUser(userId);
      if (response.data.fail) {
        message.error(response.data.fail);
      } else {
        const success = response.data.success;
        handleDeleteUser(success);
      }
    } catch (error) {
      console.error(error);
      message.error("Xóa tài khoản không thành công");
    }
  };

  const handleDeleteUser = (success) => {
    removeAuthToken();
    dispatch(logoutAction(success));
  };

  const handleLogOut = () => {
    removeAuthToken();
    dispatch(logoutAction());
  };
  useEffect(() => {
    const navigateComponent = () => {
      if (useLocate.state) {
        if (useLocate.state === "profile") {
          setManagePostClick(false);
          setUpdateClick(true);
        }

        if (useLocate.state === "managepost") {
          setManagePostClick(true);
          setUpdateClick(false);
        }
      }
    };
    navigateComponent();
  }, [useLocate.state]);

  console.log(" useLocate.state ", useLocate);

  return (
    <>
      <div className="w-full  ">
        <div className=" mx-auto  py-8">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 ">
            <div className="col-span-4 lg:col-span-3">
              <div className="bg-white shadow  p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={stateAuth.data?.avatar || userAvatar}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  {stateAuth.data?.name && (
                    <h1 className="text-xl font-bold">
                      {stateAuth.data?.name}
                    </h1>
                  )}
                  <p className="text-gray-700"></p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <div
                      onClick={() => {
                        setUpdateClick(true);
                        setManagePostClick(false);
                      }}
                      className=" cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Sửa Thông Tin
                    </div>
                    <div
                      onClick={() => usenavi(`/logged-in/${path.NEWPOST}`)}
                      className=" cursor-pointer bg-rose-500 hover:bg-rose-400 text-white py-2 px-4 rounded"
                    >
                      Đăng tin
                    </div>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <ul>
                    <li
                      onClick={() => {
                        setUpdateClick(false);
                        setManagePostClick(true);
                      }}
                      className=" cursor-pointer mb-4 border-b-[1px] border-[#dfdfdf] "
                    >
                      Quản lý tin đăng
                    </li>

                    <li className=" cursor-pointer mb-4 border-b-[1px] border-[#dfdfdf] ">
                      Lịch sử hoạt động
                    </li>
                    <Popconfirm
                      title="Xóa Tài Khoản"
                      description="Bạn có chắc chắn muốn xóa tài khoản"
                      onConfirm={() => confirm(userId)}
                      okText="Xóa"
                      cancelText="Hủy"
                    >
                      <li className=" cursor-pointer mb-4 border-b-[1px] border-[#dfdfdf] ">
                        xóa tài khoản
                      </li>
                    </Popconfirm>

                    <li
                      className=" cursor-pointer mb-4 border-b-[1px] border-[#dfdfdf] "
                      onClick={() => handleLogOut()}
                    >
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-9">
              {updateClick && (
                <UpdateUserProfile
                  setUpdateClick={setUpdateClick}
                  setManagePostClick={setManagePostClick}
                  updateClick={updateClick}
                />
              )}

              {managePostClick && <StatisticPost userId={userId} />}
            </div>
          </div>
          {managePostClick && <ManagePostUser userId={userId} />}
        </div>
      </div>
    </>
  );
};

export default Profile;
