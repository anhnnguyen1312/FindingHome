import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "500px",
  width: "100%",
};

const Map = ({ latLng }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBGZm5utqr15PEOT_YqwU06CDZy_5KK4Rc">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={latLng}
        zoom={15}
      >
        <Marker position={latLng} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
