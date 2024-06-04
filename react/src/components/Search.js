import React from "react";
import { Button, SelectSearch } from "./index";
import TypeSearch from "../data/TypeSearch";

const Search = () => {
  return (
    <>
      {/* // <div className=' w-full p-[20px] flex flex-col items-center justify-center gap-[20px] '>
    //   <div className=' flex-col md:flex-row bg-secondary w-full p-[10px] flex items-center justify-center gap-[10px] '> */}
      {TypeSearch.map((item) => {
        return <SelectSearch dataSelect={item} defaultValue={item[0].label} />;
      })}
      <div className="md:flex-[20%] w-full">
        <Button
          children={"Tim kiem"}
          textColor={"text-white"}
          fullWidth={"flex"}
          bgColor={"bg-primary"}
          borderRounded={"rounded-[6px]"}
          borderColor={"border-primary"}
        />
      </div>
      {/* //   </div>
    // </div> */}
    </>
  );
};

export default Search;
