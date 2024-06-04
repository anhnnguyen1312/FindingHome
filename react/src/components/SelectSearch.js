import React from "react";
import { Select } from "antd";
const SelectSearch = ({ dataSelect, defaultValue }) => {
  return (
    <div className="md:flex-[20%] w-full">
      <Select
        defaultValue={defaultValue}
        style={{ display: "flex" }}
        // onChange={handleChangeSelectFilter}
        options={dataSelect}
      />
    </div>
  );
};

export default SelectSearch;
