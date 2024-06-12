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
  const useLocate = useLocation();

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
  console.log(stateAuth.data.name);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 50,
      name: "image.png",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
  ]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFiles = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    let images = [];
    let files = e.target.files;
    console.log("files ne", files);

    let dataImages = new FormData();
    for (let i of files) {
      console.log("i ne", i);

      dataImages.append("file", i);
      dataImages.append("upload_preset", "ml_default");
      console.log("upload_preset", dataImages);

      let response = await callApiUploadImages(dataImages);
      if (response.status === 200)
        images = [...images, response.data?.secure_url];
      // const imageBase64 = btoa(images);
      // const decode = atob(imageBase64);

      // console.log("img", imageBase64);
      console.log("images", images);
      console.log("formData", formData);
      // console.log("imgdecode", decodeimg);
    }
    setIsLoading(false);
    setImagesPreview((prev) => [...prev, ...images]);
    // setFormData((prev) => ({ ...prev, images: [...prev.images, ...images] }));
    setFormData((prev) => ({
      ...prev,
      urlImages: [...prev.urlImages, ...images],
    }));
  };
  const handleDeleteImage = (image) => {
    setImagesPreview((prev) => prev?.filter((item) => item !== image));
    setFormData((prev) => ({
      ...prev,
      urlImages: prev.urlImages?.filter((item) => item !== image),
    }));
  };
  const handleSubmit = () => {};
  // const name = stateAuth.data.name;
  // console.log("render ne", name);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  // const getDate = (date) => {
  //   // const today = new Date();
  //   const dayFormat =
  //     date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  //   return dayFormat;
  // };

  // const expireddate = getDate();
  // var today = new Date();
  // var priorDate = new Date(new Date().setDate(today.getDate() + 90));

  // console.log(today);
  // console.log(priorDate);
  // const day = D;

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
      if (value && value.length > 0) {
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
      // if (i === "urlImages") {
      //   const title = `Ảnh`;
      //   // console.log(formData.urlImages.length)

      //   IsNullImage(formData[i], i, title);
      // }
    }
    return isInvalidCount;
  };

  const handleSubmitPost = () => {
    let IsError = validate(formData);

    if (IsError) {
      const PostNewPost = async () => {
        console.log("call ne");

        const response = await callApiCreatePost(formData);
        console.log("submit form thành công", response.data);
      };
      PostNewPost();
    }
  };

  useEffect(() => {
    // setFormData((prevState) => ({
    //   ...prevState,
    //   // name: stateAuth.data.name,
    //   // phone: stateAuth.data.phone,
    //   // userId: stateAuth.data.userId,
    //   dateCreateAt: getDate(),
    // }));

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
      address: `${addressData.numberAddress ? `${addressData.numberAddress}, ` : ""} ${addressData.wardForm ? `${addressData.wardForm}, ` : ""} ${addressData.districtForm ? `${addressData.districtForm}, ` : ""} ${addressData.provinceForm ? `${addressData.provinceForm}` : ""}`,
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

          {/* <InputNewPost
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
        /> */}

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
              title={"số nhà, tên đường"}
              id={"numberAddress"}
              setFormData={setAddressData}              
            />
          </div>
          {/* <InputNewPost
          setIsInvalid={setIsInvalid}
          IsInValid={IsInValid}
          title={"Mạng xã hội"}
          id={"socialLink"}
          setFormData={setFormData}
        /> */}

          {/* <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium"> Địa chỉ </p>
        </div> */}
          <Form.Item
            label="Khu Vực"
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
            title={"Địa chỉ đầy đủ"}
            value={formData.address}
          />
          {/* thong tin phong */}
          <div className="shrink-0 mr-auto sm:py-3">
            <p className="font-medium"> thông Tin Phòng</p>
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
            prefix="$"
            suffix="tr/tháng"
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
        </div>
        {/* // xu li anh */}
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="font-semibold text-xl py-2">Hình ảnh</h2>

          {/* <Upload
            // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            // action="cloudinary://952597548981537:WzeUtMMq_IoPkc6rk8t1-4wlEG4@dx3nwkh2i"
            action="https://api.cloudinary.com/v1_1/952597548981537:WzeUtMMq_IoPkc6rk8t1-4wlEG4@dx3nwkh2i/image/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton} hello
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{
                display: "none",
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )} */}

          {/* // hinh anh */}
          <label
            className="w-[100px] border-2 h-[100px] my-4 gap-4 flex flex-col items-center justify-center border-gray-200 border-dashed rounded-md"
            htmlFor="file"
          >
            <div className="flex flex-col items-center justify-center">
              {/* <BsCameraFill color='blue' size={50} /> */}
              <PlusOutlined />
              Upload
            </div>
          </label>
          <input onChange={handleFiles} hidden type="file" id="file" multiple />
          <div className="w-full">
            <h3 className="font-medium py-4">Ảnh đã chọn</h3>
            <div className="flex gap-4 items-center">
              {imagesPreview?.map((item) => {
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
