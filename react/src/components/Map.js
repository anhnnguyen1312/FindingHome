import React, { memo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
const containerStyle = {
  width: "500px",
  height: "500px",
};

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };
// 10.7322779, 106.6997508
const center = {
  lat: 10.7322779,
  lng: 106.6997508,
};
function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // googleMapsApiKey: "AIzaSyDD-HdktkgyzpCzt64ZWnZJqRkT38gFoPk",
    googleMapsApiKey: "AIzaSyB4Ki1zZ602mxvPyCLzakwj_1TofiBO9MU",

    // googleMapsApiKey: "AIzaSyB4Ki1zZ602mxvPyCLzakwj_1TofiBO9MU",
  });

  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
