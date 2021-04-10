// jshint esversion:6


const express = require('express');

const app = express();

app.get("/",function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req,res) {
  res.send("");
});


app.listen(2000, function() {
  console.log("server started succesfully");
});
