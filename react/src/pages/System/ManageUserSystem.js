import React, { useState, useEffect } from "react";
import { callApiUserList } from "../../api/getUserListAdmin";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../../ultils/path";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, message, Popconfirm } from "antd";
import { callApiDeleteUser } from "../../../src/api/authenLogin";

const ManageUserSystem = () => {
  const [userList, setUserList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [checkUserID, setCheckUserID] = useState([]);
  const [allUserIdList, setAllUserIdList] = useState([]);
  const isSystem = true;
  const [userData, setUserData] = useState([]);
  const { posts } = useSelector((state) => state.post);
  const navigate = useNavigate();

  const checkAll = allUserIdList.length === checkUserID.length;
  const indeterminate =
    checkUserID.length > 0 && checkUserID.length < allUserIdList.length;

  useEffect(() => {
    const handleCallApi = async () => {
      try {
        const response = await callApiUserList();

        setUserList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    handleCallApi();
  }, []);

  useEffect(() => {
    if (searchInput === "") {
      console.log("if ");
      setUserData(userList);
    }

    const idList = userList.filter((user) => user.role !== "1");
    const userIdList = idList.map((user) => user.id);
    setAllUserIdList(userIdList);

    //   const allIdList = userList.map((user) => user.id);
    //  const postCount = allIdList.
  }, [userList]);

  const handleCounPost = (userId) => {
    const postCount = posts.filter((post) => post.userId === userId);
    return postCount.length;
  };
  const onCheckAllChange = (e) => {
    setCheckUserID(e.target.checked ? allUserIdList : []);
  };

  const onChange = (e) => {
    if (e.target.checked) {
      setCheckUserID((prevState) => [...prevState, e.target.value]);
    } else {
      const check = checkUserID.filter((userId) => userId !== e.target.value);
      console.log(`checkData = ${check}`);

      setCheckUserID(check);
    }
    // console.log(`checked = ${e.target.checked}`);
    // console.log(`checked = ${e.target.value}`);
  };
  console.log("checkUserID ", checkUserID);
  console.log("allUserIdList ", allUserIdList);

  const handleOnChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };
  const handleCancelSearch = () => {
    setUserData(userList);
    setSearchInput("");
  };
  const handleSearchInputClick = () => {
    if (searchInput?.trim().length > 0) {
      const search = userList.filter((user) => {
        let result = false;

        for (const key in user) {
          console.log(
            " user[key]",
            user[key] && user[key].toLowerCase().includes(searchInput)
          );
          if (
            typeof user[key] === "string" &&
            user[key].toLowerCase().includes(searchInput.toLowerCase())
          ) {
            console.log(" user[key]", user[key]);
            result = true;
            break;
          }
        }
        console.log(" result", result);

        return result;
      });
      console.log("search", search);

      search && setUserData(search);
    } else {
      setUserData(userList);
    }
  };
  const confirm = async (userId) => {
    try {
      const response = await callApiDeleteUser(userId);
      if (response.data.fail) {
        message.error(response.data.fail);
      } else {
        message.success(response.data.success);
      }
    } catch (error) {
      console.error(error);
      message.error("Xóa tài khoản không thành công");
    }
  };
  const confirmDeleteAll = async () => {
    try {
      if (checkUserID.length > 0) {
        const response = await callApiDeleteUser(checkUserID);
        if (response.data.fail) {
          message.error(response.data.fail);
        } else {
          message.success(response.data.success);
        }
      } else {
        message.error("Bạn chưa chọn tài khoản nào");
      }
    } catch (error) {
      console.error(error);
      message.error("Xóa tài khoản không thành công");
    }
  };
  const handleNavigateProfilePublic = (IdUser) => {
    console.log("IdUser", IdUser);

    navigate(`/system/${path.PROFILE_PUBLIC}/${IdUser}`, {
      state: { isSystem },
    });
  };
  console.log("userData", userData);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[30px] w-full">
        <div
          className="w-full flex flex-row justify-between border-b p-[10px]
				dark:border-gray-600 dark:text-gray-400 transition duration-500
				ease-in-out"
        >
          <div className="flex">
            <Link
              to={`/system/${path.MANAGE_POST_SYSTEM}`}
              className="py-2 block text-[#374151] border-green-500
						dark:text-green-200 dark:border-green-200
						focus:outline-none border-b-2 font-medium capitalize
						transition duration-500 ease-in-out flex"
            >
              <p className="text-rose-600 pr-[5px]">{posts?.length}</p>
              Bài đăng
            </Link>
            <Link
              to={`/system/${path.MANAGE_USER_SYSTEM}`}
              className="ml-6 py-2 block border-b-2 border-transparent
						focus:outline-none font-medium capitalize text-center
						focus:text-green-500 focus:border-green-500
						dark-focus:text-green-200 dark-focus:border-green-200
						transition duration-500 ease-in-out flex"
            >
              <p className="text-rose-600 pr-[5px]">{posts?.length}</p>
              Người dùng
            </Link>

            <Link
              to={`/system/${path.MANAGE_USER_SYSTEM}`}
              className="ml-6 py-2 block border-b-2 border-transparent
						focus:outline-none font-medium capitalize text-center
						focus:text-green-500 focus:border-green-500
						dark-focus:text-green-200 dark-focus:border-green-200
						transition duration-500 ease-in-out flex"
            >
              <p className="text-rose-600 pr-[5px]">{posts.length}</p>
              Admin
            </Link>
          </div>

          <div className="flex items-center flex-grow justify-between ml-[20vw] select-none">
            <input
              className="w-12 bg-transparent flex-grow focus:outline-none"
              placeholder="Tìm kiếm"
              type="text"
              value={searchInput}
              onChange={(e) => handleOnChangeSearchInput(e)}
            />
            <button
              onClick={() => handleCancelSearch()}
              className="hover:text-rose-600 dark-hover:text-green-300
						cursor-pointer mr-3 transition duration-500 ease-in-out  "
            >
              <i className="fa-solid fa-x h-5 w-5 "></i>
            </button>
            <button
              onClick={() => handleSearchInputClick()}
              className="hover:text-rose-600 dark-hover:text-green-300
						cursor-pointer mr-3 transition duration-500 ease-in-out  "
            >
              <svg viewBox="0 0 512 512" className="h-5 w-5 fill-current">
                <path
                  d="M505 442.7L405.3
								343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
								44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
								208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
								2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
								0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
								0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
								128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="font-[sans-serif] m-2">
          <div className="flex justify-end m-2 gap-[10px]  text-sm font-semibold text-black">
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            >
              Chọn tất cả
            </Checkbox>
            <Popconfirm
              title="Xóa Tài Khoản"
              description={`Bạn có chắc chắn muốn xóa tất cả tài khoản `}
              onConfirm={() => confirmDeleteAll()}
              okText={` Xóa `}
              cancelText="Hủy"
            >
              <button title="Xóa">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 fill-red-500 hover:fill-red-700"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000"
                  />
                  <path
                    d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </Popconfirm>
          </div>
          <div className="block w-full overflow-x-auto ">
            <table className="w-full bg-white ">
              <thead className="bg-gray-100 ">
                <tr>
                  <th className="whitespace-nowrap pl-4 w-8"></th>
                  <th className="whitespace-nowrap pl-4 w-8">ID</th>
                  <th className="whitespace-nowrap p-2 text-left text-sm font-semibold text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-gray-500 inline mr-3"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    Tên
                  </th>
                  <th className="whitespace-nowrap p-2 text-left text-sm font-semibold text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-gray-500 inline mr-3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m14 9.09 8.81 1.75c.71.15 1.19.75 1.19 1.46v10.2c0 .83-.67 1.5-1.5 1.5h-9c.28 0 .5-.22.5-.5V23h8.5c.27 0 .5-.22.5-.5V12.3c0-.23-.16-.44-.39-.49L14 10.11z"
                        data-original="#000000"
                      />
                      <path
                        d="M19.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm0 3c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm0 3c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM14 23.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-14c0-.15.07-.29.18-.39.12-.09.27-.13.42-.1l.4.08V23z"
                        data-original="#000000"
                      />
                      <path
                        d="M13 23v.5c0 .28.22.5.5.5h-4c.28 0 .5-.22.5-.5V23zM10.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm.5 3.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5zm-.5 2.5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm0 3c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm-4.5.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5zM5.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm0 3c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm0 3c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM9 18.5c0-.28-.23-.5-.5-.5h-3c-.28 0-.5.22-.5.5V23H4v-4.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5V23H9z"
                        data-original="#000000"
                      />
                      <path
                        d="M5 23h5v.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5V23z"
                        data-original="#000000"
                      />
                      <path
                        d="m1.75.2 10.99 1.67c.73.12 1.26.74 1.26 1.48v5.74l-.4-.08c-.15-.03-.3.01-.42.1-.11.1-.18.24-.18.39V3.35c0-.25-.18-.46-.42-.5L1.59 1.19c-.03-.01-.06-.01-.09-.01-.12 0-.23.04-.32.12-.12.1-.18.23-.18.38V22.5c0 .28.23.5.5.5H4v.5c0 .28.22.5.5.5h-3C.67 24 0 23.33 0 22.5V1.68C0 1.24.19.82.53.54.87.25 1.31.13 1.75.2z"
                        data-original="#000000"
                      />
                    </svg>
                    Loại
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-3"
                      viewBox="0 0 401.998 401.998"
                    >
                      <path
                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                        data-original="#000000"
                      />
                    </svg> */}
                  </th>
                  <th className="whitespace-nowrap p-2 text-left text-sm font-semibold text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-gray-500 inline mr-3"
                      viewBox="0 0 482.6 482.6"
                    >
                      <path
                        d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                        data-original="#000000"
                      />
                    </svg>
                    Số điện thoại
                  </th>
                  <th className=" whitespace-nowrap p-2 text-left text-sm font-semibold text-black">
                    <i className="fa-solid fa-square-plus w-4 h-4 mr-[2px]"></i>
                    Tin
                  </th>
                  <th className=" whitespace-nowrap p-2 text-left text-sm font-semibold text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-gray-500 inline mr-3"
                      viewBox="0 0 511.987 511"
                    >
                      <path
                        d="M114.594 491.14c-5.61 0-11.18-1.75-15.934-5.187a27.223 27.223 0 0 1-10.582-28.094l32.938-145.09L9.312 214.81a27.188 27.188 0 0 1-7.976-28.907 27.208 27.208 0 0 1 23.402-18.71l147.797-13.419L230.97 17.027C235.277 6.98 245.089.492 255.992.492s20.715 6.488 25.024 16.512l58.433 136.77 147.774 13.417c10.882.98 20.054 8.344 23.425 18.711 3.372 10.368.254 21.739-7.957 28.907L390.988 312.75l32.938 145.086c2.414 10.668-1.727 21.7-10.578 28.098-8.832 6.398-20.61 6.89-29.91 1.3l-127.446-76.16-127.445 76.203c-4.309 2.559-9.11 3.864-13.953 3.864zm141.398-112.874c4.844 0 9.64 1.3 13.953 3.859l120.278 71.938-31.086-136.942a27.21 27.21 0 0 1 8.62-26.516l105.473-92.5-139.543-12.671a27.18 27.18 0 0 1-22.613-16.493L255.992 39.895 200.844 168.96c-3.883 9.195-12.524 15.512-22.547 16.43L38.734 198.062l105.47 92.5c7.554 6.614 10.858 16.77 8.62 26.54l-31.062 136.937 120.277-71.914c4.309-2.559 9.11-3.86 13.953-3.86zm-84.586-221.848s0 .023-.023.043zm169.13-.063.023.043c0-.023 0-.023-.024-.043zm0 0"
                        data-original="#000000"
                      />
                    </svg>
                    Đánh giá
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-3"
                      viewBox="0 0 401.998 401.998"
                    >
                      <path
                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                        data-original="#000000"
                      />
                    </svg> */}
                  </th>
                  <th className="whitespace-nowrap p-2 text-left text-sm font-semibold text-black">
                    Tùy chọn
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200">
                {userData?.length > 0 &&
                  userData.map((user, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td className="whitespace-nowrap pl-4 w-8">
                            {/* <Checkbox.Group
                              // options={user.id}
                              options={userData.id}
                              value={checkUserID}
                              onChange={onChange}
                            /> */}
                            {user.role === "1" ? (
                              <Checkbox
                                onChange={onChange}
                                // value={true}
                                disabled
                                // name={user.id}
                              ></Checkbox>
                            ) : (
                              <Checkbox
                                onChange={onChange}
                                value={user.id}
                                // disabled={user.role === "1" ? true : false}
                                checked={
                                  checkUserID.includes(user.id) ? true : false
                                }
                                // name={user.id}
                              ></Checkbox>
                            )}
                            {/* <input
                              id="checkbox1"
                              type="checkbox"
                              className="hidden peer"
                            />
                            <label
                              for="checkbox1"
                              className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full fill-white"
                                viewBox="0 0 520 520"
                              >
                                <path
                                  d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                  data-name="7-Check"
                                  data-original="#000000"
                                />
                              </svg>
                            </label> */}
                          </td>
                          <td className="whitespace-nowrap p-2 text-sm">
                            <div className="flex items-center  w-max">
                              {user.id}
                            </div>
                          </td>
                          <td
                            onClick={() => handleNavigateProfilePublic(user.id)}
                            className="whitespace-nowrap p-2 cursor-pointer text-sm"
                          >
                            <div className="flex items-center cursor-pointer w-max">
                              <img
                                src={user.avatar}
                                className="w-9 h-9 rounded-full shrink-0"
                              />
                              <div className="ml-4">
                                <p className="text-sm text-black">{user.name} </p>
                                <p className="text-xs text-gray-500">
                                  {user.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap p-2 text-sm">
                            {user.role === "1" ? "Admin" : "User"}
                          </td>
                          <td className=" whitespace-nowrap px-6 py-3">{user.phone}</td>
                          <td className="whitespace-nowrap px-6 py-3">{handleCounPost(user.id)}</td>
                          <td className="whitespace-nowrap px-6 py-3">
                            <svg
                              className="w-[18px] h-4 inline mr-1"
                              viewBox="0 0 14 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                                fill="#facc15"
                              />
                            </svg>
                            <svg
                              className="w-[18px] h-4 inline mr-1"
                              viewBox="0 0 14 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                                fill="#facc15"
                              />
                            </svg>
                            <svg
                              className="w-[18px] h-4 inline mr-1"
                              viewBox="0 0 14 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                                fill="#facc15"
                              />
                            </svg>
                            <svg
                              className="w-[18px] h-4 inline mr-1"
                              viewBox="0 0 14 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                                fill="#CED5D8"
                              />
                            </svg>
                            <svg
                              className="w-[18px] h-4 inline"
                              viewBox="0 0 14 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                                fill="#CED5D8"
                              />
                            </svg>
                          </td>
                          <td className="whitespace-nowrap px-6 py-3">
                            <button className="mr-4" title="Xem trang cá nhân">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 fill-blue-500 hover:fill-blue-700"
                                viewBox="0 0 348.882 348.882"
                              >
                                <path
                                  d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                                  data-original="#000000"
                                />
                                <path
                                  d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                                  data-original="#000000"
                                />
                              </svg>
                            </button>
                            <Popconfirm
                              title="Xóa Tài Khoản"
                              description={`Bạn có chắc chắn muốn xóa tài khoản ${user.name}`}
                              onConfirm={() => confirm(user.id)}
                              okText={` Xóa `}
                              cancelText="Hủy"
                            >
                              <button
                                disabled={user.role === "1" ? true : false}
                                title="Xóa"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-5 fill-red-500 hover:fill-red-700"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                    data-original="#000000"
                                  />
                                  <path
                                    d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                    data-original="#000000"
                                  />
                                </svg>
                              </button>
                            </Popconfirm>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUserSystem;
