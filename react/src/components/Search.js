import React, { useEffect, useState } from "react";
import { Button, SelectSearch } from "./index";
import { TypeRoom, TypeArea, TypePrice } from "../data/index";
import { getProvince, getDistrict, getWard } from "../api/getProvince";
import {
  AddressNewPostProvince,
  AddressNewPostDistrict,
  AddressNewPostWard,
} from "./AddressNewPost";
const Search = ({ setSearchData, setSearchButtonClick, type }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [selectData, setSelectData] = useState({
    type: null,
    address: null,
    price: null,
    area: null,
  });
  const [addressData, setAddressData] = useState({
    provinceForm: null,
    districtForm: null,
    wardForm: null,
    streetForm: null,
  });
  useEffect(() => {
    const callProvinceApi = async () => {
      try {
        const response = await getProvince();

        if (response.status === 200) {
          setProvinces(response?.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    callProvinceApi();
  }, []);

  useEffect(() => {
    setDistrict(null);
    setWard(null);
    setDistricts([]);
    setWards(null);

    const callDistrictApi = async () => {
      try {
        const response = await getDistrict(province.province_id || province);
        if (response.status === 200) {
          setDistricts(response?.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    province && callDistrictApi();
    province || setDistricts([]);
  }, [province]);

  useEffect(() => {
    setWard(null);
    const callWardtApi = async () => {
      try {
        const response = await getWard(district.district_id || district);
        if (response.status === 200) {
          setWards(response?.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    district && callWardtApi();
    district || setWards([]);
  }, [district]);

  useEffect(() => {
    setSelectData((prevState) => ({
      ...prevState,
      address: ` ${addressData.streetForm ? `${addressData.streetForm}, ` : ""} ${addressData.wardForm ? `${addressData.wardForm}, ` : ""} ${addressData.districtForm ? `${addressData.districtForm}, ` : ""} ${addressData.provinceForm ? `${addressData.provinceForm}` : ""}`,
    }));
  }, [addressData]);

  const handleSearch = () => {
    setSearchButtonClick && setSearchButtonClick(true);
    setSearchData(selectData);
    console.log("search");
  };

  return (
    <>
      {type ? (
        ""
      ) : (
        <SelectSearch
          placeholder={"Phân loại"}
          id={"type"}
          data={TypeRoom}
          setSelectData={setSelectData}
          value={selectData.type}
        />
      )}
      <SelectSearch
        placeholder={"Giá"}
        id={"price"}
        data={TypePrice}
        setSelectData={setSelectData}
        value={selectData.price}
      />
      <SelectSearch
        placeholder={"Diện tích"}
        id={"area"}
        data={TypeArea}
        setSelectData={setSelectData}
        value={selectData.area}
      />
      <AddressNewPostProvince
        name={"provinceForm"}
        value={provinces}
        provinceForm={addressData.provinceForm}
        // valueSelect={addressData.provinceForm}
        // valueSelect={province.province_name}
        setProvince={setProvince}
        setAddressData={setAddressData}
        style={{ paddingRight: "10px" }}
      />
      <AddressNewPostDistrict
        name={"districtForm"}
        value={districts}
        districtForm={addressData.districtForm}
        // valueSelect={district?.district_name}
        setDistrict={setDistrict}
        setAddressData={setAddressData}
        // district={district}
      />
      <AddressNewPostWard
        name={"wardForm"}
        wardForm={addressData.wardForm}
        value={wards}
        // valueSelect={ward?.ward_name}
        setWard={setWard}
        setAddressData={setAddressData}
      />

      <div className="md:flex-[20%] w-full">
        <Button
          children={"Tim kiem"}
          textColor={"text-white"}
          fullWidth={"flex"}
          bgColor={"bg-[#374151]"}
          borderRounded={"rounded-[6px]"}
          borderColor={"border-white"}
          onClick={() => handleSearch()}
          style={"hover:bg-slate-600"}
        />
      </div>
      {/* //   </div>
    // </div> */}
    </>
  );
};

export default Search;
