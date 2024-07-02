import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const VietMap = ({ address }) => {
  const [latLng, setLatLng] = useState(null);
  const [showPopup, setShowPopup] = useState(true);

  const [viewport, setViewport] = useState({
    latitude: 10.710999,
    longitude: 106.704449,
    zoom: 15,
  });

  const [viewState, setViewState] = useState({
    latitude: 10.710999,
    longitude: 106.704449,
    zoom: 15,
  });

  const getLatLngFromAddress = async (address) => {
    const apiKey = "af4284a02ae26231e2a517f30b67d25216a69b76782dfb4c";
    const url = `https://maps.vietmap.vn/api/search/v3?apikey=${apiKey}&text=${address}`;

    try {
      const response = await axios.get(url);
      const result = response?.data[0];
      if (result) {
        const urlPlace = `https://maps.vietmap.vn/api/place/v3?apikey=${apiKey}&refid=${result.ref_id}`;
        try {
          const response = await axios.get(urlPlace);
          console.log("response", response);

          setViewport((prevState) => ({
            ...prevState,
            latitude: response.data?.lat,
            longitude: response.data?.lng,
          }));
          setViewState((prevState) => ({
            ...prevState,
            latitude: response.data?.lat,
            longitude: response.data?.lng,
          }));
        } catch (error) {
          console.log(error);
        }
      } else {
        console.error("No results found");
      }
    } catch (error) {
      console.error("Error fetching geocoding data:", error);
    }
  };
  useEffect(() => {
    if (address) {
      //getLatLngFromAddress(address);
    }
  }, [address]);
  console.log("viewport", viewport);
  console.log("showPopup", showPopup);

  return (
    <>
      <div style={{ height: "50vh", width: "100%" }}>
        <ReactMapGL
          {...viewState}
          width={"100vw"}
          height={"30vw"}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          //mapboxAccessToken="pk.eyJ1IjoidGhhaS1uZ29jLXBodSIsImEiOiJjbHhpd3p2amwxbGozMnJyMmJhZTExZ3pkIn0.BnFFOObKYnZUOf2wJstUFg"
          onMove={(evt) => setViewState(evt.viewState)}
        >
          {showPopup && (
            <Popup
              latitude={viewport?.latitude}
              longitude={viewport?.longitude}
              v
              closeButton={true}
              closeOnClick={false}
              offsetTop={-10}
              onClose={() => setShowPopup(false)}
              anchor="bottom-left"
            >
              <div> Địa chỉ{address}</div>
            </Popup>
          )}
          <Marker
            latitude={viewport?.latitude}
            longitude={viewport?.longitude}
            offsetLeft={-20}
            offsetTop={-30}
          >
            <div onClick={() => setShowPopup(true)} className=" text-rose-600">
              <i className="fa-solid fa-location-dot text-4xl"></i>
            </div>
          </Marker>
        </ReactMapGL>
      </div>
    </>
  );
};

export default VietMap;
