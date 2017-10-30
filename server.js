//import mods

var mongoose = require("mongoose");
var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");

//import controllers
var msa_team_controller = require("./controllers/msaTeamController");
var msa_user_controller = require("./controllers/msaUserController");
var msa_game_controller = require("./controllers/msaGameController");
var msa_league_controller = require("./controllers/msaLeagueController");
var msa_division_controller = require("./controllers/msaDivisionController");
var msa_field_controller = require("./controllers/msaFieldController");
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

// msa leagues
app.get("/get/viewLeagues", msa_league_controller.viewLeagues);
app.get("/get/viewLeague/:_id", msa_league_controller.viewLeague);
app.post("/post/createLeague", msa_league_controller.createLeague);
app.delete("/delete/deleteLeague", msa_league_controller.deleteLeague);
app.put("/put/editLeague", msa_league_controller.editLeague);

// msa division

app.get("/get/viewDivisions", msa_division_controller.viewDivisions);
app.get("/get/viewDivision/:_id", msa_division_controller.viewDivisionByOID);
//app.post("/post/createDivision", msa_division_controller.createDivision);
//app.delete("/delete/deleteDivision", msa_division_controller.deleteDivision);
//app.put("/put/editDivision", msa_division_controller.editDivision);
//app.get(
//"/get/viewDivisionsByLeague/:leagueOID",
//msa_division_controller.viewDivisionsByLeague
//);

//msa field
app.post("/post/createField", msa_field_controller.createField);
app.delete("/delete/deleteField", msa_field_controller.deleteField);
//app.put("/put/editField", msa_field_controller.editField);
app.get("/get/viewFields", msa_field_controller.viewFields);
app.get("/get/fieldProfile/:_id", msa_field_controller.fieldProfile);

app.listen(port);
