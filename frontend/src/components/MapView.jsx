// const MapView = ({ logs }) => {
//   return (
//     <div className="border border-green-500 p-4 mt-6">
//       <h2 className="text-green-400">&gt; ATTACK MAP</h2>
//       <p>Map coming soon...</p>
//     </div>
//   );
// };

// export default MapView;




// const MapView = ({ logs }) => {
//   return (
//     <div style={{
//       marginTop: 20,
//       border: "1px solid #00ff88",
//       padding: 10
//     }}>
//       <h3>&gt; Attack Map</h3>

//       {logs.length === 0 && <p>No attacks yet</p>}

//       {logs.map((log, i) => (
//         <p key={i}>
//           🌍 Unknown → {log.type} ({log.status})
//         </p>
//       ))}
//     </div>
//   );
// };

// export default MapView;



// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useEffect, useState } from "react";

// const MapView = ({ logs }) => {
//   const [locations, setLocations] = useState([]);

//   useEffect(() => {
//     const fetchLocations = async () => {
//       const results = [];

//       for (let log of logs) {
//         try {
//           // free IP API
//           const res = await fetch("https://ipapi.co/json/");
//           const data = await res.json();

//           results.push({
//             lat: data.latitude,
//             lon: data.longitude,
//             city: data.city,
//             type: log.type,
//             status: log.status
//           });

//         } catch {}
//       }

//       setLocations(results);
//     };

//     if (logs.length) fetchLocations();
//   }, [logs]);

//   return (
//     <div style={{ marginTop: 20 }}>
//       <h3>&gt; Attack Map</h3>

//       <MapContainer center={[20, 78]} zoom={2} style={{ height: "300px" }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {locations.map((loc, i) => (
//           <Marker key={i} position={[loc.lat, loc.lon]}>
//             <Popup>
//               {loc.city} <br />
//               {loc.type} ({loc.status})
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapView;





// import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
// import { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";

// // fallback random points
// const fallback = [
//   [28.61, 77.20],
//   [40.71, -74.00],
//   [51.50, -0.12],
//   [35.68, 139.69],
// ];

// const MapView = ({ logs }) => {
//   const [points, setPoints] = useState([]);

//   useEffect(() => {
//     const load = async () => {
//       const arr = [];

//       for (let log of logs) {
//         try {
//           // IP → location
//           const res = await fetch(`https://ipapi.co/${log.ip}/json/`);
//           const data = await res.json();

//           arr.push({
//             lat: data.latitude || fallback[Math.floor(Math.random()*4)][0],
//             lng: data.longitude || fallback[Math.floor(Math.random()*4)][1],
//             type: log.type,
//             status: log.status
//           });

//         } catch {
//           const f = fallback[Math.floor(Math.random()*4)];
//           arr.push({ lat: f[0], lng: f[1], type: log.type, status: log.status });
//         }
//       }

//       setPoints(arr);
//     };

//     if (logs.length) load();
//   }, [logs]);

//   return (
//     <div style={{ marginTop: 20 }}>
//       <h3>&gt; Live Attack Map</h3>

//       <MapContainer center={[20, 0]} zoom={2} style={{ height: "300px" }}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//         {points.map((p, i) => (
//           <CircleMarker
//             key={i}
//             center={[p.lat, p.lng]}
//             radius={8}
//             pathOptions={{
//               color: p.status === "blocked" ? "red" : "lime"
//             }}
//             className="attack-anim"
//           >
//             <Popup>
//               💀 {p.type} <br />
//               {p.status}
//             </Popup>
//           </CircleMarker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapView;







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