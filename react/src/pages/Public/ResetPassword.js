import React, { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import { InputGroup } from "../../components";
import Button from "../../components/Button";
import validator from "validator";
import { useDispatch, useSelector} from "react-redux";
import {resetPasswordAction} from "../../redux/store/action/authenAction.js";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/path";

export default function ResetPassword() {

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const token = query.get("token");
  const usenavi = useNavigate();
  const dispatch = useDispatch();

  const stateAuth = useSelector((state) => state.auth);
  const [isInvalid, setIsInvalid] = useState([]);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const validate = (formData) => {
    let isInvalidCount = true;
    for (let i in formData) {

      if (formData[i] === "") {
        setIsInvalid((prevState) => [
          ...prevState,
          { 
            name: i,
            msg: `bạn chưa nhập ${i}` },
        ]);
        isInvalidCount = false;
      }

      if (i === "newPassword") {
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

      if (i == "confirmNewPassword") {
        if (formData[i] != formData["newPassword"]) {
          setIsInvalid((prevState) => [
            ...prevState,
            { 
                name: i, 
                msg: `Mật khẩu xác nhận không đúng`
             },
          ]);
          isInvalidCount = false;
        }
      }
    }
    return isInvalidCount;
  };

  const handleSubmit = async () => {

    let dataCheck = formData ? {
      newPassword: formData.newPassword,
      confirmNewPassword: formData.confirmNewPassword,
    } : null;
  
    let checkValidate = dataCheck ? validate(dataCheck) : false;
  
    if (checkValidate) {
      let apiData = {
        newPassword: formData.newPassword,
        token: token,
      };
      dispatch(resetPasswordAction(apiData));
    }
  };
  useEffect(() =>{
    stateAuth.isResetPassword === 'success' ? (
      swal({
        text: stateAuth.alert,
        icon: "success",
        timer: 2000,
      }).then(()=>{
        usenavi(`/${path.LOGIN}`);
      })
    )
    : stateAuth.isResetPassword === 'fail' &&
    (
      swal({
        text: stateAuth.alert ,
        icon: "error",
        timer: 2000,
      })
    )
  }, [stateAuth.isResetPassword]);

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="w-[30rem] min-h-28 px-6 py-8 text-center border-[#1dbfaf] bg-white border rounded-sm m-6 self-center">
        <h1 className="text-3xl font-[600] mb-[1rem]">{"Reset mật khẩu"}</h1>

        <InputGroup
          setIsInvalid={setIsInvalid}
          value={formData.newPassword}
          setFormData={setFormData}
          type={"password"}
          typeInput={"newPassword"}
          isInvalid={isInvalid}
          labelChild={"Mật khẩu mới"}
          placeholder={"Mời bạn nhập Mật khẩu mới"}
        />
        <InputGroup
          setIsInvalid={setIsInvalid}
          value={formData.confirmNewPassword}
          setFormData={setFormData}
          type={"password"}
          typeInput={"confirmNewPassword"}
          isInvalid={isInvalid}
          labelChild={"Xác nhận mật khẩu mới"}
          placeholder={"Nhập lại mật khẩu mới của bạn"}
        />
        <Button
          children={"Gửi"}
          bgColor={"bg-[#1dbfaf]"}
          textColor={"text-white"}
          borderColor={"border-white"}
          onClick={handleSubmit}
          fullWidth
          hovercolor={"hover:bgColor-[#18ad9e]"}
        />
      </div>
    </div>
  );
}
