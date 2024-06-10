import React from "react";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Tooltip,
} from "antd";
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
        // key="typeRoom"
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
