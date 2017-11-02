//Run this 3

//Default User 59f3586a6690063cdbd0e4f4

var chuckNorris = "59f9fcab57bdc56f62eb89cf",
  cordellWalker = "59f9fcab57bdc56f62eb89d0",
  johnRandall = "59f9fcab57bdc56f62eb89d1",
  jakeWilder = "59f9fcab57bdc56f62eb89d2",
  frankShatter = "59f9fcab57bdc56f62eb89d3";
var defaultUser = chuckNorris;

//Default Divisions

var coRecFallRed = "59fa00fe4aba976fbcea3649",
  coRecFallBlue = "59fa00fe4aba976fbcea364b",
  coRecFallWhite = "59fa00fe4aba976fbcea364a";

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
var MsaTeam = require("./models/msaTeam");

var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// var that the new msaTeam objs are pushed to for the update to the db
var msaTeams = [];

//this function is the main funtion that creates the new objects
function msaTeamCreate(
  teamName,
  teamDivisionOID,
  teamOwnerUserNameOID,
  teamMemberUserNameOID,
  cb
) {
  teamdetail = {
    team_name: teamName,
    team_division_OID: teamDivisionOID
  };
  if (teamOwnerUserNameOID != false)
    teamdetail.team_owner_user_name_OID = teamOwnerUserNameOID;
  if (teamMemberUserNameOID != false)
    teamdetail.team_member_user_name_OID = teamMemberUserNameOID;
  // the var for a new msaTeam obj
  var msaTeam = new MsaTeam(teamdetail);
  //save the new objs to the database
  msaTeam.save(function(err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New MSA Team: " + msaTeam);
    msaTeams.push(msaTeam);
    cb(null, msaTeam);
  });
}

function createTeams(cb) {
  async.parallel([
    function(callback) {
      msaTeamCreate(
        "Asshats",
        coRecFallBlue,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Dirty Dollar",
        coRecFallBlue,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Id Hit That",
        coRecFallBlue,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Mad Batters",
        coRecFallBlue,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Misfits",
        coRecFallBlue,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Snowy Mtn Riffles",
        coRecFallBlue,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "The Budz",
        coRecFallBlue,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Wool Sox",
        coRecFallBlue,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Are You Serious",
        coRecFallRed,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Bennys Lithia Ford",
        coRecFallRed,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Despo Pepsi",
        coRecFallRed,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Peak Health And Wellness",
        coRecFallRed,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "99 Problems",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Dirty Sunrise",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Jackson",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Msla Heating And Cooling",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "MT Club",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Pitches Me Crazy",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "R A W ",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Sandlot Warriors",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Sucker Punch",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Team Ohana",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "V W  Ice",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },

    function(callback) {
      msaTeamCreate(
        "Westside Lanes P Falls",
        coRecFallWhite,
        chuckNorris,
        [chuckNorris, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    }
  ]);
}

/// start async process to update the db

async.series(
  [createTeams],
  // optional callback
  function(err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("msaTeams: " + msaTeams);
    }
    //All done, disconnect from database
    mongoose.connection.close();
  }
);
