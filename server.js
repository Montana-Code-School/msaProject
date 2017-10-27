var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
var msa_team_controller = require("./controllers/msaTeamController");
var msa_user_controller = require("./controllers/msaUserController");
var MsaTeam = require("./models/msaTeam"); // do we use this???????????????????????
var msa_game_controller = require("./controllers/msaGameController");
var bodyParser = require("body-parser");
//var routes = require("./routes");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use("/msa")
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
//msa user
app.post("/post/createUser", msa_user_controller.createUser);
app.delete("/delete/deleteUser", msa_user_controller.deleteUser);
app.put("/put/editUser", msa_user_controller.editUser);
app.get("/get/viewUsers", msa_user_controller.viewUsers);

app.get("/get/viewUser/:_id", msa_user_controller.viewUser);

// msa team
app.post("/post/createTeam", msa_team_controller.createTeam);
app.delete("/delete/deleteTeam", msa_team_controller.deleteTeam);
app.put("/put/editTeam", msa_team_controller.editTeam);
app.get("/get/viewTeams", msa_team_controller.viewTeams);

//put variable routes last
app.get("/get/viewTeam/:_id", msa_team_controller.viewTeam); //sending info via header

// msa game
app.post("/post/createGame", msa_game_controller.createGame);

app.delete("/delete/deleteGame", msa_game_controller.deleteGame);
app.put("/put/editGame", msa_game_controller.editGame);
app.get("/get/viewGames/", msa_game_controller.viewGames);
app.get("/get/viewGamesByDate", msa_game_controller.viewGamesByDate); //Still need to set this up.

app.get("/get/viewGame/:_id", msa_game_controller.viewGameByOID);
app.get("/get/viewGamesByTeam/:teamOID", msa_game_controller.viewGamesByTeam);

//msa field
app.post("/post/createField", msa_field_controller.createField);
app.delete("/delete/deleteField", msa_field_controller.deleteField);
//app.put("/put/editField", msa_field_controller.editField);
app.get("/get/viewFields", msa_field_controller.viewFields);
app.get("/get/viewField/:_id", msa_field_controller.viewField);

app.listen(port);
