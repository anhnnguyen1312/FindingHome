import axios from "axios";
export const FindPlacesNearby = (lat, lng, setPlacesNearby) => {
  const VIETMAP_KEY = "af4284a02ae26231e2a517f30b67d25216a69b76782dfb4c";
  let hospital = [];
  let school = [];
  let university = [];
  let plaza = [];
  let parking = [];
  const geocodingVietMap = async () => {
    try {
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

        .then(() => {
          setPlacesNearby((prevState) => ({
            ...prevState,
            ["hospital"]: hospital,
            ["plaza"]: plaza,
            ["school"]: school,
            ["university"]: university,
            ["parking"]: parking,
          }));
        });
    } catch (error) {
      console.log(error);
    }
  };
  lat && lng && geocodingVietMap();

  console.log(lat, lng, setPlacesNearby);
};
