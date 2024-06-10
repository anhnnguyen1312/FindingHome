import React, { useState } from "react";
import { PlusOutlined, InfoCircleOutlined } from "@ant-design/icons";

import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Tooltip,
} from "antd";

const { TextArea } = Input;

const CreatePost = () => {
  const [newPostData, setNewPostData] = useState({
    name: "as",
    phone: "",
    zalo: "",
    socialLink: "",
    websiteLink: "",
    address: "",
    price: "",
    area: "",
    otherFee: "",
    minConstract: "",
    typeRoom: "",
    description: "",
    furniture: "",
    rule: "",
  });
  const handeChangeNewPostData = (e) => {
    setNewPostData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log("e id ", e);
  };
  const handeChangeSelect = (value, e) => {
    setNewPostData((prevState) => ({
      ...prevState,
      [e.key]: value,
    }));
    console.log("e id ", value, e);
  };
  console.log("newPostData", newPostData);
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <div className="my-4 m-auto bg-white sm:w-4/5 w-full border  shadow-xl px-4 sm:px-8 md:mx-auto">
      <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium"> Đăng bài</p>
          <p className="text-sm text-gray-600">
            Vui lòng nhập thông tin chính xác để được duyệt!
          </p>
        </div>
        <button className="mr-2 hidden rounded-lg border-2 px-[10px]  py-[5px] font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">
          Hủy
        </button>
        <button className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-[10px] py-[5px] font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">
          Đăng
        </button>
      </div>
      {/* <div className="w-full flex items-center justify-center"> */}
      {/* <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox> */}
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        // disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
        className="items-center justify-between"
      >
        {/* <div className="flex items flex justify-between" */}
        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium"> Thông Tin Liên hệ</p>
        </div>
        {/* <Form.Item
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          label="tên Người đăng"
        >
          <Input
            id="name"
            value={newPostData.name}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item> */}
        <Form.Item label="Tên">
          <Input
            id="name"
            value={newPostData.name}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item>

        <Form.Item label="Số điện thoại">
          <Input
            id="phone"
            value={newPostData.phone}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item>
        <Form.Item label="zalo">
          <Input
            id="zalo"
            value={newPostData.zalo}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item>
        <Form.Item label="Mạng xã hội">
          <Input
            id="socialLink"
            value={newPostData.socialLink}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item>
        <Form.Item label="Link website">
          <Input
            id="websiteLink"
            value={newPostData.websiteLink}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item>
        {/* 
          // địa chỉ */}
        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium"> Địa chỉ </p>
        </div>
        <Form.Item label="Địa chỉ cụ thể">
          <Input
            id="address"
            value={newPostData.address}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item>
        {/* Tỉnh thành quaamnj huyện */}
        <Form.Item label="Địa chỉ">
          <TreeSelect
            treeData={[
              {
                title: "Hồ Chí Minh",
                value: "hochiminh",
                children: [
                  {
                    title: "Quận 2",
                    value: "quan2",
                  },
                  {
                    title: "Quận 2",
                    value: "quan2",
                  },
                  {
                    title: "Quận 3",
                    value: "quan3",
                  },
                  {
                    title: "Quận 4",
                    value: "quan4",
                  },
                  {
                    title: "Tân Phú",
                    value: "tanphu",
                  },
                  {
                    title: "Bình Tân",
                    value: "binhtan",
                  },
                  {
                    title: "Nhà Bè",
                    value: "nhabe",
                    children: [
                      {
                        title: "Phước Kiển",
                        value: "binhtan",
                      },
                      {
                        title: "Tân kiển",
                        value: "binhtan",
                      },
                    ],
                  },
                ],
              },
              {
                title: "hà Nội",
                value: "hanoi",
                children: [
                  {
                    title: "Thanh Xuân",
                    value: "quan2",
                  },
                  {
                    title: "Đống Đa",
                    value: "quan2",
                  },
                  {
                    title: "Ba Đình",
                    value: "quan3",
                  },
                  {
                    title: "Hai Bà Trưng",
                    value: "quan4",
                  },
                  {
                    title: "Hoàn Kiếm",
                    value: "tanphu",
                  },
                  {
                    title: "Thường tín",
                    value: "binhtan",
                  },
                ],
              },
              //   },
            ]}
          />
        </Form.Item>

        {/* thong tin phong */}
        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium"> thông Tin Phòng</p>
        </div>
        <Form.Item label="Loại hình">
          <Select
            // key="typeRoom"
            onChange={(value, e) => handeChangeSelect(value, e)}
          >
            <Select.Option key="typeRoom" value="phong">
              Phòng
            </Select.Option>
            <Select.Option value="canho">Căn hộ</Select.Option>
            <Select.Option value="matbang">Mặt bằng</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="đối tượng">
          <Select onChange={(e) => handeChangeSelect(e)}>
            <Select.Option value="moing">Mọi người </Select.Option>
            <Select.Option value="hssv">HSSV,NVVP</Select.Option>
            <Select.Option value="nam">Nam</Select.Option>

            <Select.Option value="nu">Nữ</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Giá">
          <Input
            prefix="$"
            suffix="tr/tháng"
            id="price"
            value={newPostData.price}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item>
        <Form.Item label="Diện tích ">
          <Input
            prefix="$"
            suffix="m2"
            id="area"
            value={newPostData.area}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item>
        <Form.Item label="Chi Phí khác">
          <Input
            id="otherFee"
            value={newPostData.otherFee}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item>
        <Form.Item label="chuyển vào từ">
          {/* <DatePicker
           id="dateAvailableMove"
           value={newPostData.dateAvailableMove}
           onChange={(e) => handeChangeNewPostData(e)}
            suffix={
              <Tooltip title="ngày có thể chuyển vào">
                <InfoCircleOutlined
                  style={{
                    color: "rgba(0,0,0,.45)",
                  }}
                />
              </Tooltip>
            }
          /> */}
        </Form.Item>
        <Form.Item label="Ký hợp đồng">
          <Input
            id="minConstract"
            value={newPostData.minConstract}
            onChange={(e) => handeChangeNewPostData(e)}
            suffix={
              <Tooltip title=" tháng ký hợp đồng tối thiểu">
                <InfoCircleOutlined
                  style={{
                    color: "rgba(0,0,0,.45)",
                  }}
                />
              </Tooltip>
            }
          />
        </Form.Item>
        <Form.Item label="Mô tả phòng">
          <TextArea
            rows={4}
            id="description"
            value={newPostData.description}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item>

        <Form.Item label="Nội thất">
          <Input
            id="furniture"
            value={newPostData.furniture}
            onChange={(e) => handeChangeNewPostData(e)}
          />
        </Form.Item>
        <Form.Item label="Quy định">
          <TextArea
            id="rule"
            value={newPostData.rule}
            onChange={(e) => handeChangeNewPostData(e)}
            rows={4}
          />
        </Form.Item>

        {/* hinh anh */}
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>

        <Form.Item label="tag">
          <Checkbox>
            <div className="  border border-[#1E95A6] mx-[10px] bg-white text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className=" flex gap-[10px] items-center">
                <div>
                  <i class="fa-solid fa-motorcycle"></i>
                </div>
                bãi đậu xe
              </div>
            </div>
          </Checkbox>
          <Checkbox>
            <div className="bg-white border border-[#1E95A6]  mx-[10px] text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className="flex gap-[10px] items-center">
                <div className="">
                  {/* <i class="fa-sharp fa-thin fa-child-reaching"></i> */}
                  <i class="fa-solid fa-child-reaching"></i>
                </div>
                trẻ em
              </div>
            </div>
          </Checkbox>
          <Checkbox>
            <div className="bg-white border border-[#1E95A6]  mx-[10px] text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className="flex gap-[10px] items-center">
                <div>
                  <i class="fa-solid fa-cat"></i>{" "}
                </div>
                thú cưng
              </div>
            </div>
          </Checkbox>
          <Checkbox>
            <div className="bg-white border border-[#1E95A6]  mx-[10px] text-gray-800 inline-flex items-center rounded px-3 py-1 mb-2">
              <div className="flex gap-[10px] items-center">
                <div>
                  <i class="fa-solid fa-wifi"></i>
                </div>
                wifi
              </div>
            </div>
          </Checkbox>
        </Form.Item>
        <Form.Item className="flex justify-end">
          <Button className="bg-blue-400 text-white ">Đăng Bài</Button>
        </Form.Item>
      </Form>
      <div className="flex justify-end py-4 sm:hidden">
        <button className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">
          hủy
        </button>
        <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">
          Lưu
        </button>
      </div>
    </div>
    // </div>
  );
};
export default CreatePost;
