//jshint esversion: 6

const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/html/blog-website-home.html");
});

app.get("/about-us", function(req, res){
  res.sendFile(__dirname + "/html/about-us.html");
});

app.get("/subscribe", function(req, res){
  res.sendFile(__dirname + "/html/subscribe.html");
});

app.get("/contact-us", function(req, res){
  res.sendFile(__dirname + "/html/contact-us.html");
});

app.get("/blog-post-day-1", function(req, res){
  res.sendFile(__dirname + "/html/blog-post-day-1.html");
});

app.get("/blog-post-day-2", function(req, res){
  res.sendFile(__dirname + "/html/blog-post-day-2.html");
});

app.get("/blog-post-day-3", function(req, res){
  res.sendFile(__dirname + "/html/blog-post-day-3.html");
});

app.post("/subscribed-successfully", function(req, res){
  res.sendFile(__dirname + "/html/subscribed-successfully.html");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully");
});
