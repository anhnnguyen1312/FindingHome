import React, { useEffect, useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { AvatarUpload, Loading } from "./index";
import { useNavigate, useLocation } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import {
  updateUserAction,
  updateUserActionAccess,
} from "../redux/store/action/authenAction";
const UpdateUserProfile = ({
  setUpdateClick,
  updateClick,
  setManagePostClick,
}) => {
  const dispatch = useDispatch();
  const usenavi = useNavigate();
  const useLocate = useLocation();

  const [IsInValid, setIsInvalid] = useState([]);
  const [clickPassword, setClickPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState(true);

  const [loading, setLoading] = useState(false);

  const [avatarClick, setAvatarClick] = useState(false);

  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const stateAuth = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);
  const [userData, setUserData] = useState(() => {
    const data = {
      avatar: stateAuth.data?.avatar || "",
      email: stateAuth.data?.email || "",
      name: stateAuth.data?.name || "",
      newPs: "",
      phone: stateAuth.data?.phone || "",
      role: stateAuth.data?.role || "",
      userId: stateAuth.data?.userId || "",
    };
    return data;
  });

  useEffect(() => {
    setIsInvalid([]);
  }, []);

  const handleFormUserData = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handlePasswordForm = (e) => {
    setPasswordForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleOnFocus = (e) => {
    setIsInvalid([]);
  };
  const validate = (formData) => {
    let isInvalidCount = true;

    const IsNull = (value, i, title) => {
      if (value.trim() === "") {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: i, msg: `bạn chưa nhập tên${title} ` },
        ]);
        isInvalidCount = false;
      }
    };
    for (let i in formData) {
      if (i === "email") {
        const resultValidateEmail = validator.isEmail(formData[i]);
        if (!resultValidateEmail) {
          setIsInvalid((prevState) => [
            ...prevState,
            { name: i, msg: `email không hợp lệ` },
          ]);
          isInvalidCount = false;
        }
      }

      if (i === "name") {
        const title = `Tên`;
        IsNull(formData[i], i, title);
      }

      if (i === "phone") {
        const resultValidatePhone = validator.isMobilePhone(formData[i]);
        if (!resultValidatePhone) {
          setIsInvalid((prevState) => [
            ...prevState,
            { name: i, msg: `số điện thoại không hợp lệ` },
          ]);
          isInvalidCount = false;
        }
      }
    }
    return isInvalidCount;
  };
  const handleConfirmPassword = () => {
    let isInvalidCount = true;
    if (passwordForm.oldPassword) {
      if (!(passwordForm.oldPassword === stateAuth.data?.password)) {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: "oldPassword", msg: `mật khẩu hiện tại không đúng` },
        ]);
        isInvalidCount = false;
      } else {
        if (passwordForm.newPassword) {
          const resultValidatePassword = validator.isStrongPassword(
            passwordForm.newPassword
          );
          if (!resultValidatePassword) {
            setIsInvalid((prevState) => [
              ...prevState,
              {
                name: "newPassword",
                msg: `mật khẩu phải có ít nhất: \n 8 kí tự, 1 kí tự đặc biệt, 1 chữ thường, 1 chữ in hoa`,
              },
            ]);

            isInvalidCount = false;
          } else {
            if (passwordForm.newPassword === stateAuth.data?.password) {
              setIsInvalid((prevState) => [
                ...prevState,
                {
                  name: "newPassword",
                  msg: `mật khẩu mới trùng với mật khẩu hiện tại`,
                },
              ]);
              isInvalidCount = false;
            } else {
              if (userData.newPs) {
                if (userData.newPs != passwordForm.newPassword) {
                  setIsInvalid((prevState) => [
                    ...prevState,
                    {
                      name: "newPs",
                      msg: `Mật khẩu xác nhận không đúng`,
                    },
                  ]);
                  isInvalidCount = false;
                }
              } else {
                setIsInvalid((prevState) => [
                  ...prevState,
                  {
                    name: "newPs",
                    msg: `ban chưa nhập lại mật khẩu mới`,
                  },
                ]);
                isInvalidCount = false;
              }
            }
          }
        } else {
          setIsInvalid((prevState) => [
            ...prevState,
            {
              name: "newPassword",
              msg: `ban chưa nhập mật khẩu mới`,
            },
          ]);
          isInvalidCount = false;
        }
      }
    } else {
      if (!passwordForm.newPassword && !userData.newPs) {
        return isInvalidCount;
      } else {
        console.log("passwordForm.newPassword", passwordForm.newPassword);
        console.log("userData.newPs", userData.newPs);
        setIsInvalid((prevState) => [
          ...prevState,
          {
            name: "oldPassword",
            msg: `ban chưa nhập mật khẩu cũ`,
          },
        ]);
        isInvalidCount = false;
      }
    }
    return isInvalidCount;
  };
  const handleSave = async () => {
    setLoading(true);
    const error = validate(userData);
    const errorPassword = handleConfirmPassword(passwordForm);
    if (error && errorPassword) {
      dispatch(updateUserAction(userData));
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (stateAuth.msg === "fail") {
      setLoading(false);
      swal({
        text: stateAuth.msg,
        icon: "error",
        timer: 3000,
      });
    }

    if (stateAuth.msg === "success") {
      setLoading(false);
      swal({
        text: "update thông tin thành công",
        icon: "success",
        timer: 3000,
      }).then(() => window.location.reload());
      // .then(() => {
      //   setPasswordForm({
      //     oldPassword: "",
      //     newPassword: "",
      //   });
      //   setUserData((prevState) => ({
      //     ...prevState,
      //     newPs: "",
      //   }));
      // });
    }

    dispatch(updateUserActionAccess());
  }, [stateAuth.msg && stateAuth.update]);

  return (
    <>
      {loading && <Loading />}
      <div className=" bg-white max-w-screen-md border  shadow-xl px-4 md:mx-auto">
        <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
          <div className="shrink-0 mr-auto sm:py-3">
            <p className="font-medium">Thông tin người dùng</p>
            <p className="text-sm text-gray-600">Chỉnh sửa thông tin cá nhân</p>
          </div>

          <div>
            <button
              onClick={() => {
                setUpdateClick(false);
                setManagePostClick(true);
              }}
              className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200"
            >
              hủy
            </button>
            <button
              onClick={() => handleSave()}
              className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
            >
              Lưu
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-normal">Họ & Tên</p>
          <input
            value={userData.name}
            disabled={!updateClick}
            id={"name"}
            onChange={(e) => handleFormUserData(e)}
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
          {IsInValid.length > 0 &&
            IsInValid.some((element) => element.name === "name") && (
              <span className="italic text-[#f33a58] text-center text-md">
                {" "}
                {IsInValid.find((e) => e.name === "name")?.msg}{" "}
              </span>
            )}
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-normal">Email</p>
          <input
            value={userData.email}
            disabled={!updateClick}
            id={"email"}
            onFocus={handleOnFocus}
            onChange={(e) => handleFormUserData(e)}
            placeholder="Nhập email"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
          {IsInValid.length > 0 &&
            IsInValid.some((element) => element.name === "email") && (
              <span className="italic text-[#f33a58] text-center text-md">
                {" "}
                {IsInValid.find((e) => e.name === "email")?.msg}{" "}
              </span>
            )}
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-normal">Số điện thoại</p>
          <input
            value={userData.phone}
            disabled={!updateClick}
            onChange={(e) => handleFormUserData(e)}
            id={"phone"}
            placeholder="Nhập số điện thoại"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
          {IsInValid.length > 0 &&
            IsInValid.some((element) => element.name === "phone") && (
              <span className="italic text-[#f33a58] text-center text-md">
                {" "}
                {IsInValid.find((e) => e.name === "phone")?.msg}{" "}
              </span>
            )}
        </div>
        <div
          onClick={() => setClickPassword(!clickPassword)}
          className="shrink-0 mr-auto  flex  items-center justify-between sm:py-3"
        >
          <p className="font-medium">Đổi mật khẩu</p>
          {clickPassword ? <DownOutlined /> : <UpOutlined />}
        </div>
        {clickPassword && (
          <>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-normal">Mật khẩu hiện tại</p>

              <input
                value={passwordForm.oldPassword}
                type="password"
                id={"oldPassword"}
                onFocus={handleOnFocus}
                onChange={(e) => handlePasswordForm(e)}
                placeholder="Nhập mật khẩu cũ"
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              />
              {IsInValid.length > 0 &&
                IsInValid.some((element) => element.name === "oldPassword") && (
                  <span className="italic text-[#f33a58] text-center text-md">
                    {" "}
                    {IsInValid.find((e) => e.name === "oldPassword")?.msg}{" "}
                  </span>
                )}
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-normal">Mật khẩu mới</p>
              <input
                value={passwordForm.newPassword}
                type="password"
                id={"newPassword"}
                onFocus={handleOnFocus}
                onChange={(e) => handlePasswordForm(e)}
                placeholder="Nhập Mật khẩu mới"
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              />
              {IsInValid.length > 0 &&
                IsInValid.some((element) => element.name === "newPassword") && (
                  <span className="italic text-[#f33a58] text-center text-md">
                    {" "}
                    {IsInValid.find((e) => e.name === "newPassword")?.msg}{" "}
                  </span>
                )}
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-normal">Nhập lại mật khẩu mới</p>
              <input
                value={userData.newPs}
                type="password"
                id={"newPs"}
                onFocus={handleOnFocus}
                onChange={(e) => handleFormUserData(e)}
                placeholder="Nhập lại mật khẩu mới"
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              />
              {IsInValid.length > 0 &&
                IsInValid.some((element) => element.name === "newPs") && (
                  <span className="italic text-[#f33a58] text-center text-md">
                    {" "}
                    {IsInValid.find((e) => e.name === "newPs")?.msg}{" "}
                  </span>
                )}
            </div>
          </>
        )}
        <div
          onClick={() => setAvatarClick(!avatarClick)}
          className="shrink-0 mr-auto  flex  items-center justify-between sm:py-3"
        >
          <p className="font-medium">Đổi ảnh đại diện</p>
          {avatarClick ? <DownOutlined /> : <UpOutlined />}
        </div>
        {avatarClick && (
          <AvatarUpload
            id={"avatar"}
            avatar={userData.avatar}
            setUserData={setUserData}
          />
        )}

        <div className="flex justify-end py-4 sm:hidden">
          <button
            onClick={() => setUpdateClick(false)}
            className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200"
          >
            hủy
          </button>
          <button
            onClick={() => handleSave()}
            className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
          >
            Lưu
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateUserProfile;
