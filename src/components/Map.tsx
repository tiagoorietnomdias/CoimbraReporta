import L from "leaflet";
import "../Styles/main.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
const Map = () => {
  const markers = [
    {
      geocode: [40.2115, -8.4292],
      popUp: "BOMBA NA PORTAGEM",
    },
  ];

  return (
    <MapContainer center={[40.2115, -8.4292]} zoom={13}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {markers.map((marker) => (
        <Marker position={[marker.geocode[0], marker.geocode[1]]}></Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
