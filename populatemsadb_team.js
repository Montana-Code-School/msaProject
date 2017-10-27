//Run this 3

//Default User 59f3586a6690063cdbd0e4f4
var defaultUser = "59f3586a6690063cdbd0e4f4",
  chuckNorris = "59f3586a6690063cdbd0e4f4",
  cordellWalker = "59f3586a6690063cdbd0e4f5",
  jakeWilder = "59f3586a6690063cdbd0e4f7",
  frankShatter = "59f3586a6690063cdbd0e4f8",
  johnRandall = "59f3586a6690063cdbd0e4f6";

//Default Divisions

var mensSpringD = "59f3607f3af84e3d80a4a2bd",
  mensSpringE1 = "59f3607f3af84e3d80a4a2c2",
  coRecSpringFrD = "59f3607f3af84e3d80a4a2be",
  coRecSpringFrE1 = "59f3607f3af84e3d80a4a2c3",
  mensSpringWhite = "59f3607f3af84e3d80a4a2c8",
  coRecSpringThE = "59f3607f3af84e3d80a4a2c0",
  coRecSpringSuE2 = "59f3607f3af84e3d80a4a2c5",
  coRecfFallRed = "59f3607f3af84e3d80a4a2ca",
  mensSpringE = "59f3607f3af84e3d80a4a2bf",
  coRecSpringSuE1 = "59f3607f3af84e3d80a4a2c4",
  mensSpringBlue = "59f3607f3af84e3d80a4a2c9",
  mensSpringRed = "59f3607f3af84e3d80a4a2c7",
  coRecfFallBlue = "59f3607f3af84e3d80a4a2cc",
  coRecSpringFrE = "59f3607f3af84e3d80a4a2c1",
  mensSpringOver45 = "59f3607f3af84e3d80a4a2c6",
  coRecfFallWhite = "59f3607f3af84e3d80a4a2cb";

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
//
// chuckNorris,
// cordellWalker,
// jakeWilder,
// frankShatter,
// johnRandall,

function createTeams(cb) {
  async.parallel([
    function(callback) {
      msaTeamCreate(
        "Got Heem",
        mensSpringD,
        defaultUser,
        [defaultUser, cordellWalker, jakeWilder, frankShatter, johnRandall],
        callback
      );
    },
    function(callback) {
      msaTeamCreate(
        "the ligning rats that eat rubber bollons",
        mensSpringD,
        defaultUser,
        [defaultUser, cordellWalker, jakeWilder, frankShatter],
        callback
      );
    },
    function(callback) {
      msaTeamCreate(
        "AssHats",
        mensSpringD,
        defaultUser,
        [defaultUser, cordellWalker],
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
