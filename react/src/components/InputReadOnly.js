import React from "react";

const InputReadOnly = ({ title, value }) => {
  return (
    <>
      <div className="flex flex-col gap-[10px] mb-[10px]">
        <label className="font-semibold text-md" htmlFor="address">
          {title}
        </label>
        <input
          type="text"
          id="address"
          readOnly
          className="border border-gray-200 outline-none rounded-lg bg-gray-100 p-[7px] w-full"
          value={value || ""}
        />
      </div>
    </>
  );
};

export default InputReadOnly;
