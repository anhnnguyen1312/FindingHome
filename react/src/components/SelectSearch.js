import React from "react";
import { Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const SelectSearch = ({ id, placeholder, setSelectData, data, value }) => {
  const handleChange = (e) => {
    console.log("e", e);

    setSelectData((prevState) => ({
      ...prevState,
      [id]: e,
    }));
  };
  const onSearch = (e) => {
    console.log("search:", e);
  };
  return (
    <div className="md:grow  w-full">
      <Select
        placeholder={placeholder}
        style={{ display: "flex" }}
        showSearch
        onSearch={onSearch}
        value={value}
        allowClear={
          <CloseOutlined style={{ fontSize: "20px", color: "#FF0000" }} />
        }
        onChange={(e) => handleChange(e)}
      >
        {data?.map((option) => (
          <Select.Option value={option.type_value} key={option.type_value}>
            {option.type_key}
          </Select.Option>
        ))}
      </Select>
      {/* <CloseOutlined /> */}
    </div>
  );
};

export default SelectSearch;
