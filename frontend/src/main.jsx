
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 🌍 Leaflet CSS (IMPORTANT for map)
import "leaflet/dist/leaflet.css";

// (Optional) global CSS
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);