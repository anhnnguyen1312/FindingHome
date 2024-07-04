import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMapGL, { Marker } from "react-map-gl";

const Mapbox_Cluster = () => {
  const [viewState, setViewState] = useState({
    latitude: 10.710999,
    longitude: 106.704449,
    zoom: 15,
  });
  const [zoom, setZoom] = useState(0);
  const { homepagePosts } = useSelector((state) => state.post);
  const mapRef = useRef(null);
  console.log("homepagePosts", homepagePosts);
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoidGhhaS1uZ29jLXBodSIsImEiOiJjbHhpd3p2amwxbGozMnJyMmJhZTExZ3pkIn0.BnFFOObKYnZUOf2wJstUFg";

  return (
    <>
      <div className="w-full h-[50vh] relative mt-[10vh]">
        <ReactMapGL
          //   width={"100vw"}
          //       height={"30vw"}
          //       latitude={10.710999}
          //       longitude={106.704449}
          //       zoom={14}
          {...viewState}
          //initialViewState={{ latitude: 10.710999, longitude: 106.704449 }}
          mapboxAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          ref={mapRef}
          //   onLoad={() => initializeGeocoder(mapRef.current.getMap())}
          onZoomEnd={(e) => setZoom(Math.round(e.viewState.zoom))}
          onMove={(evt) => setViewState(evt.viewState)}
        ></ReactMapGL>

        <Marker
          key={`${homepagePosts.id}`}
          longitude={longitude}
          latitude={latitude}
        >
          <Tooltip title={cluster.properties.uName}>
            <Avatar
              src={cluster.properties.uPhoto}
              component={Paper}
              elevation={2}
            />
          </Tooltip>
        </Marker>
      </div>
    </>
  );
};

export default Mapbox_Cluster;
