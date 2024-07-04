import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";
import { UpdateLocationAction } from "../../redux/store/action/locationAction";
import { useSelector, useDispatch } from "react-redux";
//import SearchLocation from "../../components/SearchLocation";
const FindRoom = () => {
  const [pickMarker, setPickMarker] = useState(false);

  const [confirmed, setConfirmed] = useState(false);

  const [showPopup, setShowPopup] = useState(true);
  const [marker, setMarker] = useState();
  const [viewport, setViewport] = useState({
    latitude: 10.710999,
    longitude: 106.704449,
    zoom: 15,
  });
  const [viewState, setViewState] = useState({
    latitude: 10.710999,
    longitude: 106.704449,
    zoom: 12,
  });
  const dispatch = useDispatch();

  //   const location = useSelector((state) => state.location);
  const VIETMAP_KEY = "af4284a02ae26231e2a517f30b67d25216a69b76782dfb4c";
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoidGhhaS1uZ29jLXBodSIsImEiOiJjbHhpd3p2amwxbGozMnJyMmJhZTExZ3pkIn0.BnFFOObKYnZUOf2wJstUFg";
  const geolocateControlStyle = {
    right: 10,
    top: 10,
  };
  const handleonGeolocate = (event) => {
    console.log("handleonGeolocate", event);
    //   const data = {
    //     lat: e.coords.latitude,
    //     lng: e.coords.longitude,
    //     place_name: "",
    //   };
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
  console.log("load");
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
        console.log("data", data);
        setMarker((prevState) => ({
          ...prevState,
          ["place_name"]: data,
        }));
        setConfirmed(true);
      });
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
  console.log("Marker", marker);

  return (
    <>
      <div className="w-full h-[50vh] relative">
        <div className="absolute top-[100px] bg-[#687d9f] right-[10px] z-10 text-white p-[5px] ">
          <button onClick={() => handlePickMaker()}>Chọn địa điểm</button>
        </div>
        {(marker || confirmed) && (
          <div className="absolute top-[140px] bg-[#687d9f] right-[10px] z-10 text-white p-[5px] ">
            <button
              onClick={
                !confirmed
                  ? () => geocodingVietMap()
                  : () => console.log("send location", marker)
              }
            >
              {" "}
              {confirmed ? "Chọn địa chỉ" : "Xem địa chỉ"}
            </button>
          </div>
        )}
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
                  className=" text-rose-600"
                >
                  <i className="fa-solid fa-location-dot text-5xl"></i>
                </div>
              </Marker>
            </>
          )}
        </ReactMapGL>
      </div>
    </>
  );
};

export default FindRoom;
