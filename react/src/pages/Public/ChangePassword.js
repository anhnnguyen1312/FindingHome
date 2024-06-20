import React, { useState, useEffect } from "react";
import { InputGroup } from "../../components";
import Button from "../../components/Button";
import validator from "validator";
import swal from "sweetalert";
import { useNavigate, useLocation } from "react-router-dom";
import { callApiChangePassword } from "../../api/forgetPassword";
import { path } from "../../ultils/path";

const ChangePassword = () => {
  const [isInvalid, setIsInvalid] = useState([]);
  const usenavi = useNavigate();
  const useLocate = useLocation();
  const [passwordFormData, setPasswordFormData] = useState({
    newPw: "",
    email: useLocate.state?.code,
  });
  const [formData, setFormData] = useState({
    password: "",
  });
  // const [email, setEmail] = useState(useLocate.state?.email);
  //   const [email, setEmail] = useState(useLocate.state?.code);
  console.log("passwordFormData", passwordFormData);
  console.log("isInvalid", isInvalid);
  const validate = () => {
    console.log("validate");

    let isInvalidCount = true;
    if (passwordFormData["newPw"].trim() === "") {
      setIsInvalid((prevState) => [
        ...prevState,
        { name: "newPw", msg: `bạn chưa nhập trường xác nhận mật khẩu mới` },
      ]);
      isInvalidCount = false;
    } else {
      if (passwordFormData["newPw"] != formData["password"]) {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: "newPw", msg: `Mật khẩu xác nhận không đúng` },
        ]);
        // isInvalidCount++
        isInvalidCount = false;
      }
    }
    if (formData["password"].trim() === "") {
      setIsInvalid((prevState) => [
        ...prevState,
        { name: "password", msg: `bạn chưa nhập trường mật khẩu mới` },
      ]);
      isInvalidCount = false;
    } else {
      const resultValidatePassword = validator.isStrongPassword(
        formData["password"]
      );
      if (!resultValidatePassword) {
        setIsInvalid((prevState) => [
          ...prevState,
          {
            name: "password",
            msg: `mật khẩu phải có ít nhất: \n 8 kí tự, 1 kí tự đặc biệt, 1 chữ thường, 1 chữ in hoa`,
          },
        ]);

        isInvalidCount = false;
      }
    }

    if (!passwordFormData["email"] || passwordFormData["email"].trim() === "") {
      swal({
        text: "Vui lòng nhập lại email để lấy mã xác thực trước khi tạo mật khẩu mới",
        icon: "error",
        timer: 3000,
      });

      isInvalidCount = false;
      usenavi(`/${path.FORGET_PASWORD}`);
    }

    return isInvalidCount;
  };
  const handleSubmit = () => {
    const error = validate();

    if (error) {
      const SubmmitData = async () => {
        try {
          const response = await callApiChangePassword(passwordFormData);
          console.log("response", response);

          if (response.data.msg) {
            swal({
              text: "Thay đổi mật khẩu không thành công!",
              icon: "error",
              timer: 2000,
            });
          } else {
            swal({
              text: "Tạo mật khẩu mới thành công!",
              icon: "success",
              timer: 3000,
            }).then(() => usenavi(`/${path.LOGIN}`));
            // response.data && ;
            // console.log("Thay đổi mật khẩu thành công", passwordFormData);
          }
        } catch (error) {
          console.log(error);
          swal({
            text: "Thay đổi mật khẩu không thành công, vui lòng gửi lại!",
            icon: "error",
            timer: 2000,
          });
        }
      };
      SubmmitData();
    }
  };

  return (
    <>
      <div className="w-[30rem] min-h-28 px-6 py-8 text-center border-[#1dbfaf] bg-white border rounded-sm m-6 self-center">
        <h1 className="text-3xl font-[600] mb-[2rem]">Quên Mật Khẩu</h1>
        <p className="text-[1.2rem] leading-10 mb-2 mt-4 text-center font-light">
          Thay đổi mật khẩu
        </p>
        <InputGroup
          setIsInvalid={setIsInvalid}
          value={formData.password}
          setFormData={setFormData}
          typeInput={"password"}
          isInvalid={isInvalid}
          labelChild={"Mật khẩu mới "}
          type={"password"}
          placeholder={"Nhập mật khẩu mới"}
        />

        <InputGroup
          setIsInvalid={setIsInvalid}
          value={passwordFormData.newPw}
          setFormData={setPasswordFormData}
          typeInput={"newPw"}
          isInvalid={isInvalid}
          labelChild={"Nhập lại mật khẩu mới"}
          type={"password"}
          placeholder={"Nhập lại mật khẩu mới"}
        />
        <Button
          children={"Thay đổi mật khẩu"}
          bgColor={"bg-[#1dbfaf]"}
          textColor={"text-white"}
          borderColor={"border-white"}
          onClick={handleSubmit}
          fullWidth
          hovercolor={"hover:bgColor-[#18ad9e]"}
        />
      </div>
    </>
  );
};

export default ChangePassword;
