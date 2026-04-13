import { useEffect, useState } from "react";
import { scanUrl, getLogs, fetchUrl } from "../services/api";
import LogsTable from "../components/LogsTable";
import ChartCard from "../components/ChartCard";
import MapView from "../components/MapView";

const Dashboard = () => {
  const [url, setUrl] = useState("");
  const [logs, setLogs] = useState([]);
  const [ssrfResult, setSsrfResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [terminalText, setTerminalText] = useState("");

  // ✅ Smooth typing (NO BLINK BUG)
  useEffect(() => {
    const text = "> Cyber Defense System Online";
    let i = 0;

    const interval = setInterval(() => {
      setTerminalText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // 🔄 Fetch logs
  const fetchLogs = async () => {
    try {
      setLoading(true);
      const res = await getLogs();
      setLogs(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  // 🔍 Scan
  const handleScan = async () => {
    if (!url.trim()) return;
    await scanUrl(url);
    fetchLogs();
    setUrl("");
  };

  // 💀 SSRF
  const handleSSRF = async () => {
    if (!url.trim()) return;

    setSsrfResult("⏳ Running SSRF...");

    try {
      const res = await fetchUrl(url);

      setSsrfResult(
        "✅ ACCESS GRANTED\n\n" +
        JSON.stringify(res.data, null, 2) +
        "\n\n🟢 Time: " +
        new Date().toLocaleTimeString()
      );
    } catch (err) {
      setSsrfResult(
        "🚫 BLOCKED\n\n" +
        JSON.stringify(err.response?.data || {}, null, 2) +
        "\n\n🔴 Time: " +
        new Date().toLocaleTimeString()
      );
    }
  };

  // 🎯 Threat %
  const danger =
    logs.length > 0
      ? Math.round(
          (logs.filter((l) => l.status === "blocked").length / logs.length) *
            100
        )
      : 0;

  return (
    <div style={container}>

      {/* 🔥 HEADER */}
      <h1 style={title}>{terminalText}</h1>

      {/* INPUT */}
      <div style={inputBox}>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="> Enter target URL..."
          style={input}
        />

        <button onClick={handleScan} style={btnGreen}>
          SCAN
        </button>

        <button onClick={handleSSRF} style={btnRed}>
          SSRF
        </button>
      </div>

      {/* SSRF OUTPUT */}
      {ssrfResult && (
        <div style={resultBox}>
          <pre>{ssrfResult}</pre>
        </div>
      )}

      {/* 🔥 THREAT BAR */}
      <div style={dangerBox}>
        <div
          style={{
            width: `${danger}%`,
            height: "10px",
            background: danger > 60 ? "#ff0033" : "#00ff88",
            transition: "width 0.5s ease"   // ✅ SMOOTH
          }}
        />
        <p>Threat Level: {danger}%</p>
      </div>

      {/* 📊 CHART */}
      <ChartCard logs={logs} />

      {/* 📋 LOGS */}
      <LogsTable logs={logs} loading={loading} />

      {/* 🌍 MAP */}
      <MapView logs={logs} />
    </div>
  );
};

// 🎨 PRO STYLES (NO GLITCH)
const container = {
  background: "#000",
  color: "#00ff88",
  minHeight: "100vh",
  padding: "20px",
  fontFamily: "monospace"
};

const title = {
  textShadow: "0 0 8px #00ff88"
};

const inputBox = {
  marginTop: 20,
  display: "flex",
  gap: "10px"
};

const input = {
  flex: 1,
  padding: "12px",
  background: "#000",
  color: "#00ff88",
  border: "1px solid #00ff88",
  outline: "none"
};

const btnGreen = {
  padding: "12px",
  border: "1px solid #00ff88",
  color: "#00ff88",
  background: "#000",
  cursor: "pointer",
  transition: "all 0.3s ease"
};

const btnRed = {
  padding: "12px",
  border: "1px solid red",
  color: "red",
  background: "#000",
  cursor: "pointer",
  transition: "all 0.3s ease"
};

const resultBox = {
  marginTop: 20,
  border: "1px solid red",
  padding: 15,
  background: "#111"
};

const dangerBox = {
  marginTop: 20,
  border: "1px solid #00ff88",
  padding: 10
};

export default Dashboard;