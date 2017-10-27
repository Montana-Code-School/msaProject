//Run this 4
//THE OBJECT IDS ARE UNIQUE TO THE DB ON EACH COMPUTER
//IF running this script on a new computer or populating into
// a new db you must update all the OID variables

//var for the fields

var mc1 = "59f360a2db245d3d82dee188",
  mc2 = "59f360a2db245d3d82dee189",
  ns = "59f360a2db245d3d82dee18a",
  ftmso1 = "59f360a2db245d3d82dee18b",
  ftmso2 = "59f360a2db245d3d82dee18c",
  ftmso3 = "59f360a2db245d3d82dee18d",
  ftmso4 = "59f360a2db245d3d82dee18e",
  ftmso5 = "59f360a2db245d3d82dee18f",
  ftmso6 = "59f360a2db245d3d82dee190";
defaultfield = "59f360a2db245d3d82dee191";

//// Team Variables

var gotHeem = "59f36bce7ae0823ea4e9f882",
  theLigningRatsThatEatRubberBollons = "59f36bce7ae0823ea4e9f883",
  assHats = "59f36bce7ae0823ea4e9f884";

// Game Variables

//

//Game 1
var homeTeam1 = gotHeem,
  visTeam1 = theLigningRatsThatEatRubberBollons,
  gameDate1 = "04-23-2017 11:15",
  fieldLoc1 = mc1,
  homeScore1 = 34,
  visScore1 = 3;

//Game 2
var homeTeam2 = assHats,
  visTeam2 = gotHeem,
  gameDate2 = "04-23-2017 12:15",
  fieldLoc2 = mc2,
  homeScore2 = 4,
  visScore2 = 12;

//Game 3
var homeTeam3 = gotHeem,
  visTeam3 = assHats,
  gameDate3 = "04-30-2017 11:15",
  fieldLoc3 = ns,
  homeScore3 = 34,
  visScore3 = 35;

console.log(
  "This script populates a some games to your database. ",
  "Specified database as argument - ",
  "e.g.: populatedb mongodb://your_username:your_password@your_dabase_url"
);

//Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith("mongodb://")) {
  console.log(
    "ERROR: You need to specify a valid mongodb URL as the first argument"
  );
  return;
}

//import async to run the as methods
var async = require("async");

//var MsaUser = require("./models/msaUser");
var MsaGame = require("./models/msaGame");

var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// var that the new msaGame objs are pushed to for the update to the db
var msaGames = [];

//this function is the main funtion that creates the new objects

function msaGameCreate(
  gameHomeTeamOID,
  gameVisitorTeamOID,
  gameDate,
  gameFieldOID,
  gameHomeTeamScore,
  gameVisitorTeamScore,
  cb
) {
  gamedetail = {
    game_home_team_OID: gameHomeTeamOID,
    game_visitor_team_OID: gameVisitorTeamOID,
    game_date: gameDate,
    game_field_OID: gameFieldOID,
    game_home_team_score: gameHomeTeamScore,
    game_visitor_team_score: gameVisitorTeamScore
  };

  // the var for a new msaGame obj
  var msaGame = new MsaGame(gamedetail);
  //save the new objs to the database
  msaGame.save(function(err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New MSA Game: " + msaGame);
    msaGames.push(msaGame);
    cb(null, msaGame);
  });
}

//// TODO Will need the OBJ Ids from msaField

function createGames(cb) {
  async.parallel([
    function(callback) {
      msaGameCreate(
        homeTeam1,
        visTeam1,
        gameDate1,
        fieldLoc1,
        homeScore1,
        visScore1,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        homeTeam2,
        visTeam2,
        gameDate2,
        fieldLoc2,
        homeScore2,
        visScore2,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        homeTeam3,
        visTeam3,
        gameDate3,
        fieldLoc3,
        homeScore3,
        visScore3,
        callback
      );
    }
  ]);
}

/// start async process to update the db

async.series(
  [createGames],
  // optional callback
  function(err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("msaGames: " + msaGames);
    }
    //All done, disconnect from database
    mongoose.connection.close();
  }
);
