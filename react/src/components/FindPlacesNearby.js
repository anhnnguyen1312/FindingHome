import React from "react";
import axios from "axios";
import { Await } from "react-router-dom";
import { PrevArrow } from "./ArrowSlideShow";

export const FindPlacesNearby = (lat, lng, setPlacesNearby) => {
  const VIETMAP_KEY = "af4284a02ae26231e2a517f30b67d25216a69b76782dfb4c";
  let hospital = [];
  let kinderGarten = [];

  let school = [];
  let university = [];
  let plaza = [];
  let historical = [];
  let relax = [];
  let commitee = [];
  let public_transport = [];
  let parking = [];
  let charging = [];
  const geocodingVietMap = async () => {
    try {
      //   axios
      //     .get(
      //       `https://maps.vietmap.vn/api/search/v3?apikey=${VIETMAP_KEY}&focus=${(lat, lng)}&circle_center=${(lat, lng)}&circle_radius=10000&cats=7003,7007`
      //     )
      axios
        .get(
          `https://maps.vietmap.vn/api/reverse/v3?apikey=${VIETMAP_KEY}&lng=${lng}&lat=${lat}&focus=${(lat, lng)}&circle_center=${(lat, lng)}&circle_radius=7000&cats=3001,3002,3003`
        )
        .then((res) => {
          const data = res.data;
          hospital = data.map((place) => ({
            lat: place.lat,
            lng: place.lng,
            distance: place.distance,
            display: place.display,
            address: place.address,
          }));
        })
        .catch((error) => console.log(error));
      // axios
      //   .get(
      //     `https://maps.vietmap.vn/api/search/v3?apikey=${VIETMAP_KEY}&focus=${lat},${lng}&layers={Layers}&circle_center=${lat},${lng}&circle_radius=5000&cats=7003,7007`
      //   )
      //   .then((res) => {
      //     console.log("res", res);
      //     const data = res.data;
      //     const dataHospital = data.map((id) => ({
      //       ref_id: id.ref_id,
      //       distance: id.distance,
      //       display: id.display,
      //     }));
      //     console.log("hospital ref id", dataHospital);
      //     return dataHospital;
      //   })
      //   .then((res) => {
      //     console.log("res then", res);
      //     const data = async () => {
      //       try {
      //         const promises = res.map(async (place) => {
      //           const response = await axios.get(
      //             `https://maps.vietmap.vn/api/place/v3?apikey=${VIETMAP_KEY}&refid=${place.ref_id}`
      //           );
      //           return { response: response, place: place };
      //         });
      //         const results = await Promise.all(promises);
      //         if (results?.length > 0) {
      //           hospital = results.map((result) => ({
      //             lat: result.response.data.lat,
      //             lng: result.response.data.lng,
      //             distance: result.place.distance,
      //             display: result.place.display,
      //           }));
      //           hospital &&
      //             setPlacesNearby((prevState) => ({
      //               ...prevState,
      //               ["hospital"]: hospital,
      //             }));
      //         }
      //       } catch (error) {
      //         console.error("Đã xảy ra lỗi:", error);
      //       }
      //     };
      //     data();
      //   })
      //   .catch((error) => console.log(error));

      axios
        .get(
          `https://maps.vietmap.vn/api/search/v3?apikey=${VIETMAP_KEY}&focus=${lat},${lng}&layers={Layers}&circle_center=${lat},${lng}&circle_radius=5000&cats=3001`
        )
        .then((res) => {
          const data = res.data;
          const dataPlaza = data.map((id) => ({
            ref_id: id.ref_id,
            distance: id.distance,
            display: id.display,
          }));
          return dataPlaza;
        })
        .then((res) => {
          const data = async () => {
            try {
              const promises = res.map(async (place) => {
                const response = await axios.get(
                  `https://maps.vietmap.vn/api/place/v3?apikey=${VIETMAP_KEY}&refid=${place.ref_id}`
                );
                return { response: response, place: place };
              });
              const results = await Promise.all(promises);
              if (results?.length > 0) {
                plaza = results.map((result) => ({
                  lat: result.response.data.lat,
                  lng: result.response.data.lng,
                  distance: result.place.distance,
                  display: result.place.display,
                }));
                plaza &&
                  setPlacesNearby((prevState) => ({
                    ...prevState,
                    ["plaza"]: plaza,
                  }));
              }
            } catch (error) {
              console.error("Đã xảy ra lỗi:", error);
            }
          };
          data();
        })
        .catch((error) => console.log(error));
      // axios
      //   .get(
      //     `https://maps.vietmap.vn/api/reverse/v3?apikey=${VIETMAP_KEY}&lng=${lng}&lat=${lat}&focus=${(lat, lng)}&circle_center=${(lat, lng)}&circle_radius=7000&cats=3001,3002,3003`
      //   )
      //   .then((res) => {
      //     console.log("res", res.data[0]);
      //     const data = res.data;
      //     plaza = data.map((place) => ({
      //       lat: place.lat,
      //       lng: place.lng,
      //       distance: place.distance,
      //       display: place.display,
      //       address: place.address,
      //     }));
      //     console.log("plaza", plaza);
      //   })
      //   .catch((error) => console.log(error));

      axios
        .get(
          `https://maps.vietmap.vn/api/reverse/v3?apikey=${VIETMAP_KEY}&lng=${lng}&lat=${lat}&focus=${(lat, lng)}&circle_center=${(lat, lng)}&circle_radius=10000&cats=13006,13007,13008,13009,130010`
        )
        .then((res) => {
          const data = res.data;
          school = data.map((place) => ({
            lat: place.lat,
            lng: place.lng,
            distance: place.distance,
            display: place.display,
            address: place.address,
          }));
        })
        .catch((error) => console.log(error));

      axios
        .get(
          `https://maps.vietmap.vn/api/search/v3?apikey=${VIETMAP_KEY}&focus=${lat},${lng}&layers={Layers}&circle_center=${lat},${lng}&circle_radius=5000&cats=13002`
        )
        .then((res) => {
          const data = res.data;
          const dataUniversity = data.map((id) => ({
            ref_id: id.ref_id,
            distance: id.distance,
            display: id.display,
          }));
          return dataUniversity;
        })
        .then((res) => {
          const data = async () => {
            try {
              const promises = res.map(async (place) => {
                const response = await axios.get(
                  `https://maps.vietmap.vn/api/place/v3?apikey=${VIETMAP_KEY}&refid=${place.ref_id}`
                );
                return { response: response, place: place };
              });
              const results = await Promise.all(promises);
              if (results?.length > 0) {
                university = results.map((result) => ({
                  lat: result.response.data.lat,
                  lng: result.response.data.lng,
                  distance: result.place.distance,
                  display: result.place.display,
                }));
                university &&
                  setPlacesNearby((prevState) => ({
                    ...prevState,
                    ["university"]: university,
                  }));
              }
            } catch (error) {
              console.error("Đã xảy ra lỗi:", error);
            }
          };
          data();
        })
        .catch((error) => console.log(error));
      // axios
      //   .get(
      //     `https://maps.vietmap.vn/api/reverse/v3?apikey=${VIETMAP_KEY}&lng=${lng}&lat=${lat}&focus=${(lat, lng)}&circle_center=${(lat, lng)}&circle_radius=5000&cats=13002`
      //   )
      //   .then((res) => {
      //     // const data = res.data[0].display;
      //     console.log("res", res.data[0]);
      //     // console.log("data", data);
      //     const data = res.data;
      //     university = data.map((place) => ({
      //       lat: place.lat,
      //       lng: place.lng,
      //       distance: place.distance,
      //       display: place.display,
      //       address: place.address,
      //     }));
      //     console.log("university", university);
      //   })
      //   .catch((error) => console.log(error));

      // axios
      //   .get(
      //     `https://maps.vietmap.vn/api/reverse/v3?apikey=${VIETMAP_KEY}&lng=${lng}&lat=${lat}&focus=${(lat, lng)}&circle_center=${(lat, lng)}&circle_radius=5000&cats=4004`
      //   )
      //   .then((res) => {
      //     // const data = res.data[0].display;
      //     console.log("res", res.data[0]);
      //     // console.log("data", data);
      //     const data = res.data;
      //     historical = data.map((place) => ({
      //       lat: place.lat,
      //       lng: place.lng,
      //       distance: place.distance,
      //       display: place.display,
      //       address: place.address,
      //     }));
      //     console.log("historical", historical);
      //   })
      //   .catch((error) => console.log(error));

      // axios
      //   .get(
      //     `https://maps.vietmap.vn/api/reverse/v3?apikey=${VIETMAP_KEY}&lng=${lng}&lat=${lat}&focus=${(lat, lng)}&circle_center=${(lat, lng)}&circle_radius=10000&cats=11001,11004,11007,11008,11009,11010,11011`
      //   )
      //   .then((res) => {

      //     const data = res.data;
      //     public_transport = data.map((place) => ({
      //       lat: place.lat,
      //       lng: place.lng,
      //       distance: place.distance,
      //       display: place.display,
      //       address: place.address,
      //     }));
      //   })
      //   .catch((error) => console.log(error));

      // axios
      //   .get(
      //     `https://maps.vietmap.vn/api/reverse/v3?apikey=${VIETMAP_KEY}&lng=${lng}&lat=${lat}&focus=${(lat, lng)}&circle_center=${(lat, lng)}&circle_radius=10000&cats=10005`
      //   )
      //   .then((res) => {
      //     // const data = res.data[0].display;
      //     console.log("res", res.data[0]);
      //     // console.log("data", data);
      //     const data = res.data;
      //     charging = data.map((place) => ({
      //       lat: place.lat,
      //       lng: place.lng,
      //       distance: place.distance,
      //       display: place.display,
      //       address: place.address,
      //     }));
      //     console.log("charging", charging);
      //   })
      //   .catch((error) => console.log(error));

      axios
        .get(
          `https://maps.vietmap.vn/api/reverse/v3?apikey=${VIETMAP_KEY}&lng=${lng}&lat=${lat}&focus=${(lat, lng)}&circle_center=${(lat, lng)}&circle_radius=10000&cats=10013,10005`
        )
        .then((res) => {
          const data = res.data;
          parking = data.map((place) => ({
            lat: place.lat,
            lng: place.lng,
            distance: place.distance,
            display: place.display,
            address: place.address,
          }));
        })
        .catch((error) => console.log(error))

        // axios
        //   .get(
        //     `https://maps.vietmap.vn/api/reverse/v3?apikey=${VIETMAP_KEY}&lng=${lng}&lat=${lat}&focus=${(lat, lng)}&circle_center=${(lat, lng)}&circle_radius=10000&cats=9001,9002,9003,9004,9007,9008,9011,9010,9015`
        //   )
        //   .then((res) => {
        //     const data = res.data;
        //     commitee = data.map((place) => ({
        //       lat: place.lat,
        //       lng: place.lng,
        //       distance: place.distance,
        //       display: place.display,
        //       address: place.address,
        //     }));
        //   })
        //   .catch((error) => console.log(error))

        //   axios
        //     .get(
        //       `https://maps.vietmap.vn/api/reverse/v3?apikey=${VIETMAP_KEY}&lng=${lng}&lat=${lat}&focus=${(lat, lng)}&circle_center=${(lat, lng)}&circle_radius=3000&cats=13007`
        //     )
        //     .then((res) => {
        //       // const data = res.data[0].display;
        //       console.log("res", res.data[0]);
        //       // console.log("data", data);
        //       const data = res.data;
        //       kinderGarten = data.map((place) => ({
        //         lat: place.lat,
        //         lng: place.lng,
        //         distance: place.distance,
        //         display: place.display,
        //         address: place.address,
        //       }));
        //       console.log("kinderGarten", kinderGarten);
        //     })
        .then(() => {
          setPlacesNearby((prevState) => ({
            ...prevState,
            ["hospital"]: hospital,
            ["plaza"]: plaza,
            ["school"]: school,
            // ["kinderGarten"]: kinderGarten,
            ["university"]: university,
            // ["public_transport"]: public_transport,
            // ["commitee"]: commitee,
            // ["historical"]: historical,
            // ["charging"]: charging,

            ["parking"]: parking,
          }));
        });
    } catch (error) {
      console.log(error);
    }
  };
  lat && lng && geocodingVietMap();
  //   console.log("hospital", hospital);

  console.log(lat, lng, setPlacesNearby);
};
