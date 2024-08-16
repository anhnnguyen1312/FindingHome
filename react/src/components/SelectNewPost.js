import React from "react";
import { CloseOutlined } from "@ant-design/icons";

import { Form, Select } from "antd";
const SelectNewPost = ({
  placeholder,
  IsInValid,
  setIsInvalid,
  id,
  title,
  typeRoom,
  setFormData,
  style,
}) => {
  const handeChangeSelect = (e) => {
    console.log("e", e, id);
    setFormData((prevState) => ({
      ...prevState,
      [id]: e,
    }));
  };
  const handeFocus = (e) => {
    setIsInvalid && setIsInvalid([]);
  };
  return (
    <>
      <Form.Item label={title}>
        <Select
          placeholder={placeholder}
          onFocus={() => handeFocus()}
          // defaultValue={value[0].district_name}
          onChange={(e) => handeChangeSelect(e)}
          style={style || ""}
          // value={valueSelect}
          allowClear={
            <CloseOutlined style={{ fontSize: "20px", color: "#FF0000" }} />
          }
        >
          {typeRoom?.map((option) => (
            <Select.Option value={option.type_value} key={option.type_value}>
              {option.type_key}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      {IsInValid && IsInValid.length > 0
        ? IsInValid.some((element) => element.name === id) && (
            <span className="italic text-[#f33a58] text-center text-xl">
              {" "}
              {IsInValid.find((e) => e.name === id)?.msg}{" "}
            </span>
          )
        : ""}
    </>
  );
};

export default SelectNewPost;
