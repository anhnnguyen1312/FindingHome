import React from "react";

import { Form, Input } from "antd";
const { TextArea } = Input;
const TextAreaNewPost = ({
  title,
  id,
  IsInValid,
  setIsInvalid,
  setFormData,
  rows,
  value,
}) => {
  const handeChangeSelect = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handeFocus = (e) => {
    setIsInvalid([]);
  };
  return (
    <div className="flex flex-col mb-2">
      <Form.Item label={title}>
        <TextArea
          value={value}
          onFocus={() => handeFocus()}
          rows={rows}
          id={id}
          onChange={(e) => handeChangeSelect(e)}
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

export default TextAreaNewPost;
