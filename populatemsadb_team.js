#! /usr/bin/env node

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

var msaTeams = [];

function msaTeamCreate(
  team_name,
  team_league_OID,
  team_owner_user_name_OID_opt,
  team_member_user_name_OID_opt,
  cb
) {
  teamdetail = {
    team_name: team_name,
    team_league_OID: team_league_OID
  };
  if (team_owner_user_name_OID_opt != false)
    teamdetail.team_owner_user_name_OID = team_owner_user_name_OID_opt;
  if (team_member_user_name_OID_opt != false)
    teamdetail.team_member_user_name_OID = team_member_user_name_OID_opt;

  var msaTeam = new MsaTeam(teamdetail);

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
        "Got Heem",
        "Unassigned",
        "59df5ead0d715109276e0467",
        false,
        callback
      );
    },
    function(callback) {
      msaTeamCreate("Budz", "Mens", false, false, callback);
    },
    function(callback) {
      msaTeamCreate("AssHats", "CoRec", false, false, callback);
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
