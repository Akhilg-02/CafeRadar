import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import RecenterMap from './RecenterMap';
import FlyToCafe from './FlyToCafe';
import CafeList from './CafeList';

const userIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});


export const CafeMarkers = () => {
  const [cafes, setCafes] = useState([]);
  const [userPosition, setUserPosition] = useState(null);
  const [selectedCafe, setSelectedCafe] = useState(null)

  useEffect(() => {
    fetch("/cafe.json")
      .then((res) => res.json())
      .then((data) => setCafes(data))
      .catch((err) => console.error("Failed to load cafes.json", err.message));


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.warn("Geolocation failed or denied:", err.message);
          setUserPosition([20.5937, 78.9629]);
        }
      )
    } else {
      setUserPosition([20.5937, 78.9629]);
    }

  }, [])

  if (!userPosition) {
    return <p>Locating you...</p>;
  }
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar with cafe list */}
      <CafeList cafes={cafes} onSelectCafe={setSelectedCafe} />

      {/* Map */}
      <MapContainer
        center={userPosition}
        zoom={12}
        style={{ height: "600px", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User marker */}
        <Marker
          position={userPosition}
          icon={userIcon}
        >
          <Popup>You are here</Popup>
        </Marker>

        {/* Cafe markers */}
        {cafes.map((cafe) => (
          <Marker key={cafe.id} position={[cafe.lat, cafe.lng]}>
            <Popup>{cafe.name}</Popup>
          </Marker>
        ))}

        <RecenterMap latlng={userPosition} />
        
        {/* 🔹 Fly to selected cafe */}
        <FlyToCafe cafe={selectedCafe}/>
      </MapContainer>


    </div>
  )
}
export default CafeMarkers

