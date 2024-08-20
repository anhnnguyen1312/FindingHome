import React, { useState, useEffect } from "react";
import { InputGroup } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";
import { path } from "../../ultils/path";
import { Loading, Button } from "../../components/index";
import swal from "sweetalert";
import {
  registerAction,
  loginAction,
  forgotPasswordAction,
} from "../../redux/store/action/authenAction.js";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { checkAuthenToken } from "../../api/cookieServices";

export default function Login() {
  checkAuthenToken();
  const useLocate = useLocation();
  const usenavi = useNavigate();
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.auth);
  const [isResgister, setIsRegister] = useState(
    useLocate.state?.stateIsRegister
  );
  const [isForgotPassword, SetIsForgotPassword] = useState(
    useLocate.state?.stateIsForgotPassword
  );
  const [isInvalid, setIsInvalid] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
    password: "",
    avatar:
      "https://asset.cloudinary.com/dx3nwkh2i/7d1e9bf5e5c43ab5b11b4e0040ee34b9",
  });

  useEffect(() => {
    setIsRegister(useLocate.state?.stateIsRegister);
  }, [useLocate.state?.stateIsRegister]);

  useEffect(() => {
    SetIsForgotPassword(useLocate.state?.stateIsForgotPassword);
  }, [useLocate.state?.stateIsForgotPassword]);

  useEffect(() => {
    if (stateAuth.isLoggedIn) {
      swal({
        text: stateAuth.msg,
        icon: "success",
        timer: 2000,
      });
      stateAuth.data.role === "1"
        ? usenavi(`system/manage-post-system`)
        : usenavi(`${path.HOME}`);
    }
  }, [stateAuth.isLoggedIn]);

  useEffect(() => {
    if (stateAuth.msg) {
      if (!stateAuth.isLoggedIn && !stateAuth.isLoggedOut) {
        swal({
          text: stateAuth.msg,
          icon: "error",
          timer: 2000,
        });
      }
    }
  }, [stateAuth.msg, stateAuth.update]);

  useEffect(() => {
    stateAuth.isCheckedEmail == "checked"
      ? swal({
          text: stateAuth.msg,
          icon: "success",
          timer: 2000,
        })
      : stateAuth.isCheckedEmail == "unChecked" &&
        swal({
          text: stateAuth.msg,
          icon: "error",
          timer: 2000,
        });
  }, [stateAuth.isCheckedEmail]);

  const validate = (formData) => {
    let isInvalidCount = true;
    for (let i in formData) {
      if (formData[i] === "") {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: i, msg: `bạn chưa nhập ${i}` },
        ]);
        isInvalidCount = false;
      }
      if (i === "password" && isResgister) {
        const resultValidatePassword = validator.isStrongPassword(formData[i]);
        if (!resultValidatePassword) {
          setIsInvalid((prevState) => [
            ...prevState,
            {
              name: i,
              msg: `mật khẩu phải có ít nhất: \n 8 kí tự, 1 kí tự đặc biệt, 1 chữ thường, 1 chữ in hoa`,
            },
          ]);
          isInvalidCount = false;
        }
      }
      if (i == "confirmPassword") {
        if (formData[i] != formData["password"]) {
          setIsInvalid((prevState) => [
            ...prevState,
            { name: i, msg: `Mật khẩu xác nhận không đúng` },
          ]);
          isInvalidCount = false;
        }
      }

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
        const resultValidateEmail = validator.isNumeric(formData[i]);
        if (resultValidateEmail) {
          setIsInvalid((prevState) => [
            ...prevState,
            { name: i, msg: `Tên không hợp lệ` },
          ]);
          isInvalidCount = false;
        }
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

  const handleSignIn = () => {
    setIsRegister(true);
    SetIsForgotPassword(false);
    setFormData({
      phone: "",
      name: "",
      email: "",
      password: "",
      avatar:
        "https://asset.cloudinary.com/dx3nwkh2i/7d1e9bf5e5c43ab5b11b4e0040ee34b9",
    });
    setIsInvalid([]);
  };

  const handleLogIn = () => {
    setIsRegister(false);
    SetIsForgotPassword(false);
    setFormData({
      phone: "",
      name: "",
      email: "",
      password: "",
      avatar:
        "https://asset.cloudinary.com/dx3nwkh2i/7d1e9bf5e5c43ab5b11b4e0040ee34b9",
    });
    setIsInvalid([]);
  };

  const handleForgotPassword = () => {
    SetIsForgotPassword(true);
    setIsRegister(false);
    setFormData({
      email: "",
    });
    setIsInvalid([]);
  };
  console.log("loading", loading);
  const handleSubmit = async () => {
    setLoading(true);
    let apiData =
      isResgister || isForgotPassword
        ? formData
        : {
            email: formData.email,
            password: formData.password,
          };
    let checkValidate = validate(apiData);

    if (checkValidate) {
      {
        isResgister
          ? dispatch(registerAction(apiData))
          : isForgotPassword
            ? dispatch(forgotPasswordAction(apiData))
            : dispatch(loginAction(apiData));
      }
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="w-[30rem] min-h-28 px-6 py-8 text-center border-[#1dbfaf] bg-white border rounded-sm m-6 self-center">
        {loading && <Loading />}
        <h1 className="text-3xl font-[600] mb-[1rem]">
          {isResgister
            ? "Đăng ký"
            : isForgotPassword
              ? "Xác nhận Email"
              : "Đăng nhập"}
        </h1>
        {isResgister ? (
          <p className="text-[1.2rem] leading-10 mb-2 mt-4 text-center font-light">
            Đăng ký ngay để tìm được phòng ưng ý nhất ❤️
          </p>
        ) : isForgotPassword ? (
          <p className="text-[1.2rem] leading-10 mb-2 mt-4 text-center font-light">
            Vui lòng nhập đúng email bạn dùng để đăng nhập
          </p>
        ) : (
          <p className="text-[1.2rem] leading-10 mb-2 mt-4 text-center font-light">
            Đăng nhập ngay để tìm được phòng ưng ý nhất ❤️
          </p>
        )}
        {isResgister && (
          <>
            <InputGroup
              setIsInvalid={setIsInvalid}
              value={formData.name}
              setFormData={setFormData}
              typeInput={"name"}
              isInvalid={isInvalid}
              labelChild={"Họ và Tên"}
              type={"text"}
              placeholder={"Mời bạn nhập Họ và Tên "}
            />
            <InputGroup
              setIsInvalid={setIsInvalid}
              value={formData.phone}
              setFormData={setFormData}
              typeInput={"phone"}
              isInvalid={isInvalid}
              type={"text"}
              labelChild={"Số điện thoại"}
              placeholder={"Mời bạn nhập Số điện thoại "}
            />
          </>
        )}
        <InputGroup
          setIsInvalid={setIsInvalid}
          value={formData.email}
          setFormData={setFormData}
          typeInput={"email"}
          isInvalid={isInvalid}
          type={"text"}
          labelChild={"Email"}
          placeholder={"Mời bạn nhập Email"}
        />
        {!isForgotPassword && (
          <InputGroup
            setIsInvalid={setIsInvalid}
            value={formData.password}
            setFormData={setFormData}
            type={"password"}
            typeInput={"password"}
            isInvalid={isInvalid}
            labelChild={"Mật khẩu"}
            placeholder={"Mời bạn nhập Mật khẩu"}
          />
        )}
        {isResgister && (
          <InputGroup
            setIsInvalid={setIsInvalid}
            value={formData.confirmPassword}
            setFormData={setFormData}
            type={"password"}
            typeInput={"confirmPassword"}
            isInvalid={isInvalid}
            labelChild={"Xác nhận mật khẩu"}
            placeholder={"Nhập lại mật khẩu của bạn"}
          />
        )}
        <Button
          children={
            isResgister ? "Đăng ký" : isForgotPassword ? "Gửi" : "Đăng nhập"
          }
          bgColor={"bg-[#1dbfaf]"}
          textColor={"text-white"}
          borderColor={"border-white"}
          onClick={handleSubmit}
          fullWidth
          hovercolor={"hover:bgColor-[#18ad9e]"}
        />
        <div className="flex justify-between mt-4 text-blue-600">
          {isResgister || isForgotPassword ? (
            <p onClick={handleLogIn} className="cursor-pointer hover:underline">
              Đăng nhập ngay
            </p>
          ) : (
            <>
              <p
                onClick={handleSignIn}
                className="cursor-pointer hover:underline"
              >
                Bạn chưa có tài khoản?
              </p>
              <p
                onClick={handleForgotPassword}
                className="cursor-pointer hover:underline"
              >
                Bạn quên mật khẩu ?
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
