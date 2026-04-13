// import { useEffect, useState } from "react";
// import { scanUrl, getLogs, fetchUrl } from "../services/api";
// import ChartCard from "../components/ChartCard";
// import LogsTable from "../components/LogsTable";

// const Dashboard = () => {
//   const [url, setUrl] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [ssrf, setSsrf] = useState("");

//   const fetchData = async () => {
//     const res = await getLogs();
//     setLogs(res.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleScan = async () => {
//     await scanUrl(url);
//     fetchData();
//   };

//   const handleSSRF = async () => {
//     try {
//       const res = await fetchUrl(url);
//       setSsrf("Allowed");
//     } catch {
//       setSsrf("Blocked");
//     }
//   };

//   const chartData = {
//     labels: ["Allowed", "Blocked"],
//     datasets: [
//       {
//         data: [
//           logs.filter(l => l.status === "allowed").length,
//           logs.filter(l => l.status === "blocked").length,
//         ],
//       },
//     ],
//   };

//   return (
//     <div>
//       <h1>Security Dashboard</h1>

//       <input value={url} onChange={(e) => setUrl(e.target.value)} />
//       <button onClick={handleScan}>Scan</button>
//       <button onClick={handleSSRF}>SSRF</button>

//       <p>{ssrf}</p>

//       <ChartCard data={chartData} />
//       <LogsTable logs={logs} />
//     </div>
//   );
// };

// export default Dashboard;
// console.log("Dashboard loaded");
// const Dashboard = () => {
//   return (
//     <div>
//       <h1>🚀 Security Dashboard Working</h1>
//     </div>
//   );
// };

// export default Dashboard;



// import { useEffect, useState } from "react";
// import { scanUrl, getLogs, fetchUrl } from "../services/api";
// import ChartCard from "../components/ChartCard";
// import LogsTable from "../components/LogsTable";

// const Dashboard = () => {
//   const [url, setUrl] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [ssrf, setSsrf] = useState("");

//   const fetchData = async () => {
//     const res = await getLogs();
//     setLogs(res.data || []);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleScan = async () => {
//     await scanUrl(url);
//     fetchData();
//   };

//   const handleSSRF = async () => {
//     try {
//       await fetchUrl(url);
//       setSsrf("✅ Allowed");
//     } catch {
//       setSsrf("❌ Blocked");
//     }
//   };

//   const chartData = {
//     labels: ["Allowed", "Blocked"],
//     datasets: [
//       {
//         label: "Requests",
//         data: [
//           logs.filter((l) => l.status === "allowed").length,
//           logs.filter((l) => l.status === "blocked").length,
//         ],
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🚀 Security Dashboard</h1>

//       <input
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         placeholder="Enter payload"
//       />

//       <button onClick={handleScan}>Scan</button>
//       <button onClick={handleSSRF}>SSRF</button>

//       <p>{ssrf}</p>

//       <ChartCard data={chartData} />
//       <LogsTable logs={logs} />
//     </div>
//   );
// };

// export default Dashboard;





// import { useEffect, useState } from "react";
// import { scanUrl, getLogs, fetchUrl } from "../services/api";
// import ChartCard from "../components/ChartCard";
// import LogsTable from "../components/LogsTable";

// const Dashboard = () => {
//   const [url, setUrl] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [ssrfResult, setSsrfResult] = useState("");

//   const fetchData = async () => {
//     try {
//       const res = await getLogs();
//       setLogs(res.data || []);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleScan = async () => {
//     if (!url) return;
//     await scanUrl(url);
//     fetchData();
//   };

//   const handleSSRF = async () => {
//     try {
//       await fetchUrl(url);
//       setSsrfResult("✅ Safe Request");
//     } catch {
//       setSsrfResult("❌ SSRF Blocked");
//     }
//   };

//   const chartData = {
//     labels: ["Allowed", "Blocked"],
//     datasets: [
//       {
//         label: "Requests",
//         data: [
//           logs.filter((l) => l.status === "allowed").length,
//           logs.filter((l) => l.status === "blocked").length,
//         ],
//         backgroundColor: ["green", "red"],
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🚀 Cyber Security Dashboard</h1>

//       <input
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         placeholder="Enter payload..."
//         style={{ padding: 10, width: "60%" }}
//       />

//       <br /><br />

//       <button onClick={handleScan}>Scan</button>
//       <button onClick={handleSSRF} style={{ marginLeft: 10 }}>
//         Test SSRF
//       </button>

//       <p>{ssrfResult}</p>

//       <ChartCard data={chartData} />
//       <LogsTable logs={logs} />
//     </div>
//   );
// };

// export default Dashboard;





// import { useEffect, useState } from "react";
// import { scanUrl, getLogs, fetchUrl } from "../services/api";
// import LogsTable from "../components/LogsTable";

// const Dashboard = () => {
//   const [url, setUrl] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [ssrfResult, setSsrfResult] = useState("");

//   const fetchData = async () => {
//     const res = await getLogs();
//     setLogs(res.data || []);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleScan = async () => {
//     await scanUrl(url);
//     fetchData();
//   };

//   const handleSSRF = async () => {
//     try {
//       await fetchUrl(url);
//       setSsrfResult("✅ Safe");
//     } catch {
//       setSsrfResult("❌ Blocked");
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🔥 Dashboard</h1>

//       <input value={url} onChange={(e) => setUrl(e.target.value)} />

//       <button onClick={handleScan}>Scan</button>
//       <button onClick={handleSSRF}>SSRF</button>

//       <p>{ssrfResult}</p>

//       <LogsTable logs={logs} />
//     </div>
//   );
// };

// export default Dashboard;




// import { useEffect, useState } from "react";
// import { scanUrl, getLogs, fetchUrl } from "../services/api";
// import LogsTable from "../components/LogsTable";

// const Dashboard = () => {
//   const [url, setUrl] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [ssrfResult, setSsrfResult] = useState("");

//   // Fetch logs
//   const fetchData = async () => {
//     try {
//       const res = await getLogs();
//       setLogs(res.data || []);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Scan (XSS, SQL)
//   const handleScan = async () => {
//     if (!url.trim()) return;
//     await scanUrl(url);
//     fetchData();
//     setUrl("");
//   };

//   // SSRF Test
//   const handleSSRF = async () => {
//     if (!url.trim()) return;

//     try {
//       await fetchUrl(url);
//       setSsrfResult("✅ SAFE REQUEST");
//     } catch {
//       setSsrfResult("❌ SSRF BLOCKED");
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       {/* 🔥 HEADER */}
//       <h1>&gt; CYBER SECURITY TERMINAL</h1>

//       {/* 🔍 INPUT */}
//       <div style={{ marginTop: 20 }}>
//         <input
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="> Enter payload..."
//           style={{ width: "60%" }}
//         />

//         <button onClick={handleScan} style={{ marginLeft: 10 }}>
//           SCAN
//         </button>

//         <button onClick={handleSSRF} style={{ marginLeft: 10 }}>
//           SSRF
//         </button>
//       </div>

//       {/* 🚨 RESULT */}
//       <p style={{ marginTop: 20 }}>{ssrfResult}</p>

//       {/* 📋 LOGS */}
//       <LogsTable logs={logs} />
//     </div>
//   );
// };

// export default Dashboard;








// import { useEffect, useState } from "react";
// import { scanUrl, getLogs, fetchUrl } from "../services/api";
// import ChartCard from "../components/ChartCard";
// import LogsTable from "../components/LogsTable";
// import MapView from "../components/MapView";

// const Dashboard = () => {
//   const [url, setUrl] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [alert, setAlert] = useState("");
//   const [ssrfResult, setSsrfResult] = useState("");
//   const [tick, setTick] = useState(0);
//   const [loading, setLoading] = useState(false);

//   // 🔄 Fetch logs
//   const fetchLogs = async () => {
//     try {
//       setLoading(true);
//       const res = await getLogs();
//       setLogs(res.data || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLogs();
//   }, []);

//   // 🔍 Scan attack (XSS etc.)
//   const handleScan = async () => {
//     try {
//       if (!url.trim()) return;

//       const res = await scanUrl(url);

//       if (res?.data?.status === "blocked") {
//         setAlert(`⚠️ ${res.data.type} ATTACK DETECTED`);
//         setTimeout(() => setAlert(""), 3000);
//       }

//       setUrl("");
//       fetchLogs();
//       setTick((prev) => prev + 1);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // 💀 SSRF TEST (ONE BUTTON LOGIC)
//   const handleSSRF = async () => {
//     try {
//       if (!url.trim()) return;

//       setSsrfResult("⏳ Running SSRF test...");

//       const res = await fetchUrl(url);

//       setSsrfResult(
//         JSON.stringify(res.data, null, 2) +
//           "\n\n✅ Allowed at: " +
//           new Date().toLocaleTimeString()
//       );
//     } catch (err) {
//       setSsrfResult(
//         JSON.stringify(err.response?.data, null, 2) +
//           "\n\n❌ Blocked at: " +
//           new Date().toLocaleTimeString()
//       );
//     }
//   };

//   // 📊 Chart data
//   const chartData = {
//     labels: ["Allowed", "Blocked"],
//     datasets: [
//       {
//         label: "Requests",
//         data: [
//           logs.filter((l) => l.status === "allowed").length,
//           logs.filter((l) => l.status === "blocked").length,
//         ],
//         backgroundColor: ["#22c55e", "#ef4444"],
//       },
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-black text-green-400 p-6 font-mono">

//       {/* 🚨 ALERT */}
//       {alert && (
//         <div className="bg-red-600 text-white p-3 mb-4 animate-pulse">
//           {alert}
//         </div>
//       )}

//       {/* 🔥 HEADER */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl tracking-widest animate-pulse">
//           &gt; CYBER SECURITY TERMINAL
//         </h1>

//         <button
//           onClick={() => {
//             fetchLogs();
//             setTick((prev) => prev + 1);
//           }}
//           className="border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black"
//         >
//           {loading ? "Refreshing..." : "🔄 Refresh"}
//         </button>
//       </div>

//       {/* 🔍 INPUT */}
//       <div className="flex gap-4 mb-6">
//         <input
//           className="p-3 bg-black border border-green-500 rounded w-full outline-none"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="> Enter URL or payload..."
//         />

//         <button
//           onClick={handleScan}
//           className="border border-red-500 px-6 py-3 hover:bg-red-500 hover:text-black"
//         >
//           EXECUTE
//         </button>
//       </div>

//       {/* 💀 SSRF BUTTON */}
//       <div className="mb-6">
//         <button
//           onClick={handleSSRF}
//           className="border border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-black"
//         >
//           ⚠️ Test SSRF Attack
//         </button>

//         {/* OUTPUT */}
//         {ssrfResult && (
//           <pre className="bg-black border border-yellow-500 mt-3 p-3 text-sm overflow-auto animate-pulse">
//             {ssrfResult}
//           </pre>
//         )}
//       </div>

//       {/* 📊 GRAPH */}
//       <ChartCard key={tick} data={chartData} />

//       {/* 📋 LOGS */}
//       <LogsTable logs={logs} />

//       {/* 🌍 MAP */}
//       <MapView logs={logs} />
//     </div>
//   );
// };

// export default Dashboard;








//final
// import { useEffect, useState } from "react";
// import { scanUrl, getLogs, fetchUrl } from "../services/api";
// import ChartCard from "../components/ChartCard";
// import LogsTable from "../components/LogsTable";

// const Dashboard = () => {
//   const [url, setUrl] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [alert, setAlert] = useState("");
//   const [ssrfResult, setSsrfResult] = useState("");
//   const [tick, setTick] = useState(0);
//   const [loading, setLoading] = useState(false);

//   // 🔄 Fetch logs
//   const fetchLogs = async () => {
//     try {
//       setLoading(true);
//       const res = await getLogs();
//       setLogs(res.data || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLogs();
//   }, []);

//   // 🔍 Scan attack
//   const handleScan = async () => {
//     try {
//       if (!url.trim()) return;

//       const res = await scanUrl(url);

//       if (res?.data?.status === "blocked") {
//         setAlert(`⚠️ ${res.data.type} ATTACK DETECTED`);
//         setTimeout(() => setAlert(""), 3000);
//       }

//       setUrl("");
//       fetchLogs();
//       setTick((prev) => prev + 1);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // 💀 SSRF TEST
//   const handleSSRF = async () => {
//     try {
//       if (!url.trim()) return;

//       setSsrfResult("⏳ Running SSRF test...");

//       const res = await fetchUrl(url);

//       setSsrfResult(
//         JSON.stringify(res.data, null, 2) +
//           "\n\n✅ Allowed at: " +
//           new Date().toLocaleTimeString()
//       );
//     } catch (err) {
//       setSsrfResult(
//         JSON.stringify(err.response?.data || {}, null, 2) +
//           "\n\n❌ Blocked at: " +
//           new Date().toLocaleTimeString()
//       );
//     }
//   };

//   // 📊 Chart data
//   const chartData = {
//     labels: ["Allowed", "Blocked"],
//     datasets: [
//       {
//         label: "Requests",
//         data: [
//           logs.filter((l) => l.status === "allowed").length,
//           logs.filter((l) => l.status === "blocked").length,
//         ],
//         backgroundColor: ["#22c55e", "#ef4444"],
//       },
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-black text-green-400 p-6 font-mono">

//       {/* 🚨 ALERT */}
//       {alert && (
//         <div className="bg-red-600 text-white p-3 mb-4 animate-pulse">
//           {alert}
//         </div>
//       )}

//       {/* 🔥 HEADER */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl tracking-widest animate-pulse">
//           &gt; CYBER SECURITY TERMINAL
//         </h1>

//         <button
//           onClick={() => {
//             fetchLogs();
//             setTick((prev) => prev + 1);
//           }}
//           className="border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black"
//         >
//           {loading ? "Refreshing..." : "🔄 Refresh"}
//         </button>
//       </div>

//       {/* 🔍 INPUT */}
//       <div className="flex gap-4 mb-6">
//         <input
//           className="p-3 bg-black border border-green-500 rounded w-full outline-none"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="> Enter URL or payload..."
//         />

//         <button
//           onClick={handleScan}
//           className="border border-red-500 px-6 py-3 hover:bg-red-500 hover:text-black"
//         >
//           EXECUTE
//         </button>
//       </div>

//       {/* 💀 SSRF */}
//       <div className="mb-6">
//         <button
//           onClick={handleSSRF}
//           className="border border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-black"
//         >
//           ⚠️ Test SSRF Attack
//         </button>

//         {ssrfResult && (
//           <pre className="bg-black border border-yellow-500 mt-3 p-3 text-sm overflow-auto">
//             {ssrfResult}
//           </pre>
//         )}
//       </div>

//       {/* 📊 GRAPH */}
//       <ChartCard key={tick} data={chartData} />

//       {/* 📋 LOGS */}
//       <LogsTable logs={logs} />
//     </div>
//   );
// };

// export default Dashboard;




// import { useEffect, useState } from "react";
// import { scanUrl, getLogs, fetchUrl } from "../services/api";
// import LogsTable from "../components/LogsTable";

// const Dashboard = () => {
//   const [url, setUrl] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [ssrfResult, setSsrfResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch logs
//   const fetchLogs = async () => {
//     try {
//       setLoading(true);
//       const res = await getLogs();
//       setLogs(res.data || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLogs();
//   }, []);

//   // Scan
//   const handleScan = async () => {
//     if (!url.trim()) return;
//     await scanUrl(url);
//     fetchLogs();
//     setUrl("");
//   };

//   // SSRF
//   const handleSSRF = async () => {
//     if (!url.trim()) return;

//     try {
//       const res = await fetchUrl(url);
//       setSsrfResult(
//         "✅ SAFE\n\n" +
//           JSON.stringify(res.data, null, 2)
//       );
//     } catch (err) {
//       setSsrfResult(
//         "❌ BLOCKED\n\n" +
//           JSON.stringify(err.response?.data || {}, null, 2)
//       );
//     }
//   };

//   return (
//     <div style={{
//       background: "black",
//       color: "#00ff88",
//       minHeight: "100vh",
//       padding: "20px",
//       fontFamily: "monospace"
//     }}>

//       <h1>&gt; CYBER SECURITY TERMINAL</h1>

//       {/* INPUT */}
//       <div style={{ marginTop: 20 }}>
//         <input
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Enter URL..."
//           style={{
//             width: "60%",
//             padding: "10px",
//             background: "black",
//             color: "#00ff88",
//             border: "1px solid #00ff88"
//           }}
//         />

//         <button onClick={handleScan} style={btn}>
//           SCAN
//         </button>

//         <button onClick={handleSSRF} style={btn}>
//           SSRF
//         </button>
//       </div>

//       {/* RESULT */}
//       {ssrfResult && (
//         <pre style={{
//           marginTop: 20,
//           border: "1px solid yellow",
//           padding: 10,
//           whiteSpace: "pre-wrap"
//         }}>
//           {ssrfResult}
//         </pre>
//       )}

//       {/* LOGS */}
//       <LogsTable logs={logs} loading={loading} />
//     </div>
//   );
// };

// const btn = {
//   marginLeft: 10,
//   padding: "10px",
//   background: "black",
//   color: "#00ff88",
//   border: "1px solid #00ff88",
//   cursor: "pointer"
// };

// export default Dashboard;




// import { useEffect, useState } from "react";
// import { scanUrl, getLogs, fetchUrl } from "../services/api";
// import LogsTable from "../components/LogsTable";
// import MapView from "../components/MapView";

// const Dashboard = () => {
//   const [url, setUrl] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [ssrfResult, setSsrfResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const fetchLogs = async () => {
//     try {
//       setLoading(true);
//       const res = await getLogs();
//       setLogs(res.data || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLogs();
//   }, []);

//   const handleScan = async () => {
//     if (!url.trim()) return;
//     await scanUrl(url);
//     fetchLogs();
//     setUrl("");
//   };

//   const handleSSRF = async () => {
//     if (!url.trim()) return;

//     setSsrfResult("⏳ Testing SSRF...");

//     try {
//       const res = await fetchUrl(url);

//       setSsrfResult(
//         "✅ SAFE REQUEST\n\n" +
//         JSON.stringify(res.data, null, 2) +
//         "\n\n🟢 Time: " +
//         new Date().toLocaleTimeString()
//       );

//     } catch (err) {
//       setSsrfResult(
//         "❌ BLOCKED\n\n" +
//         JSON.stringify(err.response?.data || {}, null, 2) +
//         "\n\n🔴 Time: " +
//         new Date().toLocaleTimeString()
//       );
//     }
//   };

//   return (
//     <div style={container}>

//       <h1 style={title}>&gt; CYBER SECURITY TERMINAL</h1>

//       {/* INPUT */}
//       <div style={{ marginTop: 20 }}>
//         <input
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="> Enter URL..."
//           style={input}
//         />

//         <button onClick={handleScan} style={btnGreen}>SCAN</button>
//         <button onClick={handleSSRF} style={btnYellow}>SSRF</button>
//       </div>

//       {/* SSRF RESULT */}
//       {ssrfResult && (
//         <div style={resultBox}>
//           <pre style={{ whiteSpace: "pre-wrap" }}>{ssrfResult}</pre>
//         </div>
//       )}

//       {/* LOGS */}
//       <LogsTable logs={logs} loading={loading} />

//       {/* MAP */}
//       <MapView logs={logs} />
//     </div>
//   );
// };

// // 🎨 STYLES
// const container = {
//   background: "black",
//   color: "#00ff88",
//   minHeight: "100vh",
//   padding: "20px",
//   fontFamily: "monospace"
// };

// const title = {
//   textShadow: "0 0 10px #00ff88"
// };

// const input = {
//   width: "60%",
//   padding: "12px",
//   background: "black",
//   color: "#00ff88",
//   border: "1px solid #00ff88"
// };

// const btnGreen = {
//   marginLeft: 10,
//   padding: "12px",
//   background: "black",
//   color: "#00ff88",
//   border: "1px solid #00ff88",
//   cursor: "pointer"
// };

// const btnYellow = {
//   marginLeft: 10,
//   padding: "12px",
//   background: "black",
//   color: "yellow",
//   border: "1px solid yellow",
//   cursor: "pointer"
// };

// const resultBox = {
//   marginTop: 20,
//   border: "1px solid yellow",
//   padding: 15,
//   background: "rgba(255,255,0,0.05)"
// };

// export default Dashboard;







// import { useEffect, useState } from "react";
// import { scanUrl, getLogs, fetchUrl } from "../services/api";
// import LogsTable from "../components/LogsTable";
// import ChartCard from "../components/ChartCard";
// import MapView from "../components/MapView";

// const Dashboard = () => {
//   const [url, setUrl] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [ssrfResult, setSsrfResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🔄 Fetch logs
//   const fetchLogs = async () => {
//     try {
//       setLoading(true);
//       const res = await getLogs();
//       setLogs(res.data || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLogs();
//   }, []);

//   // 🔍 Scan
//   const handleScan = async () => {
//     if (!url.trim()) return;

//     await scanUrl(url);
//     fetchLogs();
//     setUrl("");
//   };

//   // 💀 SSRF
//   const handleSSRF = async () => {
//     if (!url.trim()) return;

//     setSsrfResult("⏳ Testing SSRF...");

//     try {
//       const res = await fetchUrl(url);

//       setSsrfResult(
//         "✅ SAFE REQUEST\n\n" +
//         JSON.stringify(res.data, null, 2) +
//         "\n\n🟢 Time: " +
//         new Date().toLocaleTimeString()
//       );

//     } catch (err) {
//       setSsrfResult(
//         "❌ BLOCKED\n\n" +
//         JSON.stringify(err.response?.data || {}, null, 2) +
//         "\n\n🔴 Time: " +
//         new Date().toLocaleTimeString()
//       );
//     }
//   };

//   return (
//     <div style={container}>

//       {/* HEADER */}
//       <h1 style={title}>&gt; CYBER SECURITY TERMINAL</h1>

//       {/* INPUT */}
//       <div style={{ marginTop: 20 }}>
//         <input
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="> Enter URL..."
//           style={input}
//         />

//         <button onClick={handleScan} style={btnGreen}>SCAN</button>
//         <button onClick={handleSSRF} style={btnYellow}>SSRF</button>
//       </div>

//       {/* SSRF RESULT */}
//       {ssrfResult && (
//         <div style={resultBox}>
//           <pre style={{ whiteSpace: "pre-wrap" }}>{ssrfResult}</pre>
//         </div>
//       )}

//       {/* 📊 CHART */}
//       <ChartCard logs={logs} />

//       {/* 📋 LOGS */}
//       <LogsTable logs={logs} loading={loading} />

//       {/* 🌍 MAP */}
//       <MapView logs={logs} />

//     </div>
//   );
// };

// // 🎨 STYLES
// const container = {
//   background: "black",
//   color: "#00ff88",
//   minHeight: "100vh",
//   padding: "20px",
//   fontFamily: "monospace"
// };

// const title = {
//   textShadow: "0 0 10px #00ff88"
// };

// const input = {
//   width: "60%",
//   padding: "12px",
//   background: "black",
//   color: "#00ff88",
//   border: "1px solid #00ff88"
// };

// const btnGreen = {
//   marginLeft: 10,
//   padding: "12px",
//   background: "black",
//   color: "#00ff88",
//   border: "1px solid #00ff88",
//   cursor: "pointer"
// };

// const btnYellow = {
//   marginLeft: 10,
//   padding: "12px",
//   background: "black",
//   color: "yellow",
//   border: "1px solid yellow",
//   cursor: "pointer"
// };

// const resultBox = {
//   marginTop: 20,
//   border: "1px solid yellow",
//   padding: 15,
//   background: "rgba(255,255,0,0.05)"
// };

// export default Dashboard;






//check
// import { useEffect, useState } from "react";
// import { scanUrl, getLogs, fetchUrl } from "../services/api";
// import LogsTable from "../components/LogsTable";
// import ChartCard from "../components/ChartCard";
// import MapView from "../components/MapView";

// const Dashboard = () => {
//   const [url, setUrl] = useState("");
//   const [logs, setLogs] = useState([]);
//   const [ssrfResult, setSsrfResult] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [terminalText, setTerminalText] = useState("");

//   // 🔥 Typing animation
//   useEffect(() => {
//     const text = "> Initializing Cyber Defense System...";
//     let i = 0;

//     const interval = setInterval(() => {
//       setTerminalText(text.slice(0, i));
//       i++;
//       if (i > text.length) clearInterval(interval);
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   // 🔄 Fetch logs
//   const fetchLogs = async () => {
//     try {
//       setLoading(true);
//       const res = await getLogs();
//       setLogs(res.data || []);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLogs();
//   }, []);

//   // 🔍 Scan
//   const handleScan = async () => {
//     if (!url.trim()) return;
//     await scanUrl(url);
//     fetchLogs();
//     setUrl("");
//   };

//   // 💀 SSRF
//   const handleSSRF = async () => {
//     if (!url.trim()) return;

//     setSsrfResult("⏳ Executing SSRF...");

//     try {
//       const res = await fetchUrl(url);

//       setSsrfResult(
//         "✅ ACCESS GRANTED\n\n" +
//         JSON.stringify(res.data, null, 2) +
//         "\n\n🟢 Time: " +
//         new Date().toLocaleTimeString()
//       );
//     } catch (err) {
//       setSsrfResult(
//         "🚫 ACCESS DENIED\n\n" +
//         JSON.stringify(err.response?.data || {}, null, 2) +
//         "\n\n🔴 Time: " +
//         new Date().toLocaleTimeString()
//       );
//     }
//   };

//   // 🎯 Danger %
//   const danger =
//     logs.length > 0
//       ? Math.round(
//           (logs.filter((l) => l.status === "blocked").length / logs.length) *
//             100
//         )
//       : 0;

//   return (
//     <div style={container}>

//       {/* 🔥 TERMINAL HEADER */}
//       <h1 style={title}>{terminalText}</h1>

//       {/* INPUT */}
//       <div style={{ marginTop: 20 }}>
//         <input
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="> Enter target URL..."
//           style={input}
//         />

//         <button onClick={handleScan} style={btnGreen}>
//           SCAN
//         </button>

//         <button onClick={handleSSRF} style={btnRed}>
//           SSRF
//         </button>
//       </div>

//       {/* ⚠️ SSRF OUTPUT */}
//       {ssrfResult && (
//         <div style={resultBox}>
//           <pre style={{ whiteSpace: "pre-wrap" }}>
//             {ssrfResult}
//           </pre>
//         </div>
//       )}

//       {/* 🎯 DANGER BAR */}
//       <div style={dangerBox}>
//         <div
//           style={{
//             width: `${danger}%`,
//             height: "10px",
//             background: danger > 60 ? "red" : "lime"
//           }}
//         />
//         <p>Threat Level: {danger}%</p>
//       </div>

//       {/* 📊 CHART */}
//       <ChartCard logs={logs} />

//       {/* 📋 LOGS */}
//       <LogsTable logs={logs} loading={loading} />

//       {/* 🌍 MAP */}
//       <MapView logs={logs} />
//     </div>
//   );
// };

// // 🎨 STYLES
// const container = {
//   background: "black",
//   color: "#00ff88",
//   minHeight: "100vh",
//   padding: "20px",
//   fontFamily: "monospace"
// };

// // const title = {
// //   textShadow: "0 0 15px #00ff88",
// //   animation: "blink 1s infinite alternate"
// // };

// const title = {
//   textShadow: "0 0 15px #00ff88"
// };



// const input = {
//   width: "60%",
//   padding: "12px",
//   background: "black",
//   color: "#00ff88",
//   border: "1px solid #00ff88"
// };

// const btnGreen = {
//   marginLeft: 10,
//   padding: "12px",
//   border: "1px solid #00ff88",
//   color: "#00ff88",
//   background: "black",
//   cursor: "pointer"
// };

// const btnRed = {
//   marginLeft: 10,
//   padding: "12px",
//   border: "1px solid red",
//   color: "red",
//   background: "black",
//   cursor: "pointer"
// };

// const resultBox = {
//   marginTop: 20,
//   border: "1px solid red",
//   padding: 15,
//   animation: "pulse 1s infinite"
// };

// const dangerBox = {
//   marginTop: 20,
//   border: "1px solid #00ff88",
//   padding: 10
// };

// export default Dashboard;







//last
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