const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config({
  path: "./data/.env",
});

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<h1>About Page!</h1>");
  }
  if (req.url === "/contact") {
    return res.end("<h1>contact Page!</h1>");
  }
  if (req.url === "/service") {
    return res.end("<h1>service Page!</h1>");
  } else {
    return res.end("<h1>404 page not found !</h1>");
  }
});

server.listen(process.env.PORT, () => {
  console.log(`(server is working on Port ${process.env.PORT})`);
});
