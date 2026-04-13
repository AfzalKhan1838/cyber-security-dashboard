// const LogsTable = ({ logs }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>URL</th>
//           <th>Type</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {logs.map((log, i) => (
//           <tr key={i}>
//             <td>{log.url}</td>
//             <td>{log.type}</td>
//             <td>{log.status}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default LogsTable;


// const LogsTable = ({ logs }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>URL</th>
//           <th>Type</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {logs.map((log, i) => (
//           <tr key={i}>
//             <td>{log.url}</td>
//             <td>{log.type}</td>
//             <td>{log.status}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default LogsTable;




// const LogsTable = ({ logs }) => {
//   return (
//     <table border="1" style={{ marginTop: 20 }}>
//       <thead>
//         <tr>
//           <th>URL</th>
//           <th>Type</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {logs.map((log, i) => (
//           <tr key={i}>
//             <td>{log.url}</td>
//             <td>{log.type}</td>
//             <td>{log.status}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default LogsTable;







// const LogsTable = ({ logs, loading }) => {
//   return (
//     <div style={{ marginTop: 20 }}>
//       <h3>&gt; Logs</h3>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table style={{ borderCollapse: "collapse", width: "100%" }}>
//           <thead>
//             <tr>
//               <th style={th}>URL</th>
//               <th style={th}>Type</th>
//               <th style={th}>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {logs.map((log, i) => (
//               <tr key={i}>
//                 <td style={td}>{log.url}</td>
//                 <td style={td}>{log.type}</td>
//                 <td style={td}>{log.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// const th = {
//   border: "1px solid #00ff88",
//   padding: "8px"
// };

// const td = {
//   border: "1px solid #00ff88",
//   padding: "8px"
// };

// export default LogsTable;




// const LogsTable = ({ logs, loading }) => {

//   const getRisk = (type) => {
//     if (type === "XSS") return 90;
//     if (type === "SQL") return 95;
//     if (type === "SSRF") return 85;
//     return 10;
//   };

//   const total = logs.length;
//   const danger =
//     total > 0
//       ? Math.round(
//           (logs.filter((l) => l.status === "blocked").length / total) * 100
//         )
//       : 0;

//   return (
//     <div style={{ marginTop: 20 }}>
//       <h3>&gt; Logs</h3>

//       {loading ? <p>Loading...</p> : (
//         <table style={table}>
//           <thead>
//             <tr>
//               <th style={th}>URL</th>
//               <th style={th}>Type</th>
//               <th style={th}>Status</th>
//               <th style={th}>Risk %</th>
//             </tr>
//           </thead>
//           <tbody>
//             {logs.map((log, i) => (
//               <tr key={i}>
//                 <td style={td}>{log.url}</td>
//                 <td style={td}>{log.type}</td>
//                 <td style={td}>
//                   {log.status === "blocked" ? "❌ BLOCKED" : "✅ SAFE"}
//                 </td>
//                 <td style={td}>{getRisk(log.type)}%</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <h4 style={{ marginTop: 15 }}>
//         🔥 Overall Danger: {danger}%
//       </h4>
//     </div>
//   );
// };

// const table = { width: "100%", borderCollapse: "collapse" };
// const th = { border: "1px solid #00ff88", padding: "8px" };
// const td = { border: "1px solid #00ff88", padding: "8px" };

// export default LogsTable;






const LogsTable = ({ logs }) => {

  const detectRisk = (url) => {
    if (url.includes("<script>")) return "XSS";
    if (url.includes("SELECT")) return "SQL";
    if (url.includes("http://localhost")) return "SSRF";
    return "SAFE";
  };

  const getRiskScore = (type) => {
    if (type === "XSS") return 90;
    if (type === "SQL") return 95;
    if (type === "SSRF") return 85;
    return 10;
  };

  const total = logs.length;
  const danger =
    total > 0
      ? Math.round(
          (logs.filter((l) => l.status === "blocked").length / total) * 100
        )
      : 0;

  return (
    <div style={{ marginTop: 20 }}>
      <h3>&gt; Logs</h3>

      <table style={table}>
        <thead>
          <tr>
            <th style={th}>URL</th>
            <th style={th}>AI Type</th>
            <th style={th}>Status</th>
            <th style={th}>Risk %</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log, i) => {
            const type = detectRisk(log.url);

            return (
              <tr key={i}>
                <td style={td}>{log.url}</td>
                <td style={td}>{type}</td>
                <td style={td}>
                  {log.status === "blocked" ? "❌ BLOCKED" : "✅ SAFE"}
                </td>
                <td style={td}>{getRiskScore(type)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h4 style={{ marginTop: 15 }}>
        🔥 Overall Danger: {danger}%
      </h4>
    </div>
  );
};

const table = { width: "100%", borderCollapse: "collapse" };
const th = { border: "1px solid #00ff88", padding: "8px" };
const td = { border: "1px solid #00ff88", padding: "8px" };

export default LogsTable;