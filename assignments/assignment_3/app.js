const express = require("express");
const app = express();
const faker = require("faker");

var users = [];
for (let i = 0; i < 5; i++) {
  users.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
  });
}
// console.log(users)

app.get("/", (request, response) => {
  response.render("main.ejs", { users });
});

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/form", (request, response) => {
  response.render("form.ejs");
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/user/add", (request, response) => {
  // console.log(request.body)
  // response.send('hello from add user')
  if (request.body.name !== "" && request.body.email !== "") {
    users.push({
      name: request.body.name,
      email: request.body.email,
    });
  }

  response.redirect("/");
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server 3000 is running");
});
