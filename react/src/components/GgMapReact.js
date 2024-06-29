import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Marker = (props) => {
  return (
    <div style={{ color: "red" }} className="flex items-center px-[10px] ">
      <i className="fa-solid fa-location-dot"></i>
    </div>
  );
};
export default function GgMapReact({ address }) {
  const [latLong, setLatLong] = useState(null);
  useEffect(() => {
    // const handleDate = () => {
    //   const today = new Date();
    //   const endDate = new Date(new Date().setDate(today.getDate() + 90));
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     dateCreateAt: formatDate(today),
    //     dateExpired: formatDate(endDate),
    //   }));
    // };
    // handleDate();
    const callApiGeocoding = async () => {
      try {
        const response = await geocodeByAddress(address);
        console.log("response", response);

        //    const latLng = await getLatLng(response[0])
      } catch (error) {
        console.log(error);
      }
    };

    address && callApiGeocoding();
  }, [address]);
  const defaultProps = {
    center: {
      lat: 10.7322779,
      lng: 106.6997508,
    },
    zoom: 15,
  };
  console.log("address", address);
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDD-HdktkgyzpCzt64ZWnZJqRkT38gFoPk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={10.7322779} lng={106.6997508} />
        {/* <AnyReactComponent
          lat={10.7322779}
          lng={106.6997508}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
  );
}
