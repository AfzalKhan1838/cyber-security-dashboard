module.exports = (url) => {
  if (url.includes("<script>")) return "XSS";
  if (url.toLowerCase().includes("select") || url.includes("'")) return "SQL Injection";
  if (url.includes("http://localhost")) return "SSRF";
  return "SAFE";
};
