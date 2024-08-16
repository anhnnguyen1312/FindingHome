import React, { useState, useEffect } from "react";
import { InputGroup } from "../../components";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import swal from "sweetalert";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { callApiCreateAdminAccount } from "../../api/system/createAdminAccount.js";
const CreateAccountAdmin = () => {
  const [isInvalid, setIsInvalid] = useState([]);
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
    password: "",
    role: "1",
    confirmPassword: "",
    avatar:
      "https://asset.cloudinary.com/dx3nwkh2i/7d1e9bf5e5c43ab5b11b4e0040ee34b9",
  });
  const dispatch = useDispatch();
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

      if (i === "password") {
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
          console.log(formData.confirmPassword);

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

  const handleSubmit = () => {
    console.log(formData);

    const apiData = {
      phone: formData.phone,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: "1",

      avatar:
        "https://asset.cloudinary.com/dx3nwkh2i/7d1e9bf5e5c43ab5b11b4e0040ee34b9",
    };
    let checkValidate = validate(formData);

    const createAdminAccount = async () => {
      try {
        console.log(apiData);
        const response = await callApiCreateAdminAccount(apiData);

        if (response.data.fail) {
          message.error(response.data.fail);
        } else {
          message.success(response.data.success);
          setFormData({
            phone: "",
            name: "",
            email: "",
            password: "",
            role: "1",
            confirmPassword: "",
            avatar:
              "https://asset.cloudinary.com/dx3nwkh2i/7d1e9bf5e5c43ab5b11b4e0040ee34b9",
          });
        }
      } catch (error) {
        console.error(error);
        message.error(" Tạo tài khoản không thành công");
      }
    };
    checkValidate && createAdminAccount();
  };
  return (
    <>
      <div className="flex w-full h-full justify-center items-center">
        <div className="w-[30rem] min-h-28 px-6 py-8 text-center border-[#1dbfaf] bg-white border rounded-sm m-6 self-center">
          <h1 className="text-3xl font-[600] mb-[1rem]">Tạo tài khoản Quản Trị Viên</h1>

          <p className="text-[1.2rem] leading-10 mb-2 mt-4 text-center font-light">
            Tạo tài khoản Admin Finding house ❤️
          </p>

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

          <Button
            children={"Đăng ký"}
            bgColor={"bg-[#1dbfaf]"}
            textColor={"text-white"}
            borderColor={"border-white"}
            onClick={handleSubmit}
            fullWidth
            hovercolor={"hover:bgColor-[#18ad9e]"}
          />
        </div>
      </div>
    </>
  );
};

export default CreateAccountAdmin;
