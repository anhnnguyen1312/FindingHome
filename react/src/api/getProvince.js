import React from "react";
import axiosConfig from "../axiosConfig";

export const getProvince = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "https://vapi.vnappmob.com/api/province/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
      console.log("error", error);
    }
  });

export const getDistrict = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `https://vapi.vnappmob.com/api/province/district/${payload}`,
      });
      resolve(response);
    } catch (error) {
      console.log("error ", error);
      reject(error);
    }
  });

export const getWard = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `https://vapi.vnappmob.com/api/province/ward/${payload}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
