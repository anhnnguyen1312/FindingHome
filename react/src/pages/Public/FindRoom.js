import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../components/NavBar.css";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import { Avatar, Paper, Tooltip } from "@mui/material";
import uPhoto from "../../assets/images/userAvatar.jpg";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";
import { UpdateLocationAction } from "../../redux/store/action/locationAction";
import { useSelector, useDispatch } from "react-redux";
import { PopUpInfor } from "../../components/index";
// import useSupercluster from "use-supercluster";
import useSuperCluster from "use-supercluster";
import { FindPlacesNearby } from "../../components/FindPlacesNearby";
import hospital from "../../assets/images/iconPlaces/hospital.png";
import parking from "../../assets/images/iconPlaces/parking.png";
import univer from "../../assets/images/iconPlaces/univer.png";
import bus3 from "../../assets/images/iconPlaces/bus3.png";
import shopping from "../../assets/images/iconPlaces/shopping.png";
import education from "../../assets/images/iconPlaces/education.png";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";

const FindRoom = () => {
  const [pickMarker, setPickMarker] = useState(false);
  const [popUpInfor, setPopUpInfor] = useState(null);
  const [showPlacesIcon, setShowPlacesIcon] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const [confirmed, setConfirmed] = useState(false);
  const [popUpAddress, setPopupAddress] = useState();

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
  const { homepagePosts } = useSelector((state) => state.post);
  const useLocate = useLocation();
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  const points = homepagePosts.map((post) => ({
    type: "Feature",
    properties: {
      cluster: false,
      id: post.id,
      address: post.address,
      price: post.price,
      uName: post.username,
      title: post.title,
      phone: post.phone,
      typeRoom: post.typeRoom,
      images: post.urlImages,
      uPhoto: post.urlImages[0],
    },
    geometry: {
      type: "Point",
      coordinates: [parseFloat(post.lng), parseFloat(post.lat)],
    },
  }));

  useEffect(() => {
    const latlng = useLocate?.state;
    latlng?.length === 2 &&
      setViewState({
        ...viewState,
        latitude: latlng[0],
        longitude: latlng[1],
        zoom: 11,
      });
    message.info("Phóng tới vị trí bạn cần tìm để hiển thị phòng");
  }, []);

  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;
  const { clusters, supercluster } = useSuperCluster({
    points,
    bounds,
    zoom: viewState.zoom,
    options: { radius: 200, maxZoom: 13 },
  });
  console.log("clusters", clusters);

  console.log("supercluster", supercluster);
  const VIETMAP_KEY = "af4284a02ae26231e2a517f30b67d25216a69b76782dfb4c";
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoidGhhaS1uZ29jLXBodSIsImEiOiJjbHhpd3p2amwxbGozMnJyMmJhZTExZ3pkIn0.BnFFOObKYnZUOf2wJstUFg";
  const geolocateControlStyle = {
    right: 10,
    top: 10,
  };
  const handleonGeolocate = (event) => {
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

        setMarker((prevState) => ({
          ...prevState,
          ["place_name"]: data,
        }));
        setShowPopup(true);
      });
  };

  const handlePickMaker = () => {
    setMarker({
      latitude: viewState.latitude,
      longitude: viewState.longitude,
      place_name: "",
    });
  };

  const handleClickPopUpInfor = (latitude, longitude, cluster) => {
    setPopUpInfor(cluster);
    setShowPlacesIcon(true);
    setIsShow(false);
    setPopupAddress({ latitude: latitude, longitude: longitude });
    FindPlacesNearby(latitude, longitude, setPlacesNearby);
  };
  const handleDeleteMaker = () => {
    setMarker();
    setShowPopup(false);
  };
  const distanceCalc = () => {
    axios
      .get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${marker.longitude},${marker.latitude};${popUpAddress.longitude},${popUpAddress.latitude}.json?access_token=${MAPBOX_TOKEN}`
      )
      .then((res) => {
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

  console.log("Marker", marker);

  return (
    <>
      <div className="w-full h-[90vh] relative">
        {showPlacesIcon && (
          <div className="absolute top-[100px] bg-rose-500 right-[10px] z-10 text-white p-[5px] ">
            <button onClick={() => setIsShow(!isShow)}>
              {" "}
              {isShow ? "Ẩn tiện ích gần đây" : "Xem tiện ích gần đây"}
            </button>
          </div>
        )}
        <div className="absolute top-[140px] bg-[#687d9f] right-[10px] z-10 text-white p-[5px] ">
          <button className="  text-white" onClick={() => handlePickMaker()}>
            <i className="fas fa-plus"></i>{" "}
            <i className="fa-solid fa-location-dot text-xl"></i>{" "}
          </button>{" "}
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
            {popUpAddress && (
              <div className="absolute top-[220px] bg-cyan-600 right-[10px] z-10 text-white p-[5px] ">
                <button onClick={() => distanceCalc()}>Xem khoảng cách</button>
              </div>
            )}
          </>
        )}
        <ReactMapGL
          {...viewState}
          width={"100vw"}
          height={"100vh"}
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
                  className=" text-rose-600"
                >
                  <i className="fa-solid fa-location-dot text-5xl"></i>
                </div>
              </Marker>
            </>
          )}

          {clusters.map((cluster) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties;
            if (isCluster) {
              return (
                <Marker
                  key={cluster.id}
                  latitude={latitude}
                  longitude={longitude}
                >
                  <div
                    style={{
                      width: `${20 + (pointCount / points.length) * 20}px`,
                      height: `${20 + (pointCount / points.length) * 20}px`,
                    }}
                    className=" bg-[#1978c8] rounded-full flex items-center justify-center text-white "
                    onClick={() => {
                      const zoom = Math.min(
                        supercluster.getClusterExpansionZoom(cluster.id),
                        20
                      );
                      mapRef.current.flyTo({
                        center: [longitude, latitude],
                        zoom,
                        speed: 1,
                      });
                    }}
                  >
                    {pointCount}
                  </div>
                </Marker>
              );
            }
            return (
              <Marker
                key={cluster.id}
                latitude={latitude}
                longitude={longitude}
              >
                <Tooltip title={`${cluster.properties.price} tr/tháng`}>
                  <Avatar
                    src={cluster.properties.uPhoto}
                    component={Paper}
                    elevation={2}
                    onClick={() =>
                      handleClickPopUpInfor(latitude, longitude, cluster)
                    }
                  />
                </Tooltip>
              </Marker>
            );
          })}
          {popUpInfor && (
            <Popup
              latitude={popUpInfor?.geometry.coordinates[1]}
              longitude={popUpInfor?.geometry.coordinates[0]}
              closeButton={true}
              closeOnClick={false}
              focusAfterOpen={false}
              maxWidth="auto"
              onClose={() => setPopUpInfor(null)}
            >
              <PopUpInfor cluster={popUpInfor.properties} />
            </Popup>
          )}
          {isShow &&
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
                    <div>
                      <img className="w-[40px]" src={hospital}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {isShow &&
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
                    <div>
                      <img className="w-[40px]" src={education}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {isShow &&
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
                    <div>
                      <img className="w-[40px]" src={univer}></img>
                    </div>
                  </Tooltip>
                </Marker>
              </>
            ))}
          {isShow &&
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
          {isShow &&
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
        </ReactMapGL>
      </div>
    </>
  );
};

export default FindRoom;
