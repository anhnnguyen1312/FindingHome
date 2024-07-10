import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import { Tooltip } from "@mui/material";
import hospital from "../assets/images/iconPlaces/hospital.png";
import charging_station from "../assets/images/iconPlaces/charging-station.png";
import museum from "../assets/images/iconPlaces/museum.png";
import parking from "../assets/images/iconPlaces/parking.png";
import shopping from "../assets/images/iconPlaces/shopping.png";
import coffee_shop from "../assets/images/iconPlaces/coffee-shop.png";
import playground from "../assets/images/iconPlaces/playground.png";
import univer from "../assets/images/iconPlaces/univer.png";
import pin from "../assets/images/iconPlaces/pin.png";
import bus3 from "../assets/images/iconPlaces/bus3.png";
import police from "../assets/images/iconPlaces/police.png";
import historical from "../assets/images/iconPlaces/historical.png";

import education from "../assets/images/iconPlaces/education.png";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { FindPlacesNearby } from "./FindPlacesNearby";
import mapboxgl from "mapbox-gl";
import { isFloat } from "validator";
// import Geocoder from "react-map-gl-geocoder";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
const VietMap = ({ lat, lng, address, setPlaces }) => {
  const [showPopupAddress, setShowPopupAddress] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
  const [showPopupIcon, setShowPopupIcon] = useState(true);

  const [showIconPlaces, setShowIconPlaces] = useState(true);

  const [markerAddress, setMarkerAddress] = useState({
    latitude: null,
    longitude: null,
    place_name: "",
  });
  const [placesNearby, setPlacesNearby] = useState({
    hospital: [],
    kinderGarten: [],
    school: [],
    university: [],
    plaza: [],
    market: [],
    relax: [],
    historical: [],
    commitee: [],
    public_transport: [],
    parking: [],
    charging: [],
  });
  const [marker, setMarker] = useState();
  const [confirmed, setConfirmed] = useState(false);

  // const [viewport, setViewport] = useState({
  //   latitude: 10.710999,
  //   longitude: 106.704449,
  //   zoom: 15,
  // });

  // const [viewportGeoLocate, setViewportGeoLocate] = useState({
  //   latitude: 37.7577,
  //   longitude: -122.4376,
  //   zoom: 10,
  // });
  const [viewState, setViewState] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 15,
  });

  console.log("lat,long", viewState);

  const VIETMAP_KEY = "af4284a02ae26231e2a517f30b67d25216a69b76782dfb4c";

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoidGhhaS1uZ29jLXBodSIsImEiOiJjbHhpd3p2amwxbGozMnJyMmJhZTExZ3pkIn0.BnFFOObKYnZUOf2wJstUFg";
  const geolocateControlStyle = {
    right: 10,
    top: 10,
  };
  useEffect(() => {
    setPlaces(placesNearby);
  }, [placesNearby]);

  useEffect(() => {
    if (lat && lng) {
      console.log("hello");
      setMarkerAddress({
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        place_name: address,
      });
      setViewState({
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        zoom: 15,
      });
      const places = FindPlacesNearby(
        parseFloat(lat),
        parseFloat(lng),
        setPlacesNearby
      );
    } else {
      console.log("fail har");
    }
  }, [lat, lng, address]);
  const matrix = () => {
    const apiKeyMapbox = "af4284a02ae26231e2a517f30b67d25216a69b76782dfb4c";
  };
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

          // setMarkerAddress({
          //   latitude: response.data?.lat,
          //   longitude: response.data?.lng,
          //   place_name: address,
          // });
          // setViewState((prevState) => ({
          //   ...prevState,
          //   latitude: response.data?.lat,
          //   longitude: response.data?.lng,
          // }));
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
  console.log("markerAddress", markerAddress);

  useEffect(() => {
    if (address) {
      getLatLngFromAddress(address);
    }
  }, [address]);
  const mapRef = useRef(null);
  const initializeGeocoder = (map) => {
    const geocoder = new MapboxGeocoder({
      accessToken: MAPBOX_TOKEN,
      mapboxgl: mapboxgl,
      collapsed: true,
      placeholder: "Tìm kiếm ngay!",
      marker: false,
    });

    map.addControl(geocoder);

    geocoder.on("result", (event) => {
      console.log("event", event.result.geometry.coordinates[1]);
      console.log("placename", event.result.place_name);
      setConfirmed(true);
      setMarker({
        latitude: event.result.geometry.coordinates[1],
        longitude: event.result.geometry.coordinates[0],
        place_name: event.result.place_name,
      });

      setViewState({
        ...viewState,
        latitude: event.result.geometry.coordinates[1],
        longitude: event.result.geometry.coordinates[0],
        zoom: 12,
      });
    });

    geocoder.on("clear", () => {
      setMarker(null);
    });
  };
  const geocodingMapbox = () => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${marker.longitude},${marker.latitude}.json?access_token=${MAPBOX_TOKEN}`
      )
      .then((res) => {
        const { data } = res;
        console.log("res", res);
        console.log("data", data);
        setMarker((prevState) => ({
          ...prevState,
          ["place_name"]: data.features[0].place_name,
        }));
        setConfirmed(true);
      });
  };
  const geocodingVietMap = () => {
    axios
      .get(
        `https://maps.vietmap.vn/api/reverse/v3?apikey=${VIETMAP_KEY}&lng=${marker.longitude}&lat=${marker.latitude}`
      )
      .then((res) => {
        const data = res.data[0].display;
        //console.log("res", res);
        console.log("dageocodingVietMapta", res);
        setMarker((prevState) => ({
          ...prevState,
          ["place_name"]: data,
        }));
        setConfirmed(true);
      });
  };

  const handleonGeolocate = (event) => {
    console.log("handleonGeolocate", event);

    setMarker({
      latitude: event.coords.latitude,
      longitude: event.coords.longitude,
      place_name: "",
    });
    setViewState({
      ...viewState,
      latitude: event.coords.latitude,
      longitude: event.coords.longitude,
      zoom: 14,
    });
    //   dispatch(UpdateLocationAction(data));
  };

  const handleDeleteMaker = () => {
    setMarker();
    setShowPopup(false);
  };
  const handlePickMaker = () => {
    setMarker({
      latitude: viewState.latitude,
      longitude: viewState.longitude,
      place_name: "",
    });
    // setPickMarker(true);
    console.log("handlePickMaker");
  };
  const distanceCalc = () => {
    axios
      .get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${marker.longitude},${marker.latitude};${markerAddress.longitude},${markerAddress.latitude}.json?access_token=${MAPBOX_TOKEN}`
      )
      .then((res) => {
        // const { data } = res;
        console.log("distanceCalc", res);
        const distance = res.data.routes[0].distance / 1000;
        const duration = res.data.routes[0].duration / 60;
        setMarker((prevState) => ({
          ...prevState,
          ["distance"]: distance.toFixed(2),
          ["duration"]: duration.toFixed(2),
        }));
        setShowPopup(true);
      });
  };
  console.log("placesNearby", placesNearby);

  return (
    <>
      <div className="w-full h-[50vh] relative">
        <div
          title="thêm marker"
          className="absolute top-[100px] bg-[#687d9f] w-[44px] right-[10px] z-10 text-white p-[5px] "
        >
          <Tooltip title={`Thêm pin`}>
            <button className="  text-white " onClick={() => handlePickMaker()}>
              <i class="fa-solid fa-plus"></i>{" "}
              <i className="fa-solid fa-location-dot text-xl"></i>{" "}
            </button>
          </Tooltip>
        </div>
        {marker && (
          <>
            <div className="absolute top-[140px] w-[44px] bg-rose-600 right-[10px] z-10 text-white p-[5px] ">
              <Tooltip title={`Xóa pin`}>
                <button onClick={() => handleDeleteMaker()}>
                  X<i className="fa-solid fa-location-dot text-xl ml-[8px]"></i>{" "}
                </button>
              </Tooltip>
            </div>
            <div className="absolute top-[180px] bg-[#687d9f] right-[10px] z-10 text-white p-[5px] ">
              <Tooltip title={`Xem địa chỉ trên bản đồ`}>
                <button onClick={() => geocodingVietMap()}>Xem địa chỉ</button>
              </Tooltip>
            </div>
            <div className="absolute top-[220px] bg-cyan-600 right-[10px] z-10 text-white p-[5px] ">
              <button onClick={() => distanceCalc()}>Xem khoảng cách</button>
            </div>
          </>
        )}
        <div
          title=""
          className="absolute top-[10px] bg-[#687d9f] w-[44px] left-[10px] z-10 text-white p-[5px] "
        >
          <Tooltip title={`hiện tiện ích gần đây`}>
            <button
              className="  text-white "
              onClick={() => setShowIconPlaces(!showIconPlaces)}
            >
              {showIconPlaces ? (
                <>
                  Ẩn Icon <i class="fa fa-eye-slash" aria-hidden="true"></i>
                </>
              ) : (
                <>
                  Hiện Icon <i class="fa fa-eye-slash" aria-hidden="true"></i>
                </>
              )}
            </button>
          </Tooltip>
        </div>

        <ReactMapGL
          {...viewState}
          width={"100vw"}
          height={"30vw"}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken="pk.eyJ1IjoidGhhaS1uZ29jLXBodSIsImEiOiJjbHhpd3p2amwxbGozMnJyMmJhZTExZ3pkIn0.BnFFOObKYnZUOf2wJstUFg"
          onMove={(evt) => setViewState(evt.viewState)}
          ref={mapRef}
          onLoad={() => initializeGeocoder(mapRef.current.getMap())}
        >
          <GeolocateControl
            style={geolocateControlStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            showUserLocation={true}
            showAccuracyCircle={true}
            onGeolocate={(e) => handleonGeolocate(e)}
          />
          <NavigationControl position="bottom-right" />
          {/* <SearchLocation /> */}
          {marker && (
            <>
              {showPopup && (
                <Popup
                  latitude={marker?.latitude}
                  longitude={marker?.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  offsetTop={-10}
                  onClose={() => setShowPopup(false)}
                  anchor="bottom-left"
                >
                  <div>
                    {marker?.place_name.length > 0 ? (
                      <p>{` Địa chỉ: ${marker.place_name} `}</p>
                    ) : (
                      "nhấn xem địa chỉ để hiển thị"
                    )}
                    {/* <p>{` kinh độ: ${marker.latitude} `}</p>
                    <p>{` vĩ độ: ${marker.longitude} `}</p> */}
                    {marker?.distance && (
                      <>
                        <p>{` khoảng cách: ${marker?.distance} km`}</p>
                        <p>{` Thời gian di chuyển: ${marker?.duration} phút `}</p>
                      </>
                    )}
                  </div>
                </Popup>
              )}

              <Marker
                latitude={marker?.latitude}
                longitude={marker?.longitude}
                offsetLeft={-20}
                offsetTop={-30}
                draggable={true}
                onDragEnd={(event) => {
                  console.log("đragend", event);
                  setConfirmed(false);
                  setMarker({
                    latitude: event.lngLat.lat,
                    longitude: event.lngLat.lng,
                    place_name: "",
                  });
                }}
              >
                <div
                  onClick={() => setShowPopup(true)}
                  className=" text-blue-500"
                >
                  <i className="fa-solid fa-location-dot text-5xl"></i>
                </div>
              </Marker>
            </>
          )}
          {showPopupAddress && (
            <Popup
              latitude={markerAddress?.latitude}
              longitude={markerAddress?.longitude}
              v
              closeButton={true}
              closeOnClick={false}
              offsetTop={-10}
              onClose={() => setShowPopupAddress(false)}
              anchor="bottom-left"
            >
              <div> Địa chỉ{markerAddress?.place_name}</div>
            </Popup>
          )}
          <Marker
            latitude={markerAddress?.latitude}
            longitude={markerAddress?.longitude}
            offsetLeft={-20}
            offsetTop={-30}
          >
            <div
              onClick={() => setShowPopupAddress(true)}
              className=" text-rose-600"
            >
              <img className="w-[40px]" src={pin}></img>

              {/* <i className="fa-solid fa-location-dot text-4xl"></i> */}
            </div>
          </Marker>

          {showIconPlaces &&
            placesNearby.hospital?.map((place, index) => (
              <>
                <Marker
                  key={index}
                  latitude={place?.lat}
                  longitude={place?.lng}
                  offsetLeft={-20}
                  offsetTop={-30}
                >
                  <Tooltip
                    title={`Khoảng cách: ${place?.distance.toFixed(2)} km            Địa chỉ: ${place.display} `}
                  >
                    <div
                      onClick={() => setShowPopupIcon(true)}
                      // className=" text-rose-600"
                    >
                      {/* <i class="fa-solid fa-circle-h text-2xl"></i> */}
                      <img className="w-[40px]" src={hospital}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {showIconPlaces &&
            placesNearby.school?.map((place, index) => (
              <>
                <Marker
                  key={index}
                  latitude={place?.lat}
                  longitude={place?.lng}
                  offsetLeft={-20}
                  offsetTop={-30}
                >
                  <Tooltip
                    title={`Khoảng cách: ${place?.distance.toFixed(2)} km            Địa chỉ: ${place.display} `}
                  >
                    <div
                    // onClick={() => setShowPopupIcon(true)}
                    // className=" text-rose-600 "
                    >
                      <img className="w-[40px]" src={education}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {showIconPlaces &&
            placesNearby.university &&
            placesNearby.university.map((place, index) => (
              <>
                <Marker
                  key={index}
                  latitude={place?.lat}
                  longitude={place?.lng}
                  offsetLeft={-20}
                  offsetTop={-30}
                >
                  <Tooltip
                    title={`Khoảng cách: ${place?.distance.toFixed(2)} km            Địa chỉ: ${place.display} `}
                  >
                    <div
                    // onClick={() => setShowPopupIcon(true)}
                    // className=" text-rose-600 "
                    >
                      <img className="w-[40px]" src={univer}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {showIconPlaces &&
            placesNearby.plaza &&
            placesNearby.plaza.map((place, index) => (
              <>
                <Marker
                  key={index}
                  latitude={place?.lat}
                  longitude={place?.lng}
                  offsetLeft={-20}
                  offsetTop={-30}
                >
                  <Tooltip
                    title={`Khoảng cách: ${place?.distance.toFixed(2)} km            Địa chỉ: ${place.display} `}
                  >
                    <div className=" text-rose-600 ">
                      <img className="w-[40px]" src={shopping}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {showIconPlaces &&
            placesNearby.relax &&
            placesNearby.relax.map((place, index) => (
              <>
                <Marker
                  key={index}
                  latitude={place?.lat}
                  longitude={place?.lng}
                  offsetLeft={-20}
                  offsetTop={-30}
                >
                  <Tooltip
                    title={`Khoảng cách: ${place?.distance.toFixed(2)} km            Địa chỉ: ${place.display} `}
                  >
                    <div className=" text-rose-600 ">
                      <img className="w-[40px]" src={coffee - shop}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {showIconPlaces &&
            placesNearby.historical &&
            placesNearby.historical.map((place, index) => (
              <>
                <Marker
                  key={index}
                  latitude={place?.lat}
                  longitude={place?.lng}
                  offsetLeft={-20}
                  offsetTop={-30}
                >
                  <Tooltip
                    title={`Khoảng cách: ${place?.distance.toFixed(2)} km            Địa chỉ: ${place.display} `}
                  >
                    <div className=" text-rose-600 ">
                      <img className="w-[40px]" src={historical}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {showIconPlaces &&
            placesNearby.commitee &&
            placesNearby.commitee.map((place, index) => (
              <>
                <Marker
                  key={index}
                  latitude={place?.lat}
                  longitude={place?.lng}
                  offsetLeft={-20}
                  offsetTop={-30}
                >
                  <Tooltip
                    title={`Khoảng cách: ${place?.distance.toFixed(2)} km            Địa chỉ: ${place.display} `}
                  >
                    <div className=" text-rose-600 ">
                      <img className="w-[40px]" src={police}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {showIconPlaces &&
            placesNearby.relax &&
            placesNearby.relax.map((place, index) => (
              <>
                <Marker
                  key={index}
                  latitude={place?.lat}
                  longitude={place?.lng}
                  offsetLeft={-20}
                  offsetTop={-30}
                >
                  <Tooltip
                    title={`Khoảng cách: ${place?.distance.toFixed(2)} km            Địa chỉ: ${place.display} `}
                  >
                    <div className=" text-rose-600 ">
                      <img className="w-[40px]" src={coffee - shop}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {showIconPlaces &&
            placesNearby.charging &&
            placesNearby.charging.map((place, index) => (
              <>
                <Marker
                  key={index}
                  latitude={place?.lat}
                  longitude={place?.lng}
                  offsetLeft={-20}
                  offsetTop={-30}
                >
                  <Tooltip
                    title={`Khoảng cách: ${place?.distance.toFixed(2)} km            Địa chỉ: ${place.display} `}
                  >
                    <div className=" text-rose-600 ">
                      <img className="w-[40px]" src={charging_station}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {showIconPlaces &&
            placesNearby.parking &&
            placesNearby.parking.map((place, index) => (
              <>
                <Marker
                  key={index}
                  latitude={place?.lat}
                  longitude={place?.lng}
                  offsetLeft={-20}
                  offsetTop={-30}
                >
                  <Tooltip
                    title={`Khoảng cách: ${place?.distance.toFixed(2)} km            Địa chỉ: ${place.display} `}
                  >
                    <div className=" text-rose-600 ">
                      <img className="w-[40px]" src={parking}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {showIconPlaces &&
            placesNearby.public_transport &&
            placesNearby.public_transport.map((place, index) => (
              <>
                <Marker
                  key={index}
                  latitude={place?.lat}
                  longitude={place?.lng}
                  offsetLeft={-20}
                  offsetTop={-30}
                >
                  <Tooltip
                    title={`Khoảng cách: ${place?.distance.toFixed(2)} km            Địa chỉ: ${place.display} `}
                  >
                    <div className=" text-rose-600 ">
                      <img className="w-[50px]" src={bus3}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
        </ReactMapGL>
      </div>
    </>
  );
};

export default VietMap;
