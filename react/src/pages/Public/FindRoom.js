import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";
import { UpdateLocationAction } from "../../redux/store/action/locationAction";
import { useSelector, useDispatch } from "react-redux";
//import SearchLocation from "../../components/SearchLocation";
const FindRoom = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [marker, setMarker] = useState(null);
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
  const dispatch = useDispatch();

  //   const location = useSelector((state) => state.location);
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

      setMarker({
        latitude: event.result.geometry.coordinates[1],
        longitude: event.result.geometry.coordinates[0],
        place_name: event.result.place_name,
      });

      setViewState({
        ...viewState,
        latitude: event.result.geometry.coordinates[1],
        longitude: event.result.geometry.coordinates[0],
        zoom: 14,
      });
    });

    geocoder.on("clear", () => {
      setMarker(null);
    });
  };
  return (
    <>
      <div style={{ height: "50vh", width: "100%" }}>
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
          {/* <Geocoder
                      mapboxApiAccessToken={MAPBOX_TOKEN} onSelected={(newViewport, item) => {handleViewportChange(newViewport, item); setReady(true)}} viewport={viewport} hideOnSelect={true} initialInputValue={result.location}
                  /> */}
          {/* <Geocoder
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
          placeholder="Tìm kiếm!"
          marker={true}
        /> */}
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
                    <p>{` Địa chỉ: ${marker.place_name} `}</p>
                    <p>{` kinh độ: ${marker.latitude} `}</p>
                    <p>{` vĩ độ: ${marker.longitude} `}</p>
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
