var mongoose = require("mongoose");
var express = require("express");
var msaTeam = require("./models/msaTeam");
// mongoose.connect(config.database, {
//   useMongoClient: true
// });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
var msaMongoDb = "mongod://localhost:27017/msa";
var app = express();
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
app.post("/setup", function(req, res) {
  // create a sample user
  var nick = new msaTeam({
    team_name: "matt",
    team_league_OID: "Mens"
  });
  res.json({ success: true });
});
app.listen(port);
