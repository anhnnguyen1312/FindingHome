import React, { useEffect, useState } from "react";
import { ManagePostUser, UpdateUserProfile } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";

import userAvatar from "../../assets/images/userAvatar.jpg";

import { logoutAction } from "../../redux/store/action/authenAction";
import { path } from "../../ultils/path";
const Profile = () => {
  const [updateClick, setUpdateClick] = useState(false);
  const [managePostClick, setManagePostClick] = useState(false);
  const usenavi = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (stateAuth.isLoggedIn) {
  //     const getApiuserProfile = async () => {
  //       // const response = await callApiUserProfile(userId);
  //       const response = await callApiUserProfile("1");

  //       setUserData(response.data);
  //     };
  //     getApiuserProfile();
  //     dispatch(postAction());
  //   }
  // }, []);

  const stateAuth = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    !stateAuth.isLoggedIn && usenavi("/");
  }, [stateAuth.isLoggedIn]);

  const handleLogOut = () => {
    dispatch(logoutAction());
  };

  // console.log("userData ", userData);
  // console.log("stateAuth ", stateAuth);
  // console.log("userData.avatar?.length", userData.avatar);

  return (
    <>
      <div className="w-full">
        <div className=" mx-auto py-8">
          <div className="grid grid-cols-4 md:grid-cols-12 gap-4 px-4">
            <div className="col-span-4 md:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
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
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Sửa Thông Tin
                    </div>
                    <Link
                      //  onClick={() => handleNewPostNavidate()}
                      to={path.LOGIN}
                      className="bg-rose-500 hover:bg-rose-400 text-white py-2 px-4 rounded"
                    >
                      Đăng tin
                    </Link>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  {/* <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span> */}
                  <ul>
                    <li
                      onClick={() => {
                        setUpdateClick(false);
                        setManagePostClick(true);
                      }}
                      className="mb-4 border-b-[1px] border-[#dfdfdf] "
                    >
                      Quản lý tin đăng
                    </li>

                    <li className="mb-4 border-b-[1px] border-[#dfdfdf] ">
                      Lịch sử hoạt động
                    </li>
                    <li
                      className="mb-4 border-b-[1px] border-[#dfdfdf] "
                      onClick={() => handleLogOut()}
                    >
                      xóa tài khoản
                    </li>
                    <li
                      className="mb-4 border-b-[1px] border-[#dfdfdf] "
                      onClick={() => handleLogOut()}
                    >
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 md:col-span-9">
              {/* // chinh sua thong tin form */}
              {updateClick && (
                <UpdateUserProfile
                  setUpdateClick={setUpdateClick}
                  updateClick={updateClick}
                />
              )}

              {/* // tin ddax ddangw */}
              {managePostClick && <ManagePostUser />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
