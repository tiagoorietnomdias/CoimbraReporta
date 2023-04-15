import React from "react";
import { useState, useEffect } from "react";
import "../Styles/map.css";
import L, { Icon } from "leaflet";
import { MapContainer, Marker, TileLayer, GeoJSON } from "react-leaflet";

import "leaflet/dist/leaflet.css";
const Map = () => {
  const markers = [
    {
      geocode: [40.2115, -8.4292],
      popUp: "BOMBA NA PORTAGEM",
    },
  ];
  const customIcon = new Icon({
    iconUrl: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/location.svg",
    iconSize: [28, 28], //icon size
  });
  const cornerCoordinates = [
    //[40.540055, -8.909675] top-left
    [40.540055, -7.730746], // top-right
    //[39.922907, -7.730746] bottom-right
    [39.922907, -8.909675], // bottom-left
  ];

  const bounds = L.latLngBounds([
    [cornerCoordinates[0][0], cornerCoordinates[0][1]],
    [cornerCoordinates[1][0], cornerCoordinates[1][1]],
  ]);

  const handleLogout = () => {
    // Implement your logout logic here
  };
  return (
    <MapContainer
      center={[40.2115, -8.4292]}
      zoom={15}
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
      minZoom={10}
      maxZoom={18}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {markers.map((marker) => (
        <Marker
          position={[marker.geocode[0], marker.geocode[1]]}
          icon={customIcon}
        ></Marker>
      ))}
      <button className="btn-add">Add marker</button>
    </MapContainer>
  );
};

export default Map;
