import React from "react";
import { Select } from "antd";
export const AddressNewPostProvince = ({
  name,
  setAddressData,
  setProvince,
  value,
  IsInValid,
  setIsInvalid,
  valueSelect,
  provinceForm,
}) => {
  const handeChangeSelect = (e) => {
    setProvince(e);
    setAddressData((prevState) => ({
      ...prevState,
      [name]: e
        ? value?.find((province) => province.province_id === e)?.province_name
        : "",
      districtForm: "",
      wardForm: "",
    }));
  };
  const handeFocus = () => {
    setIsInvalid([]);
  };
  return (
    <div className="flex flex-col mb-2 w-[33%]">
      <Select
        placeholder="Chọn tỉnh/Thành phố"
        style={{
          width: 200,
        }}
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
      wardForm: "",
    }));
  };
  const handeFocus = () => {
    setIsInvalid([]);
  };
  return (
    <div className="flex flex-col mb-2  w-[33%]">
      <Select
        placeholder="Chọn Quận/huyện"
        style={{
          width: 200,
        }}
        allowClear={false}
        value={districtForm}
        onFocus={() => handeFocus()}
        // defaultValue={value[0].district_name}
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
  // console.log("name address setaddress", value[0].district_name);
  const handeChangeSelect = (e) => {
    setWard(e);

    setAddressData((prevState) => ({
      ...prevState,
      [name]: e ? value?.find((ward) => ward.ward_id === e)?.ward_name : "",
    }));
  };
  const handeFocus = () => {
    setIsInvalid([]);
  };
  return (
    <div className="flex flex-col mb-2  w-[33%]">
      <Select
        placeholder="Chọn Phường/xã"
        style={{
          width: 200,
        }}
        allowClear={false}
        value={wardForm}
        onFocus={() => handeFocus()}
        // defaultValue={value[0].district_name}
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
// export AddressNewPost;
