import React from "react";
import { Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export const AddressNewPostProvince = ({
  name,
  setAddressData,
  setProvince,
  value,
  IsInValid,
  setIsInvalid,
  provinceForm,
}) => {
  const handeChangeSelect = (e) => {
    console.log("e", e);
    setProvince(e);
    setAddressData((prevState) => ({
      ...prevState,
      [name]: e
        ? value?.find((province) => province.province_id === e)?.province_name
        : "",
      districtForm: null,
      wardForm: null,
      streetForm: null,
    }));
  };
  const handeFocus = () => {
    setIsInvalid && setIsInvalid([]);
  };
  return (
    <div className="flex flex-col mb-2 w-[100%] md:grow ">
      <Select
        placeholder="Chọn tỉnh/Thành phố"
        allowClear={
          <CloseOutlined style={{ fontSize: "20px", color: "#FF0000" }} />
        }
        showSearch
        value={provinceForm}
        onFocus={() => handeFocus()}
        onChange={(e) => handeChangeSelect(e)}
        options={value?.map((province) => ({
          label: province.province_name,
          value: province.province_id,
        }))}
      ></Select>
      {IsInValid && IsInValid.length > 0
        ? IsInValid.some((element) => element.name === name) && (
            <span className="italic text-[#f33a58] text-center text-xl">
              {" "}
              {IsInValid.find((e) => e.name === name)?.msg}{" "}
            </span>
          )
        : ""}
    </div>
  );
};
export const AddressNewPostDistrict = ({
  name,
  setAddressData,
  setDistrict,
  value,
  district,
  IsInValid,
  setIsInvalid,
  valueSelect,
  districtForm,
}) => {
  const handeChangeSelect = (e) => {
    setDistrict(e);
    setAddressData((prevState) => ({
      ...prevState,
      [name]: e
        ? value?.find((district) => district.district_id === e)?.district_name
        : "",
      wardForm: null,
      streetForm: null,
    }));
  };
  const handeFocus = () => {
    setIsInvalid && setIsInvalid([]);
  };
  return (
    <div className="flex flex-col mb-2 w-[100%] md:grow ">
      <Select
        placeholder="Chọn Quận/huyện"
        allowClear={
          <CloseOutlined style={{ fontSize: "20px", color: "#FF0000" }} />
        }
        value={districtForm}
        onFocus={() => handeFocus()}
        onChange={(e) => handeChangeSelect(e)}
        options={value?.map((district) => ({
          label: district.district_name,
          value: district.district_id,
        }))}
      ></Select>
      {IsInValid && IsInValid.length > 0
        ? IsInValid.some((element) => element.name === name) && (
            <span className="italic text-[#f33a58] text-center text-xl">
              {" "}
              {IsInValid.find((e) => e.name === name)?.msg}{" "}
            </span>
          )
        : ""}
    </div>
  );
};

export const AddressNewPostWard = ({
  name,
  setAddressData,
  setWard,
  value,
  IsInValid,
  setIsInvalid,
  valueSelect,
  wardForm,
}) => {
  const handeChangeSelect = (e) => {
    setWard(e);

    setAddressData((prevState) => ({
      ...prevState,
      [name]: e ? value?.find((ward) => ward.ward_id === e)?.ward_name : "",
      streetForm: null,
    }));
  };
  const handeFocus = () => {
    setIsInvalid && setIsInvalid([]);
  };
  return (
    <div className="flex flex-col mb-2 w-[100%] md:grow ">
      <Select
        placeholder="Chọn Phường/xã"
        allowClear={
          <CloseOutlined style={{ fontSize: "20px", color: "#FF0000" }} />
        }
        value={wardForm}
        onFocus={() => handeFocus()}
        onChange={(e) => handeChangeSelect(e)}
        options={value?.map((ward) => ({
          label: ward.ward_name,
          value: ward.ward_id,
        }))}
      ></Select>
      {IsInValid && IsInValid.length > 0
        ? IsInValid.some((element) => element.name === name) && (
            <span className="italic text-[#f33a58] text-center text-xl">
              {" "}
              {IsInValid.find((e) => e.name === name)?.msg}{" "}
            </span>
          )
        : ""}
    </div>
  );
};
