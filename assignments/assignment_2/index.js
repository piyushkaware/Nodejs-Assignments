const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
  fs.writeFile("index.html", "<h1>Hello World</h1>", (error) => {
    console.log(error);
  });

  fs.readFile(
    path.join(__dirname, "index.html"),
    { encoding: "utf-8" },
    (error, pageresponse) => {
      if (error) {
        response.writeHead(404);
        response.write("page not found");
      } else {
        response.writeHead(200, { "Content-Type": "text/Html" });
        response.write(pageresponse);
      }
      response.end();
    }
  );
});
server.listen(3000, () => console.log("server is listining"));
