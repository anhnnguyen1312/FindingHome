import React from "react";
import Post from "../../components/system/Post";

const ManagePostExpiredSystem = () => {
  return (
    <>
      {" "}
      <Post isExpired check={"1"} />
    </>
  );
};

export default ManagePostExpiredSystem;
