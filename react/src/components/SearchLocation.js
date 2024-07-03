import React from "react";
import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useControl } from "react-map-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import mapboxgl from "mapbox-gl";
const SearchLocation = () => {
  const ctrl = new MapBoxGeocoder({
    accessToken:
      "pk.eyJ1IjoidGhhaS1uZ29jLXBodSIsImEiOiJjbHhpd3p2amwxbGozMnJyMmJhZTExZ3pkIn0.BnFFOObKYnZUOf2wJstUFg",
    marker: false,
    collapsed: true,
    placeholder: "Tìm kiếm ngay!",
    routing: true,
    mapboxgl: mapboxgl,
  });
  useControl(() => ctrl);
  ctrl.on("result", (e) => {
    const coords = e.result.geometry.coordinates;
    console.log("search location", coords, e);
    const marker = new mapboxgl.Marker({
      draggable: true,
      color: "orange",
    });
    //   .setLngLat(e.result.center)
    //   .addTo(map);
    marker.on("dragend", (e) => {
      console.log("dragend marker ", e);
    });
  });
  return null;
};

export default SearchLocation;
