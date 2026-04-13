import { MapContainer, TileLayer, CircleMarker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

// 🌍 Fixed global points (stable)
const locations = [
  { lat: 28.61, lng: 77.20, country: "India" },
  { lat: 40.71, lng: -74.00, country: "USA" },
  { lat: 51.50, lng: -0.12, country: "UK" },
  { lat: 35.68, lng: 139.69, country: "Japan" },
  { lat: 48.85, lng: 2.35, country: "France" },
];

// 🎯 Target (your server location)
const TARGET = { lat: 20, lng: 78 }; // India center

const MapView = ({ logs }) => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const arr = logs.map((log, i) => {
      const loc = locations[i % locations.length];

      return {
        ...loc,
        type: log.type,
        status: log.status
      };
    });

    setPoints(arr);
  }, [logs]);

  return (
    <div style={{
      marginTop: 20,
      border: "1px solid #00ff88",
      padding: 10
    }}>
      <h3>&gt; 🌍 Global Attack Visualization</h3>

      <MapContainer center={[20, 0]} zoom={2} style={{ height: "350px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 🔥 ATTACK DOTS */}
        {points.map((p, i) => (
          <CircleMarker
            key={i}
            center={[p.lat, p.lng]}
            radius={8}
            pathOptions={{
              color: p.status === "blocked" ? "red" : "lime"
            }}
            className="attack-anim"
          >
            <Popup>
              🌍 {p.country} <br />
              💀 {p.type} <br />
              {p.status}
            </Popup>
          </CircleMarker>
        ))}

        {/* ⚡ ATTACK LINES */}
        {points.map((p, i) => (
          <Polyline
            key={"line-" + i}
            positions={[
              [p.lat, p.lng],
              [TARGET.lat, TARGET.lng]
            ]}
            pathOptions={{
              color: p.status === "blocked" ? "red" : "lime",
              dashArray: "5,10"
            }}
          />
        ))}

        {/* 🎯 TARGET */}
        <CircleMarker
          center={[TARGET.lat, TARGET.lng]}
          radius={10}
          pathOptions={{ color: "yellow" }}
        >
          <Popup>🎯 Target Server</Popup>
        </CircleMarker>

      </MapContainer>
    </div>
  );
};

export default MapView;