import React from "react";

export default function InputGroup({
  setIsInvalid,
  type,
  labelChild,
  placeholder,
  setFormData,
  value,
  typeInput,
  isInvalid,
}) {
  const handleFormData = (e) => {
    setFormData((prevState) => ({ ...prevState, [typeInput]: e.target.value }));
  };
  const handleOnFocus = (e) => {
    setIsInvalid([]);
  };
  return (
    <div className=" flex flex-col mb-2">
      <label
        htmlFor={typeInput}
        className="text-left text-xl pb-[0.5rem] font-medium leading-7"
      >
        {labelChild}
      </label>
      <div>
        <input
          name={typeInput}
          type={type}
          placeholder={placeholder}
          value={value}
          onFocus={handleOnFocus}
          onChange={(e) => handleFormData(e)}
          className="h-[2.5rem] w-full py-2 px-4 mb-2 border border-[#f1f1f1] rounded outline-none text-xl hover:border-[#1dbfaf]"
        />
      </div>
      {isInvalid.length > 0 &&
        isInvalid.some((element) => element.name === typeInput) && (
          <span className="italic text-[#f33a58] text-center text-xl">
            {" "}
            {isInvalid.find((e) => e.name === typeInput)?.msg}{" "}
          </span>
        )}
    </div>
  );
}
