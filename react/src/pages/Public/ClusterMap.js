import React, { useEffect, useState, useRef } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Supercluster from "supercluster";
import { useDispatch, useSelector } from "react-redux";

import { Avatar, Paper, Tooltip } from "@mui/material";
import Mapbox_Cluster from "../../components/Mapbox_Cluster";
const supercluster = new Supercluster({
  radius: 75,
  maxZoom: 20,
});
const ClusterMap = () => {
  const [viewState, setViewState] = useState({
    latitude: 10.710999,
    longitude: 106.704449,
    zoom: 15,
  });
  const [points, setPoints] = useState([]);
  const [clusters, setClusters] = useState([]);
  const [bounds, setBounds] = useState([-180, -85, 180, 85]);
  const [zoom, setZoom] = useState(0);
  const { homepagePosts } = useSelector((state) => state.post);
  console.log("homepagePosts", homepagePosts);
  const mapRef = useRef(null);
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoidGhhaS1uZ29jLXBodSIsImEiOiJjbHhpd3p2amwxbGozMnJyMmJhZTExZ3pkIn0.BnFFOObKYnZUOf2wJstUFg";
  useEffect(() => {
    console.log("homepagePosts[0]?.id", homepagePosts[0]?.id);

    const points = {
      type: "Feature",
      properties: {
        cluster: false,
        postId: homepagePosts[0]?.id,
        price: homepagePosts[0]?.price,
        title: homepagePosts[0]?.title,
        description: homepagePosts[0]?.description,
        lng: 106.704449,
        lat: 10.710999,
        images: homepagePosts[0]?.urlImages,
        uPhoto: homepagePosts[0]?.avatar,
        uName: homepagePosts[0]?.username,
      },
      geometry: {
        type: "Point",
        coordinates: [parseFloat(106.704449), parseFloat(10.710999)],
      },
    };
    points && setPoints(points);
  }, [homepagePosts]);
  console.log("points", points);

  useEffect(() => {
    console.log("supercluster", supercluster);

    supercluster.load(points);
    setClusters(supercluster.getClusters(bounds, zoom));
    console.log("zoom", zoom);
  }, [points, zoom, bounds]);
  useEffect(() => {
    if (mapRef.current) {
      console.log("bounds", bounds);

      setBounds(mapRef.current.getMap().getBounds().toArray().flat());
    }
  }, [mapRef?.current]);
  console.log("cluster", clusters);

  return (
    <>
      <div className="w-full h-[50vh] relative">
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
        >
          {/* //   {...viewState}
        //   width={"100vw"}
        //   height={"30vh"}
        //   mapStyle="mapbox://styles/mapbox/streets-v11"
        //   mapboxAccessToken="pk.eyJ1IjoidGhhaS1uZ29jLXBodSIsImEiOiJjbHhpd3p2amwxbGozMnJyMmJhZTExZ3pkIn0.BnFFOObKYnZUOf2wJstUFg"
        //   onMove={(evt) => setViewState(evt.viewState)}
        //   ref={mapRef}
        //   // onLoad={() => initializeGeocoder(mapRef.current.getMap())}
        // > */}

          {clusters.map((cluster) => {
            console.log("cluster", cluster);
            const { cluster: isCluster, point_count } = cluster.properties;
            const [longitude, latitude] = cluster.geometry.coordinates;
            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  longitude={longitude}
                  latitude={latitude}
                >
                  <div
                    className=" rounded-full p-[10px] flex justify-center  items-center bg-blue-500 text-white"
                    style={{
                      width: `${10 + (point_count / points.length) * 20}px`,
                      height: `${10 + (point_count / points.length) * 20}px`,
                    }}
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
                    {point_count}
                  </div>
                </Marker>
              );
            }
            return (
              <Marker
                key={`room-${cluster.properties.roomId}`}
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
            );
          })}
        </ReactMapGL>
      </div>
      <Mapbox_Cluster />
    </>
  );
};

export default ClusterMap;
