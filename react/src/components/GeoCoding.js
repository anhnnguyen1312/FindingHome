// GeocodingComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map';ssssssssssssssssssssssssssssssssssssssss

const GeoCoding = ({ address }) => {
  const [latLng, setLatLng] = useState(null);

  const getLatLngFromAddress = async (address) => {
    const apiKey = 'AIzaSyBGZm5utqr15PEOT_YqwU06CDZy_5KK4Rc';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const result = response.data.results[0];
      if (result) {
        const location = result.geometry.location;
        setLatLng({ lat: location.lat, lng: location.lng });
      } else {
        console.error('No results found');
      }
    } catch (error) {
      console.error('Error fetching geocoding data:', error);
    }
  };

  useEffect(() => {
    if (address) {
      getLatLngFromAddress(address);
    }
  }, [address]);

  return (
    <div>
      {latLng ? (
        <Map latLng={latLng} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GeoCoding;
