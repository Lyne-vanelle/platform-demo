const http = require("node:http");
const PORT = Number(process.env.PORT || 8080);
const APP_NAME = "platform-demo";
const APP_VERSION = "1.0.0";
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.url === "/") {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        service: APP_NAME,
        message: "Hello from the platform demo!",
      }),
    );
    return;
  }
  if (req.url === "/health") {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }
    if (req.url === "/version") {
    res.writeHead(200);
    res.end(JSON.stringify({ service: APP_NAME, version: APP_VERSION }));
    return;
  }
  res.writeHead(404);
  res.end(JSON.stringify({ error: "not found" }));
});
if (require.main === module) {
  server.listen(PORT, () => console.log(`${APP_NAME} listening on ${PORT}.`));
}

module.exports = server;
