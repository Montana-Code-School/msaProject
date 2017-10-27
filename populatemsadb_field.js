console.log(
  "This script populates a some fields to your database. ",
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
var MsaField = require("./models/msaField");

//Connect to the DB
var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// var that the new msaField objs are pushed to for the update to the db
var msaFields = [];

//this function is the main funtion that creates the new objects

function msaFieldCreate(fieldComplexName, fieldName, cb) {
  fielddetail = {
    field_complex_name: fieldComplexName,
    field_name: fieldName
  };

  // the var for a new msaField obj
  var msaField = new MsaField(fielddetail);
  //save the new objs to the database
  msaField.save(function(err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New MSA Field: " + msaField);
    msaFields.push(msaField);
    cb(null, msaField);
  });
}

function createFields(cb) {
  async.parallel([
    function(callback) {
      msaFieldCreate("McCormick", "1", callback);
    },
    function(callback) {
      msaFieldCreate("McCormick", "2", callback);
    },
    function(callback) {
      msaFieldCreate("NorthSide", "", callback);
    },
    function(callback) {
      msaFieldCreate("Fort Missoula", "1", callback);
    },
    function(callback) {
      msaFieldCreate("Fort Missoula", "2", callback);
    },
    function(callback) {
      msaFieldCreate("Fort Missoula", "3", callback);
    },
    function(callback) {
      msaFieldCreate("Fort Missoula", "4", callback);
    },
    function(callback) {
      msaFieldCreate("Fort Missoula", "5", callback);
    },
    function(callback) {
      msaFieldCreate("Fort Missoula", "6", callback);
    },
    function(callback) {
      msaFieldCreate("Unassigned", "Unassigned", callback);
    }
  ]);
}

/// start async process to update the db

async.series(
  [createFields],
  // optional callback
  function(err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("msaFields: " + msaFields);
    }
    //All done, disconnect from database
    mongoose.connection.close();
  }
);
