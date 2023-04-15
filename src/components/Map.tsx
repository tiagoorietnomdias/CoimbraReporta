import React from "react";
<<<<<<< Updated upstream
import { useState, useEffect } from 'react';
import L, { Icon } from "leaflet";
import "../Styles/styles.css";
=======
import { useState, useEffect } from "react";
import L, { Icon } from "leaflet";
import "../Styles/map.css";
>>>>>>> Stashed changes
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

  const [dropdownVisible, setDropdownVisible] = useState(false);
<<<<<<< Updated upstream
  const [isReportModalOpen, setReportModalOpen] = useState<boolean>(false);
=======
>>>>>>> Stashed changes

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleInfo = () => {
    // Handle info action here
  };

  const handleComplaints = () => {
    // Handle complaints verification action here
  };

  const handleLogout = () => {
    // Implement your logout logic here
  };

<<<<<<< Updated upstream
  const handleQueixa = () => {
    handleReportModal();
  };

  const handleReportModal = () => {
    setReportModalOpen(!isReportModalOpen);
  };

=======
>>>>>>> Stashed changes
  return (
    <MapContainer
      className="map"
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
<<<<<<< Updated upstream
       <div className="user-button" onClick={toggleDropdown}>
        U
      </div>
      <div className={`user-dropdown ${dropdownVisible ? 'visible' : ''}`}>
=======
      <div className="user-button" onClick={toggleDropdown}>
        U
      </div>
      <div className={`user-dropdown ${dropdownVisible ? "visible" : ""}`}>
>>>>>>> Stashed changes
        <div className="user-dropdown-item" onClick={handleInfo}>
          Informações
        </div>
        <div className="user-dropdown-item" onClick={handleComplaints}>
          Verificação de queixas
        </div>
        <div className="user-dropdown-item" onClick={handleLogout}>
          Logout
        </div>
      </div>
<<<<<<< Updated upstream
        <div className="btn-add" onClick={handleQueixa}>
          Reporte
        </div>
        {isReportModalOpen && (
        <div className="modal" onClick={handleReportModal}>
          <div
            className="modal-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-close" onClick={handleReportModal}>
              &times;
            </div>
            <h2>Título</h2>
            <input type="text" placeholder="Escreva o título aqui" />
            <br />
            <h2>Descrição (opcional)</h2>
            <textarea rows={4} placeholder="Escreva a descrição aqui"></textarea>
            <br />
            <h2>Fotografia</h2>
            <input type="file" accept="image/*" />
          </div>
        </div>
      )}
=======
>>>>>>> Stashed changes
    </MapContainer>
  );
};

export default Map;