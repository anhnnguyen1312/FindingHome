import React from "react";
import {Select} from "antd";
const Address = ({ name, setData }) => {
  const handeChangeSelect = (value) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("e id ", value, e);
  };
  console.log("name setData", name, setData);

  return (
    <>
      <Select
        onChange={(value, e) => handeChangeSelect(value, e)}
      >
        <Select.Option value="phong">Phòng</Select.Option>
        <Select.Option value="canho">Căn hộ</Select.Option>
        <Select.Option value="matbang">Mặt bằng</Select.Option>
      </Select>
    </>
  );
};

export default Address;
