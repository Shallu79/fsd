import { createServer } from "http";

const server = createServer((req, res) => {
  res.statusCode=200;
  res.setHeader("Content Type","text/pair");
  res.end("welcome to the nodejs tutorial");
});

server.listen(3000, () => {
  console.log("Server running on http");
});
