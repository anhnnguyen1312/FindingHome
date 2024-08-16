import React from "react";
import NewPost from "../pages/LoggedIn/NewPost";

const ReUpPost = ({ ReUpPostData, setReUpPostClick }) => {

  const handleClickOverlay = (e) => {
    e.stopPropagation();
    setReUpPostClick(false);
  };
  const handleClickChild = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={(e) => handleClickOverlay(e)}
      className="fixed top-0 left-0 right-0 bottom-0 inset-0 bg-slate-900 bg-opacity-90 flex justify-center"
    >
      <div
        onClick={(e) => handleClickChild(e)}
        className="bg-white max-w-[700px] w-full overflow-y-auto mt-[60px]"
      >
        <NewPost
          ReUpPostData={ReUpPostData}
          setReUpPostClick={setReUpPostClick}
        />
      </div>
    </div>
  );
};

export default ReUpPost;
