//Run this 4
//THE OBJECT IDS ARE UNIQUE TO THE DB ON EACH COMPUTER
//IF running this script on a new computer or populating into
// a new db you must update all the OID variables

//var for the fields

var mc1 = "59fa18309af549717b4a76aa",
  mc2 = "59fa18309af549717b4a76ac",
  ns = "59fa18309af549717b4a76ab";

//// Team Variables

var asshats = "59fa03ef91ff7d7021876e6c",
  idHitThat = "59fa03ef91ff7d7021876e6e",
  dirtyDollar = "59fa03ef91ff7d7021876e6d",
  madBatters = "59fa03ef91ff7d7021876e6f",
  snowyMtnRiffles = "59fa03ef91ff7d7021876e71",
  misfits = "59fa03ef91ff7d7021876e70",
  theBudz = "59fa03ef91ff7d7021876e72",
  areYouSerious = "59fa03ef91ff7d7021876e74",
  bennysLithiaFord = "59fa03ef91ff7d7021876e75",
  woolSox = "59fa03ef91ff7d7021876e73",
  despoPepsi = "59fa03ef91ff7d7021876e76",
  mslaHeatingAndCooling = "59fa03ef91ff7d7021876e7b",
  suckerPunch = "59fa03ef91ff7d7021876e80",
  peakHealthAndWellness = "59fa03ef91ff7d7021876e77",
  mTClub = "59fa03ef91ff7d7021876e7c",
  teamOhana = "59fa03ef91ff7d7021876e81",
  dirtySunrise = "59fa03ef91ff7d7021876e79",
  pitchesMeCrazy = "59fa03ef91ff7d7021876e7d",
  vWIce = "59fa03ef91ff7d7021876e82",
  jackson = "59fa03ef91ff7d7021876e7a",
  rAW = "59fa03ef91ff7d7021876e7e",
  westsideLanesPFalls = "59fa03ef91ff7d7021876e83",
  problems99 = "59fa03ef91ff7d7021876e78",
  sandlotWarriors = "59fa03ef91ff7d7021876e7f";

// Game Variables

//

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
      msaGameCreate(dirtyDollar, asshats, "9-8-2017 19:25", ns, 7, 2, callback);
    },
    function(callback) {
      msaGameCreate(theBudz, asshats, "9-22-2017 21:45", mc2, 3, 12, callback);
    },
    function(callback) {
      msaGameCreate(
        idHitThat,
        asshats,
        "10-6-2017 20:35",
        ns,
        14,
        22,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        madBatters,
        dirtyDollar,
        "9-15-2017 21:45",
        ns,
        3,
        12,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        idHitThat,
        dirtyDollar,
        "9-29-2017 18:35",
        ns,
        13,
        12,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        theBudz,
        dirtyDollar,
        "10-6-2017 18:35",
        ns,
        13,
        12,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        theBudz,
        idHitThat,
        "8-25-2017 20:35",
        ns,
        14,
        22,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        madBatters,
        idHitThat,
        "9-8-2017 19:25",
        mc1,
        2,
        1,
        callback
      );
    },
    function(callback) {
      msaGameCreate(woolSox, idHitThat, "9-22-2017 19:25", mc1, 2, 1, callback);
    },

    function(callback) {
      msaGameCreate(
        woolSox,
        madBatters,
        "8-25-2017 21:45",
        mc2,
        3,
        12,
        callback
      );
    },
    function(callback) {
      msaGameCreate(misfits, madBatters, "9-22-2017 19:25", ns, 7, 2, callback);
    },
    function(callback) {
      msaGameCreate(
        snowyMtnRiffles,
        madBatters,
        "10-6-2017 19:25",
        mc1,
        2,
        1,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        dirtyDollar,
        misfits,
        "8-25-2017 19:25",
        mc1,
        2,
        1,
        callback
      );
    },
    function(callback) {
      msaGameCreate(asshats, misfits, "9-15-2017 20:35", ns, 14, 22, callback);
    },
    function(callback) {
      msaGameCreate(
        snowyMtnRiffles,
        misfits,
        "9-29-2017 18:35",
        mc2,
        13,
        14,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        asshats,
        snowyMtnRiffles,
        "8-25-2017 21:45",
        mc1,
        2,
        11,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        idHitThat,
        snowyMtnRiffles,
        "9-15-2017 21:45",
        mc2,
        3,
        12,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        dirtyDollar,
        snowyMtnRiffles,
        "9-22-2017 20:35",
        mc1,
        24,
        21,
        callback
      );
    },

    function(callback) {
      msaGameCreate(misfits, theBudz, "9-8-2017 18:35", ns, 13, 12, callback);
    },
    function(callback) {
      msaGameCreate(woolSox, theBudz, "9-15-2017 19:25", ns, 7, 2, callback);
    },
    function(callback) {
      msaGameCreate(
        madBatters,
        theBudz,
        "9-29-2017 20:35",
        mc1,
        24,
        21,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        snowyMtnRiffles,
        woolSox,
        "9-8-2017 18:35",
        mc1,
        23,
        11,
        callback
      );
    },
    function(callback) {
      msaGameCreate(asshats, woolSox, "9-29-2017 18:35", mc1, 23, 11, callback);
    },
    function(callback) {
      msaGameCreate(misfits, woolSox, "10-6-2017 21:45", ns, 3, 12, callback);
    },

    function(callback) {
      msaGameCreate(
        despoPepsi,
        areYouSerious,
        "8-25-2017 19:25",
        mc2,
        7,
        3,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        peakHealthAndWellness,
        areYouSerious,
        "9-29-2017 20:35",
        mc2,
        14,
        20,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        bennysLithiaFord,
        areYouSerious,
        "10-6-2017 19:25",
        mc2,
        7,
        3,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        peakHealthAndWellness,
        bennysLithiaFord,
        "8-25-2017 20:35",
        mc2,
        14,
        20,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        despoPepsi,
        bennysLithiaFord,
        "9-8-2017 20:35",
        mc2,
        14,
        20,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        areYouSerious,
        bennysLithiaFord,
        "9-22-2017 20:35",
        mc2,
        14,
        20,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        areYouSerious,
        despoPepsi,
        "9-15-2017 19:25",
        mc2,
        7,
        3,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        bennysLithiaFord,
        despoPepsi,
        "9-29-2017 21:45",
        mc2,
        3,
        12,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        peakHealthAndWellness,
        despoPepsi,
        "10-6-2017 20:35",
        mc2,
        14,
        20,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        areYouSerious,
        peakHealthAndWellness,
        "9-8-2017 21:45",
        mc2,
        3,
        12,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        bennysLithiaFord,
        peakHealthAndWellness,
        "9-15-2017 18:35",
        mc2,
        13,
        14,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        despoPepsi,
        peakHealthAndWellness,
        "9-22-2017 19:25",
        mc2,
        7,
        3,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        mslaHeatingAndCooling,
        problems99,
        "8-25-2017 19:25",
        ns,
        7,
        2,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        dirtySunrise,
        problems99,
        "9-8-2017 18:35",
        mc2,
        13,
        14,
        callback
      );
    },

    function(callback) {
      msaGameCreate(rAW, dirtySunrise, "8-25-2017 18:35", ns, 13, 12, callback);
    },
    function(callback) {
      msaGameCreate(
        mslaHeatingAndCooling,
        dirtySunrise,
        "9-15-2017 20:35",
        mc1,
        24,
        21,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        sandlotWarriors,
        dirtySunrise,
        "9-22-2017 21:45",
        mc1,
        2,
        11,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        pitchesMeCrazy,
        jackson,
        "8-25-2017 21:45",
        ns,
        3,
        12,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        problems99,
        jackson,
        "9-15-2017 21:45",
        mc1,
        2,
        11,
        callback
      );
    },
    function(callback) {
      msaGameCreate(rAW, jackson, "9-22-2017 20:35", ns, 14, 22, callback);
    },
    function(callback) {
      msaGameCreate(
        dirtySunrise,
        jackson,
        "9-29-2017 19:25",
        mc1,
        2,
        1,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        pitchesMeCrazy,
        mslaHeatingAndCooling,
        "9-8-2017 21:45",
        mc1,
        2,
        11,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        rAW,
        mslaHeatingAndCooling,
        "9-29-2017 21:45",
        ns,
        3,
        12,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        jackson,
        mslaHeatingAndCooling,
        "10-6-2017 18:35",
        mc2,
        13,
        14,
        callback
      );
    },

    function(callback) {
      msaGameCreate(rAW, mTClub, "9-8-2017 21:45", ns, 3, 12, callback);
    },
    function(callback) {
      msaGameCreate(
        sandlotWarriors,
        mTClub,
        "9-15-2017 19:25",
        mc1,
        2,
        1,
        callback
      );
    },
    function(callback) {
      msaGameCreate(teamOhana, mTClub, "9-22-2017 18:35", ns, 13, 12, callback);
    },

    function(callback) {
      msaGameCreate(
        vWIce,
        pitchesMeCrazy,
        "9-22-2017 18:35",
        mc1,
        23,
        11,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        problems99,
        pitchesMeCrazy,
        "9-29-2017 19:25",
        ns,
        7,
        2,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        dirtySunrise,
        pitchesMeCrazy,
        "10-6-2017 18:35",
        mc1,
        23,
        11,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        pitchesMeCrazy,
        rAW,
        "9-15-2017 18:35",
        mc1,
        23,
        11,
        callback
      );
    },
    function(callback) {
      msaGameCreate(problems99, rAW, "10-6-2017 21:45", mc1, 2, 11, callback);
    },

    function(callback) {
      msaGameCreate(
        suckerPunch,
        sandlotWarriors,
        "9-8-2017 20:35",
        ns,
        14,
        22,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        westsideLanesPFalls,
        sandlotWarriors,
        "9-29-2017 21:45",
        mc1,
        2,
        11,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        vWIce,
        sandlotWarriors,
        "10-6-2017 19:25",
        ns,
        7,
        2,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        problems99,
        suckerPunch,
        "9-22-2017 18:35",
        mc2,
        13,
        14,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        teamOhana,
        suckerPunch,
        "9-29-2017 19:25",
        mc2,
        7,
        3,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        mTClub,
        suckerPunch,
        "10-6-2017 21:45",
        mc2,
        3,
        12,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        sandlotWarriors,
        teamOhana,
        "8-25-2017 20:35",
        mc1,
        24,
        21,
        callback
      );
    },
    function(callback) {
      msaGameCreate(jackson, teamOhana, "9-8-2017 19:25", mc2, 7, 3, callback);
    },
    function(callback) {
      msaGameCreate(
        westsideLanesPFalls,
        teamOhana,
        "10-6-2017 20:35",
        mc1,
        24,
        21,
        callback
      );
    },

    function(callback) {
      msaGameCreate(
        suckerPunch,
        vWIce,
        "8-25-2017 18:35",
        mc1,
        23,
        11,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        westsideLanesPFalls,
        vWIce,
        "9-8-2017 20:35",
        mc1,
        24,
        21,
        callback
      );
    },
    function(callback) {
      msaGameCreate(teamOhana, vWIce, "9-15-2017 20:35", mc2, 14, 20, callback);
    },
    function(callback) {
      msaGameCreate(mTClub, vWIce, "9-29-2017 20:35", ns, 14, 22, callback);
    },

    function(callback) {
      msaGameCreate(
        mTClub,
        westsideLanesPFalls,
        "8-25-2017 18:35",
        mc2,
        13,
        14,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        suckerPunch,
        westsideLanesPFalls,
        "9-15-2017 18:35",
        ns,
        13,
        12,
        callback
      );
    },
    function(callback) {
      msaGameCreate(
        mslaHeatingAndCooling,
        westsideLanesPFalls,
        "9-22-2017 21:45",
        ns,
        3,
        12,
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
