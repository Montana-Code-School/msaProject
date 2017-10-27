//Run this 2

/// vars for the different divisions

var mensSpring = "59f3599cd24ffa3d02f7926a",
  mensFall = "59f3599cd24ffa3d02f7926b",
  womensSpring = "59f3599cd24ffa3d02f7926c",
  womensFall = "59f3599cd24ffa3d02f7926d",
  coRecSpringTh = "59f3599cd24ffa3d02f7926f",
  coRecSpringFr = "59f3599cd24ffa3d02f79270",
  coRecSpringSu = "59f3599cd24ffa3d02f7926e",
  coRecfFall = "59f3599cd24ffa3d02f79271";

console.log(
  "This script populates a some divisions to your database. ",
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
var MsaDivision = require("./models/msaDivision");

//Connect to the DB
var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// var that the new msaDivision objs are pushed to for the update to the db
var msaDivisions = [];

//this function is the main funtion that creates the new objects

function msaDivisionCreate(divisionName, divisionLeagueOID, cb) {
  divisiondetail = {
    division_name: divisionName,
    division_league_OID: divisionLeagueOID
  };

  // the var for a new msaDivision obj
  var msaDivision = new MsaDivision(divisiondetail);
  //save the new objs to the database
  msaDivision.save(function(err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New MSA Division: " + msaDivision);
    msaDivisions.push(msaDivision);
    cb(null, msaDivision);
  });
}

// mensSpring
// mensFall
// womensSpring
// womensFall
// coRecSpringTh
// coRecSpringFr
// coRecSpringSu
// coRecfFall

function createDivisions(cb) {
  async.parallel([
    function(callback) {
      msaDivisionCreate("D", mensSpring, callback);
    },
    function(callback) {
      msaDivisionCreate("D", coRecSpringFr, callback);
    },
    function(callback) {
      msaDivisionCreate("E", mensSpring, callback);
    },
    function(callback) {
      msaDivisionCreate("E", coRecSpringTh, callback);
    },
    function(callback) {
      msaDivisionCreate("E", coRecSpringFr, callback);
    },
    function(callback) {
      msaDivisionCreate("E 1", mensSpring, callback);
    },

    function(callback) {
      msaDivisionCreate("E 1", coRecSpringFr, callback);
    },
    function(callback) {
      msaDivisionCreate("E 1", coRecSpringSu, callback);
    },
    function(callback) {
      msaDivisionCreate("E 2", coRecSpringSu, callback);
    },
    function(callback) {
      msaDivisionCreate("Over 45", mensSpring, callback);
    },
    function(callback) {
      msaDivisionCreate("Red", mensFall, callback);
    },
    function(callback) {
      msaDivisionCreate("White", mensFall, callback);
    },
    function(callback) {
      msaDivisionCreate("Blue", mensFall, callback);
    },
    function(callback) {
      msaDivisionCreate("Red", coRecfFall, callback);
    },
    function(callback) {
      msaDivisionCreate("White", coRecfFall, callback);
    },
    function(callback) {
      msaDivisionCreate("Blue", coRecfFall, callback);
    }
  ]);
}

/// start async process to update the db

async.series(
  [createDivisions],
  // optional callback
  function(err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("msaDivisions: " + msaDivisions);
    }
    //All done, disconnect from database
    mongoose.connection.close();
  }
);
