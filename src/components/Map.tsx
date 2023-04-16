import React, { ReactNode } from "react";
import { useState } from "react";
import L, { Icon } from "leaflet";
import "../Styles/styles.css";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import portagem from "./portagem.png";
import warning from "./warning.png";
import location from "./location.png";

interface ClickableMapProps {
  children: ReactNode;
  onClick: (latlng: L.LatLng) => void;
}

const ClickableMap: React.FC<ClickableMapProps> = ({ children, onClick }) => {
  useMapEvents({
    click: (e) => {
      onClick(e.latlng);
    },
  });
  return <>{children}</>;
};

interface MapProps {
  onLogout: () => void;
}

const Map: React.FC<MapProps> = ({ onLogout }) => {
  const [markers, setMarkers] = useState([
    {
      geocode: [40.207218, -8.429397],
      popUp: "BOMBA NA PORTAGEM",
    },
  ]);
  const [firstClick, setFirstClick] = useState(true);
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);

  const customIcon = new Icon({
    iconUrl: location,
    iconSize: [28, 28], //icon size
  });

  const customIcon2 = new Icon({
    iconUrl: warning,
    iconSize: [28, 28], // icon size
  });

  type PinType = "customIcon" | "customIcon2";
  const [selectedPin, setSelectedPin] = useState("customIcon");

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
  const [isReportModalOpen, setReportModalOpen] = useState(false);

  const handlePinSelection = (pinType: PinType) => {
    setSelectedPin(pinType);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleReportModal = () => {
    setReportModalOpen(!isReportModalOpen);
  };

  const handleInfo = () => {};

  const handleComplaints = () => {};

  const handleLogout = () => {
    onLogout();
  };

  const handleQueixa = () => {
    handleReportModal();
  };

  const handleMapClick = (latlng: L.LatLng) => {
    if (firstClick) {
      setMarkers([
        ...markers,
        { geocode: [latlng.lat, latlng.lng], popUp: "New Marker" },
      ]);
      setFirstClick(false);
    } else {
      setMarkers(markers.slice(0, -1));
      setFirstClick(true);
    }
  };

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
      <div className="pin-selection-container">
        <img
          className={`pin-icon ${
            selectedPin === "customIcon" ? "selected" : ""
          }`}
          src={location} // Change this line
          alt="Pin 1"
          onClick={() => handlePinSelection("customIcon")}
        />
        <img
          className={`pin-icon ${
            selectedPin === "customIcon2" ? "selected" : ""
          }`}
          src={warning}
          alt="Pin 2"
          onClick={() => handlePinSelection("customIcon2")}
        />
      </div>
      <ClickableMap onClick={handleMapClick}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </ClickableMap>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.geocode[0], marker.geocode[1]]}
          icon={
            index === 0
              ? customIcon
              : selectedPin === "customIcon"
              ? customIcon
              : customIcon2
          }
        >
          {index === 0 && (
            <Popup>
              <strong>{marker.popUp}</strong>
              <br />
              <span>
                AJUAduDaa!!!!!!!! OBOMBA NA PROTAGEM!!!!!!1111!!TICTAC
              </span>
              <img src={portagem} alt="Portagem" height="150px" width="auto" />
            </Popup>
          )}
        </Marker>
      ))}
      <div className="user-button" onClick={toggleDropdown}>
        U
      </div>
      <div className={`user-dropdown ${dropdownVisible ? "visible" : ""}`}>
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
            <textarea
              rows={4}
              placeholder="Escreva a descrição aqui"
            ></textarea>
            <br />
            <h2>Fotografia</h2>
            <input type="file" accept="image/*" />
            <br />
            <div className="submit-button-container">
              <button className="submit-button" onClick={() => {}}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </MapContainer>
  );
};

export default Map;
