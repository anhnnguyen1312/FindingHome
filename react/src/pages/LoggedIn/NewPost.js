import React, { useState, useEffect } from "react";
import Address from "../../components/address";
import { getProvince, getDistrict, getWard } from "../../api/getProvince";
import { Flex, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePostActionClearData } from "../../redux/store/action/postAction";
import {
  AddressNewPostProvince,
  AddressNewPostDistrict,
  AddressNewPostWard,
} from "../../components/AddressNewPost";
import { path } from "../../ultils/path";
// import InputNewPost from "../../components/InputNewPost";
// import TextAreaNewPost from "../../components/TextAreaNewPost";
// import SelectNewPost from "../../components/SelectNewPost";
import {
  InputReadOnly,
  formatDate,
  InputNewPost,
  TextAreaNewPost,
  SelectNewPost,
  Loading,
} from "../../components/index";
import TypeRoom from "../../data/TypeRoom";
import validator from "validator";
import { callApiCreatePost, callApiUpdatePost } from "../../api/getPostApi";
import { useLocation, useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import { callApiUploadImages } from "../../api/uploadImage";
import swal from "sweetalert";
import Location_NewPost from "../../components/Location_NewPost";

const NewPost = ({ updatePostData }) => {
  const usenavi = useNavigate();

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [IsInValid, setIsInvalid] = useState([]);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stateAuth = useSelector((state) => state.auth);
  // const { updatePostData } = useSelector((state) => state.post);

  const [addressData, setAddressData] = useState({
    provinceForm: null,
    districtForm: null,
    wardForm: null,
    streetForm: null,
  });

  const [formData, setFormData] = useState(() => {
    const data = {
      title: updatePostData?.title || "",
      address: updatePostData?.address || "",
      zalo: updatePostData?.zalo || "",
      status: "0",
      price: updatePostData?.price || "",
      area: updatePostData?.area || "",
      otherFee: updatePostData?.otherFee || "",
      nearby: updatePostData?.nearby || "",
      typeRoom: updatePostData?.typeRoom || "",
      description: updatePostData?.description || "",
      furniture: updatePostData?.furniture || "",
      rule: updatePostData?.rule || "",
      dateCreateAt: updatePostData?.dateCreateAt || "",
      dateExpired: updatePostData?.dateExpired || "",
      userId: updatePostData?.userId || "",
      check: stateAuth.data.role === "1" ? "1" : "0",
      urlImages: updatePostData?.urlImages || "",
      lat: updatePostData?.lat || 0,
      lng: updatePostData?.lng || 0,
      userRole: stateAuth.data.role
    };
    return data;
  });
  const handleNavigateToLogin = () => {
    navigate(path.HOME);
  };
  const handleFiles = async (e) => {
    setIsInvalid([]);
    setLoading(true);
    let images = [];
    const files = e.target.files;

    let dataImages = new FormData();
    for (let file of files) {
      dataImages.append("file", file);
      dataImages.append("upload_preset", "ml_default");

      try {
        const response = await callApiUploadImages(dataImages);
        if (response.status === 200)
          images = [...images, response.data?.secure_url];
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
  };
  const handleCancelPost = () => {
    window.location.href = `/logged-in/${path.PROFILE}`;
    localStorage?.removeItem("currentPage");
  };

  const handleResetClick = () => {
    setPreview(null);
  };
  const handleDeleteImage = (image) => {
    setPreview((prev) => prev?.filter((item) => item !== image));
    setFormData((prev) => ({
      ...prev,
      urlImages: prev.urlImages?.filter((item) => item !== image),
    }));
  };

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

        IsNullImage(formData[i], i, title);
      }
    }
    return isInvalidCount;
  };

  const handleSubmitPost = () => {
    setLoading(true);
    let IsError = validate(formData);
    // let IsError = true;
    if (IsError) {
      if (updatePostData) {
        const PostNewPost = async () => {
          try {
            const response = await callApiUpdatePost(formData);
            if (response.data.fail) {
              swal({
                text: response.data.fail,
                icon: "error",
                timer: 2000,
              });
            } else {
              swal({
                text: response.data.success,
                icon: "success",
                timer: 2000,
              }).then(() => dispatch(UpdatePostActionClearData()));
            }
            console.log("submit form thành công", response);
          } catch (error) {
            setLoading(false);
            console.log(error);
            swal({
              text: "Cập nhật bài đăng không thành công",
              icon: "error",
              timer: 2000,
            });
          }
        };
        PostNewPost();
        setLoading(false);
      } else {
        const PostNewPost = async () => {
          try {
            const response = await callApiCreatePost(formData);
            if (response.data.fail) {
              swal({
                text: response.data.fail,
                icon: "error",
                timer: 2000,
              });
            } else {
              swal({
                text: response.data.success,
                icon: "success",
                timer: 2000,
              });

              window.location.reload();
            }
          } catch (error) {
            setLoading(false);
            console.log("error", error);
            swal({
              text: "Tạo bài đăng mới không thành công",
              icon: "error",
              timer: 2000,
            });
          }
        };
        PostNewPost();
        setLoading(false);
      }
    }
    setLoading(false);
  };
  console.log("role", stateAuth.data.role);

  useEffect(() => {
    // const handleDate = () => {
    //   const today = new Date();
    //   const endDate = new Date(new Date().setDate(today.getDate() + 90));
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     dateCreateAt: formatDate(today),
    //     dateExpired: formatDate(endDate),
    //   }));
    // };
    // handleDate();
    const callProvinceApi = async () => {
      try {
        const response = await getProvince();

        if (response.status === 200) {
          setProvinces(response?.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    callProvinceApi();
  }, []);
  useEffect(() => {
    // if (updatePostData) {
    //   setPreview(updatePostData?.urlImages);
    //   let addressData = updatePostData?.address?.split(",");
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     ["id"]: updatePostData?.id,
    //   }));
    //   setAddressData({
    //     provinceForm: addressData[addressData?.length - 1],

    //     districtForm: addressData[addressData?.length - 2],
    //     wardForm: addressData[addressData?.length - 3],
    //     streetForm: addressData[addressData?.length - 4],
    //   });
    //   console.log("setAddressData");
    // }
    if (updatePostData) {
      setPreview(updatePostData ? updatePostData?.urlImages : "");
      let addressData = updatePostData
        ? updatePostData?.address?.split(",")
        : "";
      if (updatePostData) {
        setFormData((prevState) => ({
          ...prevState,
          ["id"]: updatePostData?.id,
        }));
      }
      setAddressData({
        provinceForm: addressData[addressData?.length - 1],

        districtForm: addressData[addressData?.length - 2],
        wardForm: addressData[addressData?.length - 3],
        streetForm: addressData[addressData?.length - 4],
      });
    }
  }, [updatePostData]);

  // useEffect(() => {
  //   if (updatePostData || ReUpPostData) {
  //     // let addressData = updatePostData?.address?.split(",");
  //     let addressData = updatePostData
  //       ? updatePostData?.address?.split(",")
  //       : ReUpPostData?.address?.split(",");

  //     let userProvince =
  //       provinces.length > 0 &&
  //       provinces?.find(
  //         (province) =>
  //           province.province_name ===
  //           addressData[addressData?.length - 1]?.trim()
  //       );
  //     console.log("userProvince", userProvince);
  //     userProvince && setProvince(userProvince);
  //   }
  // }, [provinces]);
  console.log("province", province);
  console.log("formData", formData);

  console.log("addressData", addressData);

  // useEffect(() => {
  //   if (updatePostData || ReUpPostData) {
  //     // let addressData = updatePostData?.address?.split(",");
  //     let addressData = updatePostData
  //       ? updatePostData?.address?.split(",")
  //       : ReUpPostData?.address?.split(",");

  //     let userDistrict =
  //       districts.length > 0 &&
  //       districts?.find(
  //         (district) =>
  //           district.district_name ===
  //           addressData[addressData?.length - 2]?.trim()
  //       );

  //     userDistrict && setDistrict(userDistrict);
  //   }
  // }, [districts]);

  // useEffect(() => {
  //   if (updatePostData || ReUpPostData) {
  //     // let addressData = updatePostData?.address?.split(",");
  //     let addressData = updatePostData
  //       ? updatePostData?.address?.split(",")
  //       : ReUpPostData?.address?.split(",");

  //     let userWard =
  //       wards?.length > 0 &&
  //       wards?.find(
  //         (ward) =>
  //           ward.ward_name === addressData[addressData?.length - 3]?.trim()
  //       );

  //     userWard && setWard(userWard);
  //   }
  // }, [wards]);

  useEffect(() => {
    if (!updatePostData) {
      const today = new Date();
      const endDate = new Date(new Date().setDate(today.getDate() + 90));
      setFormData((prevState) => ({
        ...prevState,
        dateCreateAt: formatDate(today),
        dateExpired: formatDate(endDate),
      }));
    }
  }, []);

  useEffect(() => {
    setDistrict(null);
    setWard(null);
    setDistricts([]);
    setWards(null);

    const callDistrictApi = async () => {
      try {
        const response = await getDistrict(province.province_id || province);
        if (response.status === 200) {
          setDistricts(response?.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    province && callDistrictApi();
    province || setDistricts([]);
  }, [province]);

  useEffect(() => {
    setWard(null);
    const callWardtApi = async () => {
      try {
        const response = await getWard(district.district_id || district);
        if (response.status === 200) {
          setWards(response?.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    district && callWardtApi();
    district || setWards([]);
  }, [district]);

  useEffect(() => {
    // if (updatePostData) {
    ward &&
      setFormData((prevState) => ({
        ...prevState,
        userId: stateAuth.data.userId,
      }));
    // }
  }, [ward]);

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      address: ` ${addressData.streetForm ? `${addressData.streetForm}, ` : ""} ${addressData.wardForm ? `${addressData.wardForm}, ` : ""} ${addressData.districtForm ? `${addressData.districtForm}, ` : ""} ${addressData.provinceForm ? `${addressData.provinceForm}` : ""}`,
    }));
  }, [addressData]);

  return (
    <>
      <div className="my-4 m-auto bg-white  w-full border  shadow-xl px-4 sm:px-8 md:mx-auto">
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
              value={formData.zalo}
              setIsInvalid={setIsInvalid}
              IsInValid={IsInValid}
              title={"zalo"}
              id={"zalo"}
              setFormData={setFormData}
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
            className="flex-col"
          >
            <div className="flex gap-[10px] md:flex-row flex-col ">
              <AddressNewPostProvince
                setIsInvalid={setIsInvalid}
                IsInValid={IsInValid}
                name={"provinceForm"}
                value={provinces}
                provinceForm={addressData.provinceForm}
                // valueSelect={addressData.provinceForm}
                // valueSelect={province.province_name}
                setProvince={setProvince}
                setAddressData={setAddressData}
                style={{ paddingRight: "10px" }}
              />

              <AddressNewPostDistrict
                setIsInvalid={setIsInvalid}
                IsInValid={IsInValid}
                name={"districtForm"}
                value={districts}
                districtForm={addressData.districtForm}
                valueSelect={district?.district_name}
                setDistrict={setDistrict}
                setAddressData={setAddressData}
                district={district}
              />
              <AddressNewPostWard
                setIsInvalid={setIsInvalid}
                IsInValid={IsInValid}
                name={"wardForm"}
                wardForm={addressData.wardForm}
                value={wards}
                valueSelect={ward?.ward_name}
                setWard={setWard}
                setAddressData={setAddressData}
              />
            </div>
          </Form.Item>
          <InputNewPost
            value={addressData.streetForm}
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
            title={"Số nhà, tên đường"}
            id={"streetForm"}
            setFormData={setAddressData}
          />
          <InputReadOnly title={"Địa chỉ đầy đủ"} value={formData.address} />
          <div className="shrink-0 mr-auto sm:py-3">
            <p className="font-medium"> Chọn tọa độ trên bản đồ</p>
          </div>
          <Location_NewPost lat={formData.lat} lng={formData.lng} />
          {/* thong tin phong */}
          <div className="shrink-0 mr-auto sm:py-3">
            <p className="font-medium"> Thông Tin Phòng</p>
          </div>
          <InputNewPost
            value={formData.title}
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
            valueSelect={formData.typeRoom}
            setFormData={setFormData}
            title={"Phân Loại"}
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
          />
          <TextAreaNewPost
            value={formData.description}
            title={"Mô tả phòng"}
            id={"description"}
            rows={4}
            setFormData={setFormData}
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
          />
          <InputNewPost
            value={formData.nearby}
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
            title={"Tiện ích xung quanh"}
            id={"nearby"}
            setFormData={setFormData}
          />
          <InputNewPost
            value={formData.furniture}
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
            title={"Nội thất"}
            id={"furniture"}
            setFormData={setFormData}
          />
          <InputNewPost
            value={formData.price}
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
            title={"Giá"}
            id={"price"}
            suffix="triệu/tháng"
            setFormData={setFormData}
          />
          <InputNewPost
            value={formData.area}
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
            suffix="m&#178;"
            title={"Diện tích"}
            id={"area"}
            setFormData={setFormData}
          />
          <InputNewPost
            value={formData.otherFee}
            setIsInvalid={setIsInvalid}
            IsInValid={IsInValid}
            title={"Chi Phí khác"}
            id={"otherFee"}
            rows={4}
            setFormData={setFormData}
          />

          <TextAreaNewPost
            value={formData.rule}
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
          {IsInValid && IsInValid.length > 0
            ? IsInValid.some((element) => element.name === "urlImages") && (
                <span className="italic text-[#f33a58] text-center text-xl">
                  {" "}
                  {IsInValid.find((e) => e.name === "urlImages")?.msg}{" "}
                </span>
              )
            : ""}
          {loading && <Loading />}
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
                          <i className="fa-solid fa-x"></i>
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
            onClick={handleCancelPost}
            className="mr-4 rounded-lg border-2 px-4 py-2 py-[5px] my-[20px] font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200"
          >
            Quay về
          </button>
          <button
            onClick={handleSubmitPost}
            className="rounded-lg py-[5px] my-[20px] border-2 border-transparent bg-blue-500 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
          >
            {updatePostData ? "Lưu Cập nhật" : "Đăng bài"}
          </button>
        </div>
      </div>
    </>
  );
};

export default NewPost;
