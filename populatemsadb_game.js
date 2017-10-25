console.log(
  "This script populates a some users to your database. ",
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

function createGames(cb) {
  async.parallel([
    function(callback) {
      msaGameCreate(
        "59f0f6fddca5c707fe217adb",
        "59f0f6fddca5c707fe217adc",
        "4/23/2017 11:15",
        "The Pits of Despair",
        9001,
        13,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        "59f0f6fddca5c707fe217adc",
        "59f0f6fddca5c707fe217add",
        "4/23/2017 10:15",
        "The Pits of Despair",
        6783,
        4697,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        "59f0f6fddca5c707fe217adc",
        "59f0f6fddca5c707fe217adb",
        "4/30/2017 11:15",
        "your final destination",
        6987,
        7896,
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
