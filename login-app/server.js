const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/login") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { email, password } = JSON.parse(body);

      if (email === "test@gmail.com" && password === "123456") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Login Successful ✅" }));
      } else {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid Credentials ❌" }));
      }
    });
  }
});

server.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});