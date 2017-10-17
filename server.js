var mongoose = require("mongoose");
var express = require("express");
var MsaTeam = require("./models/msaTeam");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// mongoose.connect(config.database, {
//   useMongoClient: true
// });
var msaMongoDb = "mongodb://localhost:27017/msa";
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
var db = mongoose.connection;
mongoose.connect(msaMongoDb, {
  useMongoClient: true
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.post("/msa", function(req, res) {
  // create a sample user
  var nick = new MsaTeam({
    team_name: "gabe",
    team_league_OID: "Womens"
  });
  nick.save(function(err) {
    if (err) throw err;

    console.log("User saved successfully");
    res.json({ success: true });
  });
});

app.get("/", function(req, res) {
  console.log("A dark horse appears and then he eats you", __dirname);
  res.send(
    "Hello! The anrgy cats are goming to eat us is at http://localhost:" +
      port +
      "/api"
  );
});

app.get("/team", function(req, res) {
  MsaTeam.find({ _id: "59e6413a5fa3a6182c1bffc5" }, function(err, msaTeam) {
    res.json(msaTeam);
  });
});

app.listen(port);
