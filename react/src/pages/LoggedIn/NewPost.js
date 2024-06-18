import React, { useState, useEffect } from "react";
import Address from "../../components/address";
import { getProvince, getDistrict, getWard } from "../../api/getProvince";
import { Flex, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  AddressNewPostProvince,
  AddressNewPostDistrict,
  AddressNewPostWard,
} from "../../components/AddressNewPost";
// import InputNewPost from "../../components/InputNewPost";
// import TextAreaNewPost from "../../components/TextAreaNewPost";
// import SelectNewPost from "../../components/SelectNewPost";
import {
  InputReadOnly,
  formatDate,
  InputNewPost,
  TextAreaNewPost,
  SelectNewPost,
} from "../../components/index";
import TypeRoom from "../../data/TypeRoom";
import validator from "validator";
import { callApiCreatePost } from "../../api/getPostApi";
import { useLocation } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import { callApiUploadImages } from "../../api/uploadImage";
const NewPost = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [IsInValid, setIsInvalid] = useState([]);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);

  const stateAuth = useSelector((state) => state.auth);

  const [addressData, setAddressData] = useState({
    numberAddress: "",
    provinceForm: "",
    districtForm: "",
    wardForm: "",
  });

  const [formData, setFormData] = useState({
    title: "",
    address: "",
    zalo: "",
    status: "0",
    price: "",
    area: "",
    otherFee: "",
    nearby: "",
    typeRoom: "",
    description: "",
    furniture: "",
    rule: "",
    dateCreateAt: "",
    dateExpired: "",
    userId: "",
    check: "0",
    urlImages: "",
  });

  const handleFiles = async (e) => {
    setLoading(true);
    let images = [];
    const files = e.target.files;

    let dataImages = new FormData();
    for (let file of files) {
      dataImages.append("file", file);
      dataImages.append("upload_preset", "ml_default");
      console.log("dataImages", dataImages.upload_preset);

      try {
        const response = await callApiUploadImages(dataImages);
        if (response.status === 200)
          images = [...images, response.data?.secure_url];
        console.log("images gop api tải lên từng ảnh", images);
      } catch (error) {
        setLoading(false);
      }
    }
    setLoading(false);
    setPreview((prev) => [...prev, ...images]);
    setFormData((prev) => ({
      ...prev,
      urlImages: [...prev.urlImages, ...images],
    }));
    console.log("setFormData sau chọn file 1 lần", formData);
  };
  console.log("setFormData sau khi reder lại ra ngoài", formData);

  const handleResetClick = () => {
    setPreview(null);
    // setFormData((prev) => ({
    //   ...prev,
    //   urlImages: "",
    // }));
  };
  const handleDeleteImage = (image) => {
    setPreview((prev) => prev?.filter((item) => item !== image));
    setFormData((prev) => ({
      ...prev,
      urlImages: prev.urlImages?.filter((item) => item !== image),
    }));
  };

  console.log(("IsInValid", IsInValid));
  const validate = (formData) => {
    let isInvalidCount = true;
    const IsNull = (value, i, title) => {
      if (value.trim() === "") {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: i, msg: `bạn chưa ${title} ` },
        ]);
        isInvalidCount = false;
      }
    };
    const IsNullImage = (value, i, title) => {
      if (!(value.length > 0)) {
        setIsInvalid((prevState) => [
          ...prevState,
          { name: i, msg: `bạn chưa tải ${title} ` },
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
    };
    for (let i in formData) {
      if (i === "address") {
        const title = `chọn Khu vực`;
        IsNull(formData[i], i, title);
        IsAddressNull();
      }
      if (i === "typeRoom") {
        const title = `chọn Loại phòng`;
        IsNull(formData[i], i, title);
      }
      if (i === "price") {
        const title = `nhập Giá`;
        const option = { min: 0, max: 100 };
        IsNull(formData[i], i, title);
        IsPrice(formData[i], i, option);
      }
      if (i === "title") {
        const title = `nhập tiêu đề`;
        IsNull(formData[i], i, title);
      }
      if (i === "name") {
        const title = `Tên`;
        IsNull(formData[i], i, title);
      }
      if (i === "area") {
        formData[i] && IsNumber(formData[i], i);
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

      if (i === "urlImages") {
        const title = `Ảnh`;
        // console.log(formData.urlImages.length)

        IsNullImage(formData[i], i, title);
      }
    }
    return isInvalidCount;
  };

  const handleSubmitPost = () => {
    let IsError = validate(formData);
    // let IsError = true;
    if (IsError) {
      const PostNewPost = async () => {
        const response = await callApiCreatePost(formData);
        console.log("submit form thành công", response.data);
      };
      PostNewPost();
    }
  };

  useEffect(() => {
    const handleDate = () => {
      const today = new Date();
      const endDate = new Date(new Date().setDate(today.getDate() + 90));
      setFormData((prevState) => ({
        ...prevState,
        dateCreateAt: formatDate(today),
        dateExpired: formatDate(endDate),
      }));
    };
    handleDate();
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
    ward &&
      setFormData((prevState) => ({
        ...prevState,
        userId: stateAuth.data.userId,
      }));
  }, [ward]);
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      address: ` ${addressData.numberAddress ? `${addressData.numberAddress}, ` : ""} ${addressData.wardForm ? `${addressData.wardForm}, ` : ""} ${addressData.districtForm ? `${addressData.districtForm}, ` : ""} ${addressData.provinceForm ? `${addressData.provinceForm}` : ""}`,
    }));
  }, [addressData]);

  return (
    <>
      <div className="my-4 m-auto bg-white sm:w-4/5 w-full border  shadow-xl px-4 sm:px-8 md:mx-auto">
        <div>
          <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
            <div className="shrink-0 mr-auto sm:py-3">
              <p className="font-medium"> Đăng bài</p>
              <p className="text-sm text-gray-600">
                Vui lòng nhập thông tin chính xác để được duyệt!
              </p>
            </div>
          </div>

          <div className="shrink-0 mr-auto sm:py-3">
            <p className="font-medium"> Thông Tin Liên hệ</p>
          </div>

          <InputReadOnly value={stateAuth.data.name} />
          <InputReadOnly value={stateAuth.data.phone} />

          <div className="mt-[40px]">
            <InputNewPost
              setIsInvalid={setIsInvalid}
              IsInValid={IsInValid}
              title={"zalo"}
              id={"zalo"}
              setFormData={setFormData}
            />
          </div>

          <div className="mt-[20px]">
          <InputNewPost
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
            title={"Số nhà, tên đường"}
            id={"numberAddress"}
            setFormData={setAddressData}
          />
          </div>

          <Form.Item
            label="Khu vực"
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
          <InputReadOnly title={"Địa chỉ đầy đủ"} value={formData.address} />
          {/* thong tin phong */}
          <div className="shrink-0 mr-auto sm:py-3">
            <p className="font-medium"> Thông Tin Phòng</p>
          </div>
          <InputNewPost
            id={"title"}
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
            title={"Tiêu đề"}
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
            title={"Mô tả"}
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
            id={"nearby"}
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
            suffix="triệu/tháng"
            setFormData={setFormData}
          />
          <InputNewPost
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
            suffix="m&#178;"
            title={"Diện tích"}
            id={"area"}
            setFormData={setFormData}
          />
          <TextAreaNewPost
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
            title={"Chi Phí khác"}
            id={"otherFee"}
            rows={4}
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
        </div>
        {/* // xu li anh */}
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="font-semibold text-xl py-2">Hình ảnh</h2>

          <label
            className="w-[100px] border-2 h-[100px] my-4 gap-4 flex flex-col items-center justify-center border-gray-200 border-dashed rounded-md"
            htmlFor="file"
          >
            <div className="flex flex-col items-center justify-center">
              <PlusOutlined />
              Upload
            </div>
          </label>
          <input onChange={handleFiles} hidden type="file" id="file" multiple />
          {preview && preview.length > 0 ? (
            <div className="w-full">
              {/* <div className="flex items-center justify-between"> */}
              <h3 className="font-medium py-4">Ảnh đã chọn</h3>
              {/* <button
                  onClick={handleResetClick}
                  className="rounded-lg py-[5px] my-[20px] border-2 border-transparent bg-blue-500 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
                >
                  {" "}
                  Xóa tất cả
                </button> */}
              {/* </div> */}
              <div className="flex gap-4 items-center">
                {preview?.map((item) => {
                  return (
                    <div key={item} className="relative w-1/3 h-1/3 ">
                      <img
                        src={item}
                        alt="preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                      <span
                        title="Xóa"
                        onClick={() => handleDeleteImage(item)}
                        className="absolute top-0 right-1   cursor-pointer  rounded-full"
                      >
                        <div className="text-red-600 hover:text-red-300 ">
                          <i class="fa-solid fa-x"></i>
                        </div>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* // button */}
        <div className="flex items-center justify-end">
          <button
            onClick={handleSubmitPost}
            className="rounded-lg py-[5px] my-[20px] border-2 border-transparent bg-blue-500 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
          >
            Đăng bài
          </button>
        </div>
      </div>
    </>
  );
};

export default NewPost;
