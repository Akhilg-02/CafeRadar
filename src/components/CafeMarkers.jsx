import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import RecenterMap from './RecenterMap';
import FlyToCafe from './FlyToCafe';
import CafeList from './CafeList';

import { Box, CircularProgress, Typography, Paper } from "@mui/material"

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
    return (
      <Paper
        elevation={0}
        sx={{
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress color="primary" />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Locating you...
          </Typography>
        </Box>
      </Paper>
    )
  }
  return (
    <Box sx={{ display: "flex", minHeight: "70vh" }}>
      {/* Sidebar with cafe list */}
      <CafeList cafes={cafes} onSelectCafe={setSelectedCafe} />

      {/* Map */}
      <Box sx={{ flex: 1 }}>
      <MapContainer
        center={userPosition}
        zoom={12}
        style={{ height: "140vh", width: "100%", borderRadius: 8, overflow: "hidden" }}
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
        
        {/* Fly to selected cafe */}
        <FlyToCafe cafe={selectedCafe}/>
      </MapContainer>
      </Box>
    </Box>
  )
}
export default CafeMarkers

