import React, { useState, useEffect } from "react";
import { InputGroup } from "../../components";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/path";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button";
import axios from "axios";
import swal from "sweetalert";
// import { callApiRegister } from '../../api/authenLogin';
import {
  registerAction,
  loginAction,
} from "../../redux/store/action/authenAction.js";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
// import { callApiUserInfor } from "../../api/authenLogin.js";

export default function Login() {
  const useLocate = useLocation();
  const usenavi = useNavigate();
  const dispatch = useDispatch();
  // const selector = useSelector()
  const stateAuth = useSelector((state) => state.auth);
  const [isResgister, setIsRegister] = useState(
    useLocate.state?.stateIsRegister
  );
  const [isInvalid, setIsInvalid] = useState([]);
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log("data ", stateAuth.data);

  useEffect(() => {
    setIsRegister(useLocate.state?.stateIsRegister);
  }, [useLocate.state?.stateIsRegister]);

  useEffect(() => {
    // stateAuth.isLoggedIn && usenavi("/");
    if(stateAuth.isLoggedIn){
      swal({
        text: stateAuth.msg,
        icon: "success",
        timer: 2000,
      });
    }
    stateAuth.isLoggedIn && usenavi(-1, { replace: true });
  }, [stateAuth.isLoggedIn]);

  useEffect(() => {
    if(stateAuth.msg){
      if((!stateAuth.isLoggedIn) && (!stateAuth.isLoggedOut)){
        swal({
          text: stateAuth.msg,
          icon: "error",
          timer: 2000,
        });
      }
    }
  }, [stateAuth.msg, stateAuth.update]);

  const validate = (formData) => {
    console.log("formdata", formData);
    let isInvalidCount = true;
    for (let i in formData) {
      //null
      if (formData[i] === "") {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: i, msg: `ban chua nhap ${i}` },
        ]);
        // isInvalidCount++
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
          // isInvalidCount++
          isInvalidCount = false;
        }
      }
      if (i == "confirmPassword") {
        if (formData[i] != formData["password"]) {
          setIsInvalid((prevState) => [
            ...prevState,
            { name: i, msg: `Mật khẩu xác nhận không đúng` },
          ]);
          // isInvalidCount++
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
          // isInvalidCount++
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
          // isInvalidCount++
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
  // ham validator
  //   const validator = (formData) => {
  // console.log('formData',formData)
  // for (let i in formData){
  //   console.log('formData i ',formData[i],i)
  // if (i === 'phone'){

  // }
  // if (i === 'email'){
  //   const test = (a) => {
  //     console.log('a',a)
  //         var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  //     return regex.test(a) ? console.log('ban  nhap sai email') :  console.log('ban da nhap dung email')
  //   }
  //   test(formData[i])
  //   }
  //   if (i === 'name'){
  //     // console.log('formData[i].trim()',formData[i].trim())
  //     formData[i].trim() === '' ? console.log('ban chua nhap name') :  console.log('ban da nhap name')

  //     }
  //     if (i === 'password'){
  //       console.log('phone')
  //       }
  // }

  //   }

  // /axios test api
  //axios post data api
  // const user = '1'
  //   useEffect(() => {
  //     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.formData);
  //     })
  //     .catch(error => console.log(error));
  //   },[])

  // GỌI API VỚI FETCH
  // var api = 'http://localhost:3000/users'
  // fetch(api)
  // .then(function(response){
  //   return response.json();
  // })
  // .then(function(person){
  //   console.log('person',person)

  // })

  const handleSignIn = () => {
    setIsRegister(true);
    setFormData({
      phone: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsInvalid([]);
  };
  const handleLogIn = () => {
    setIsRegister(false);
    setFormData({
      phone: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsInvalid([]);
  };
  const handleSubmit = async () => {
    let apiData = isResgister
      ? formData
      : {
          email: formData.email,
          password: formData.password,
        };
    let error = validate(apiData);
    //   axios.post(`http://localhost:3000/users`, { apiData })
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(error => console.log(error));

    // axios.get(`http://localhost:3000/users`,{
    //   // headers: {
    //   //   'Content-Type': 'application/json'
    //   // } })
    //   header : { 'Access-Control-Allow-Origin': 'http://localhost:3000/users'}
    // })
    // .then(res => {
    //   console.log(res.status);
    // })
    // .catch(error => console.log(error));

    if (error) {
      // const response = await callApiRegister(formData)
      // console.log('response', response)
      {
        isResgister
          ? dispatch(registerAction(apiData))
          : dispatch(loginAction(apiData));
      }
    }

    console.log("error", error);
  };

  // call api get user
  // useEffect(() => {
  //   const getApiUser = async () => {
  //     const response = await callApiUserInfor();
  //   };
  //   const a = getApiUser();
  // }, []);
  //post

  // axios.post(`http://localhost:3005/users`, { formData })
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   })
  //   .catch(error => console.log(error));

  return (
    <div className="">
      {/* <form action="" method="POST" className='w-[30rem] min-h-28 px-6 py-8 text-center border-[#1dbfaf] bg-white border rounded-sm m-6 self-center' id="form-1"> */}
      <div className="w-[30rem] min-h-28 px-6 py-8 text-center border-[#1dbfaf] bg-white border rounded-sm m-6 self-center">
        <h1 className="text-3xl font-[600] mb-[1rem]">
          {" "}
          {isResgister ? "Đăng ký" : "Đăng nhập"}{" "}
        </h1>
        <p className="text-[1.2rem] leading-10 mb-2 mt-4 text-center font-light">
          Đăng nhập ngay để tìm được phòng ưng ý nhất❤️
        </p>
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
          children={isResgister ? "Đăng ký" : "Đăng nhập"}
          bgColor={"bg-[#1dbfaf]"}
          textColor={"text-white"}
          borderColor={"border-white"}
          onClick={handleSubmit}
          fullWidth
          hovercolor={"hover:bgColor-[#18ad9e]"}
        />
        <div className="flex justify-between mt-4 text-blue-600">
          {isResgister ? (
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
              <p className="cursor-pointer hover:underline">
                Bạn quên mật khẩu ?
              </p>
            </>
          )}
        </div>
      </div>
      {/* </form> */}
    </div>
  );
}
// }
