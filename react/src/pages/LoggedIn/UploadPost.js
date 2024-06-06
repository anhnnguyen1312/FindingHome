import React from "react";
import user1 from "../../assets/images/user/user2.jpg";

const UploadPost = () => {
  return (
    <div className="m-auto">
      <div className="my-4 m-auto bg-white max-w-screen-md border  shadow-xl px-4 md:mx-auto">
        <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
          <div className="shrink-0 mr-auto sm:py-3">
            <p className="font-medium"> Đăng bài</p>
            <p className="text-sm text-gray-600">
              Vui lòng nhập thông tin chính xác để được duyệt!
            </p>
          </div>
          <button className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">
            Hủy
          </button>
          <button className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">
            Đăng
          </button>
        </div>
        {/* // thong tin chủ và liên hệ */}
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">tên</p>
          <input
            placeholder="First Name"
            className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
          />
          <input
            placeholder="Last Name"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Email</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Số điện thoại liên lạc</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">zalo</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Link Mạng xã hội</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Link website</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        {/* địa chỉ */}
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Địa chỉ chính xác</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        {/* Select địa chỉ : tỉnh thành pơhoos quận huyện số nhà, ping trên bản đồ */}

        {/* Thông tin mô tả phòng */}
        {/* select mô tả loại phòng: phòng, căn hộ mặt bằng */}
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Giá</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Diện tích </p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Mô tả phòng</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Tiện ích, nội thất</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Quy định </p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>

        {/* ảnh  */}
        <div className="flex flex-col gap-4 py-4  lg:flex-row">
          <div className="shrink-0 w-32  sm:py-4">
            <p className="mb-auto font-medium">Ảnh Phòng, căn hộ</p>
            <p className="text-sm text-gray-600">Thay đổi</p>
          </div>
          <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
            <img src={user1} className="h-16 w-16 rounded-full" />
            <p className="text-sm text-gray-600">
              Thả ảnh bạn mong muốn thay đổi
            </p>
            <input
              type="file"
              className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
        </div>
        <div className="flex justify-end py-4 sm:hidden">
          <button className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">
            hủy
          </button>
          <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
