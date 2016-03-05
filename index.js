var express = require("express");
var app = express();

var STATIC_PATH = __dirname + "/dist";
var SERVER_PORT = process.env.PORT || 8090;

app.use(express.static(STATIC_PATH));

app.get("*", function(req, res){
  res.status(404).send("<h1>404 not found</h1>");
});

app.listen(SERVER_PORT, function () {
  console.log("HEIL mein LORD");
  console.log("Server listening on port " + SERVER_PORT);
})
