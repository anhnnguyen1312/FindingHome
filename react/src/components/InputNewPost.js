import React from "react";
import { Form, Input } from "antd";

const InputNewPost = ({
  title,
  id,
  IsInValid,
  setIsInvalid,
  setFormData,
  prefix,
  suffix,
  value,
}) => {
  const handeChangeSelect = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handeFocus = () => {
    setIsInvalid([]);
  };

  return (
    <div className="flex flex-col mb-2">
      <Form.Item label={title}>
        <Input
          value={value}
          prefix={prefix || ""}
          suffix={suffix || ""}
          id={id}
          onChange={(e) => handeChangeSelect(e)}
          onFocus={() => handeFocus()}
        />
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

export default InputNewPost;
