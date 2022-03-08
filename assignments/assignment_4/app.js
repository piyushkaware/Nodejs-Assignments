const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Users = require("./model/assignment_4");
var methodOverride = require("method-override");
const app = express();

app.set("views", "./views");
app.set("views engine", "ejs");

mongoose.connect("mongodb://localhost/assignment_4");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const users = await Users.find();
  //   console.log(users);
  res.render("Home.ejs", { users });
});

app.get("/form", (req, res) => {
  res.render("form.ejs");
});
app.post("/users/add", async (req, res) => {
  //   console.log(req.body);
  const users = await Users.create({
    name: req.body.name,
    email: req.body.email,
  });
  res.redirect("/");
});

app.put("/users/:id", async (req, res) => {
  await Users.updateOne({ _id: req.params.id }, [
    { $set: { isPromoted: { $not: "$isPromoted" } } },
  ]);
  res.redirect("/");
});

app.delete("/users/:id", async (req, res) => {
  await Users.deleteOne({ _id: req.params.id });
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is listing for assignment 4");
});
