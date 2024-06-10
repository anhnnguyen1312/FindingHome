import React, { useState, useEffect } from "react";
import Address from "../../components/address";
import { InputReadOnly } from "../../components/index";
import { getProvince, getDistrict, getWard } from "../../api/getProvince";
import { Flex, Form } from "antd";
import {
  AddressNewPostProvince,
  AddressNewPostDistrict,
  AddressNewPostWard,
} from "../../components/AddressNewPost";
import InputNewPost from "../../components/InputNewPost";
import TextAreaNewPost from "../../components/TextAreaNewPost";
import SelectNewPost from "../../components/SelectNewPost";
import TypeRoom from "../../data/TypeRoom";
import validator from "validator";
import { callApiCreatePost } from "../../api/getPostApi";
import { useLocation } from "react-router-dom";

const NewPost = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [IsInValid, setIsInvalid] = useState([]);
  const useLocate = useLocation();

  const [userId, setUserId] = useState(useLocate.state?.UserId);
  const [addressData, setAddressData] = useState({
    provinceForm: "",
    districtForm: "",
    wardForm: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    name: "",
    phone: "",
    zalo: "",
    socialLink: "",
    status: "Còn Phòng",
    price: "",
    area: "",
    otherFee: "",
    placesNearby: "",
    typeRoom: "",
    description: "",
    furniture: "",
    rule: "",
    dateCreateAt: "",
    userId: userId,
  });
  console.log("render ne", formData);
  console.log("userId", userId);

  const getDate = () => {
    console.log("function date ne");
    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    return date;
  };

  const validate = (formData) => {
    let isInvalidCount = true;
    const IsNull = (value, i, title) => {
      if (value.trim() === "") {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: i, msg: `ban chua nhap ${title} ` },
        ]);
        isInvalidCount = false;
      }
    };
    const IsAddressNull = () => {
      for (let i in addressData) {
        if (addressData[i] === "") {
          setIsInvalid((prevState) => [
            ...prevState,
            { name: i, msg: `Trường này là bắt buộc ` },
          ]);
          isInvalidCount = false;
        }
      }
    };
    const IsNumber = (value, i) => {
      const result = validator.isInt(value);

      if (!result) {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: i, msg: `Vui lòng chỉ nhập số ` },
        ]);
        isInvalidCount = false;
      }
    };

    const IsPrice = (value, i, option) => {
      const result = validator.isFloat(value, option);

      if (!result) {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: i, msg: `Vui lòng nhập dưới 100(tr)` },
        ]);
        isInvalidCount = false;
      }
    };

    const IsPhone = (value, i) => {
      const result = validator.isMobilePhone(value);

      if (!result) {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: i, msg: `số điện thoại không hợp lệ` },
        ]);
        isInvalidCount = false;
      }
    };
    const IsUrl = (value, i) => {
      const result = validator.isURL(value);

      if (!result) {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: i, msg: `Vui lòng nhập đúng URL` },
        ]);
        isInvalidCount = false;
      }
    };
    for (let i in formData) {
      if (i === "address") {
        const title = `địa chỉ`;
        IsNull(formData[i], i, title);
        IsAddressNull();
      }
      if (i === "typeRoom") {
        const title = `Loại phong`;
        IsNull(formData[i], i, title);
      }
      if (i === "price") {
        const title = `Giá`;
        const option = { min: 0, max: 100 };
        IsNull(formData[i], i, title);
        IsPrice(formData[i], i, option);
      }
      if (i === "description") {
        const title = `Mô tả`;
        IsNull(formData[i], i, title);
      }
      if (i === "name") {
        const title = `Tên`;
        IsNull(formData[i], i, title);
      }
      if (i === "area") {
        formData[i] && IsNumber(formData[i], i);
      }
      if (i === "phone") {
        const title = `Số điện thoại`;

        IsNull(formData[i], i, title);
        IsPhone(formData[i], i);
      }
      if (i === "zalo") {
        formData[i] && IsPhone(formData[i], i);
      }
      if (i === "socialLink") {
        formData[i] && IsUrl(formData[i], i);
      }
      if (i === "placesNearby") {
        const title = `Tiện ích gần đây`;

        IsNull(formData[i], i, title);
      }
    }
    return isInvalidCount;
  };

  const handleSubmitPost = () => {
    let IsError = validate(formData);

    if (IsError) {
      console.log("set date ne");

      const getApiUser = async () => {
        console.log("call ne");

        const response = await callApiCreatePost(formData);
        console.log("submit form thành công", response.data);
      };
      getApiUser();
    }
  };
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      dateCreateAt: getDate(),
    }));
    const callProvinceApi = async () => {
      const response = await getProvince();
      if (response.status === 200) {
        setProvinces(response?.data.results);
      }
    };
    callProvinceApi();
  }, []);

  useEffect(() => {
    setDistrict(null);
    setWard(null);
    setDistricts([]);
    setWards(null);
    const callDistrictApi = async () => {
      const response = await getDistrict(province);
      if (response.status === 200) {
        setDistricts(response?.data.results);
      }
    };
    province && callDistrictApi();
    province || setDistricts([]);
  }, [province]);

  useEffect(() => {
    setWard(null);
    const callWardtApi = async () => {
      const response = await getWard(district);
      if (response.status === 200) {
        setWards(response?.data.results);
      }
    };
    district && callWardtApi();
    district || setWards([]);
  }, [district]);

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      address: `${addressData.wardForm ? `${addressData.wardForm}, ` : ""} ${addressData.districtForm ? `${addressData.districtForm}, ` : ""} ${addressData.provinceForm ? `${addressData.provinceForm}` : ""}`,
    }));
  }, [addressData]);

  return (
    <>
      <div className="my-4 m-auto bg-white sm:w-4/5 w-full border  shadow-xl px-4 sm:px-8 md:mx-auto">
        <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
          <div className="shrink-0 mr-auto sm:py-3">
            <p className="font-medium"> Đăng bài</p>
            <p className="text-sm text-gray-600">
              Vui lòng nhập thông tin chính xác để được duyệt!
            </p>
          </div>
          <button className="mr-2 hidden rounded-lg border-2 px-[10px]  py-[5px] font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">
            Hủy
          </button>
          <button className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-[10px] py-[5px] font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">
            Đăng
          </button>
        </div>

        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium"> Thông Tin Liên hệ</p>
        </div>

        <InputNewPost
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
          title={"Tên"}
          id={"name"}
          setFormData={setFormData}
        />
        <InputNewPost
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
          title={"Số điện thoại"}
          id={"phone"}
          setFormData={setFormData}
        />

        <InputNewPost
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
          title={"zalo"}
          id={"zalo"}
          setFormData={setFormData}
        />
        <InputNewPost
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
          title={"Mạng xã hội"}
          id={"socialLink"}
          setFormData={setFormData}
        />

        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium"> Địa chỉ </p>
        </div>
        <Form.Item
          label="Địa chỉ"
          style={{ display: "flex" }}
          rules={[
            {
              required: true,
              message: `bạn phải nhập Địa chỉ`,
            },
          ]}
        >
          <div className="flex">
            <AddressNewPostProvince
              setIsInvalid={setIsInvalid}
              IsInValid={IsInValid}
              name={"provinceForm"}
              value={provinces}
              setProvince={setProvince}
              setAddressData={setAddressData}
              style={{ paddingRight: "10px" }}
            />
            {/* {console.log("districts.length ", districts.length)} */}
            {/* {province ? ( */}
            <AddressNewPostDistrict
              setIsInvalid={setIsInvalid}
              IsInValid={IsInValid}
              name={"districtForm"}
              value={districts}
              setDistrict={setDistrict}
              setAddressData={setAddressData}
              district={district}
            />
            <AddressNewPostWard
              setIsInvalid={setIsInvalid}
              IsInValid={IsInValid}
              name={"wardForm"}
              value={wards}
              setWard={setWard}
              setAddressData={setAddressData}
            />
          </div>
        </Form.Item>
        <InputReadOnly
          title={"Xác nhận lại địa chỉ"}
          value={formData.address}
        />
        {/* thong tin phong */}
        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium"> thông Tin Phòng</p>
        </div>
        <InputNewPost
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
          title={"Tiêu đề"}
          id={"title"}
          setFormData={setFormData}
        />
        <SelectNewPost
          id={"typeRoom"}
          placeholder={"Chọn Loại"}
          typeRoom={TypeRoom}
          setFormData={setFormData}
          title={"Phân Loại"}
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
        />
        <TextAreaNewPost
          title={"Mô tả phòng"}
          id={"description"}
          rows={4}
          setFormData={setFormData}
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
        />
        <InputNewPost
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
          title={"Tiện ích xung quanh"}
          id={"placesNearby"}
          setFormData={setFormData}
        />
        <InputNewPost
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
          title={"Nội thất"}
          id={"furniture"}
          setFormData={setFormData}
        />
        <InputNewPost
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
          title={"Giá"}
          id={"price"}
          prefix="$"
          suffix="tr/tháng"
          setFormData={setFormData}
        />
        <InputNewPost
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
          prefix="$"
          suffix="m2"
          title={"Diện tích"}
          id={"area"}
          setFormData={setFormData}
        />
        <InputNewPost
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
          title={"Chi Phí khác"}
          id={"otherFee"}
          setFormData={setFormData}
        />

        <TextAreaNewPost
          title={"Quy định"}
          id={"rule"}
          rows={4}
          setFormData={setFormData}
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
        />
        {/* <Button className="bg-blue-400 text-white "  >Đăng Bài</Button> */}
        <button
          onClick={handleSubmitPost}
          className="rounded-lg py-[5px] border-2 border-transparent bg-blue-500 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
        >
          Đăng bài
        </button>
      </div>
    </>
  );
};

export default NewPost;
