import React, { useState } from "react";

import { Form, Select } from "antd";
const SelectNewPost = ({
  placeholder,
  IsInValid,
  setIsInvalid,
  id,
  title,
  typeRoom,
  setFormData,
}) => {
  const handeChangeSelect = (e) => {
    console.log("e", e, id);
    setFormData((prevState) => ({
      ...prevState,
      [id]: e,
    }));
  };
  const handeFocus = (e) => {
    setIsInvalid([]);
  };
  return (
    <div className="flex flex-col mb-2">
      <Form.Item label={title}>
        <Select
          placeholder={placeholder}
          onFocus={() => handeFocus()}
          // defaultValue={value[0].district_name}
          onChange={(e) => handeChangeSelect(e)}
          options={typeRoom?.map((item) => ({
            label: item.type_key,
            value: item.type_value,
          }))}
        ></Select>
      </Form.Item>
      {IsInValid && IsInValid.length > 0
        ? IsInValid.some((element) => element.name === id) && (
            <span className="italic text-[#f33a58] text-center text-xl">
              {" "}
              {IsInValid.find((e) => e.name === id)?.msg}{" "}
            </span>
          )
        : ""}
    </div>
  );
};

export default SelectNewPost;
