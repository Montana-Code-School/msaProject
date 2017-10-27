//Run this 1

console.log(
  "This script populates a some leagues to your database. ",
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

// import the model
var MsaLeague = require("./models/msaLeague");

//Connect to the DB
var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// var that the new msaLeague objs are pushed to for the update to the db
var msaLeagues = [];

//this function is the main funtion that creates the new objects

function msaLeagueCreate(leagueName, leagueSeason, leagueGameDay, cb) {
  leaguedetail = {
    league_name: leagueName,
    league_season: leagueSeason,
    league_game_day: leagueGameDay
  };

  // the var for a new msaLeague obj
  var msaLeague = new MsaLeague(leaguedetail);
  //save the new objs to the database
  msaLeague.save(function(err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New MSA League: " + msaLeague);
    msaLeagues.push(msaLeague);
    cb(null, msaLeague);
  });
}

function createLeagues(cb) {
  async.parallel([
    function(callback) {
      msaLeagueCreate("Mens", "Spring", "", callback);
    },
    function(callback) {
      msaLeagueCreate("Mens", "Fall", "", callback);
    },
    function(callback) {
      msaLeagueCreate("Womens", "Spring", "", callback);
    },
    function(callback) {
      msaLeagueCreate("Womens", "Fall", "", callback);
    },
    function(callback) {
      msaLeagueCreate("CoRec", "Spring", "Sunday", callback);
    },
    function(callback) {
      msaLeagueCreate("CoRec", "Spring", "Thursday", callback);
    },
    function(callback) {
      msaLeagueCreate("CoRec", "Spring", "Friday", callback);
    },
    function(callback) {
      msaLeagueCreate("CoRec", "Fall", "", callback);
    }
  ]);
}

/// start async process to update the db

async.series(
  [createLeagues],
  // optional callback
  function(err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("msaLeagues: " + msaLeagues);
    }
    //All done, disconnect from database
    mongoose.connection.close();
  }
);
