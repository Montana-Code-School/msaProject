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

var MsaUser = require("./models/msaUser");
//var MsaTeam = require("./models/msaTeam");

var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

var msaUsers = [];

function msaUserCreate(
  userPassword,
  userEmail,
  userFirstName,
  userLastName,
  userPrivilege,
  cb
) {
  msaUserDetail = {
    user_password: userPassword,
    user_email: userEmail,
    user_first_name: userFirstName,
    user_last_name: userLastName,
    user_privilege: userPrivilege
  };

  var msaUser = new MsaUser(msaUserDetail);

  msaUser.save(function(err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New MSA User: " + msaUser);
    msaUsers.push(msaUser);
    cb(null, msaUser);
  });
}

function createUsers(cb) {
  async.parallel([
    function(callback) {
      msaUserCreate(
        "Aa1234567890!@#$%^&*()_-+=~:;,./<>?",
        "chuck@gmail.com",
        "Chuck",
        "Norris",
        "MsaAdmin",
        callback
      );
    },
    function(callback) {
      msaUserCreate(
        "Aa1234567890!@#$%^&*()_-+=~:;,./<>?",
        "walker@gmail.com",
        "Cordell",
        "Walker",
        "MsaCaptain",
        callback
      );
    },
    function(callback) {
      msaUserCreate(
        "Aa1234567890!@#$%^&*()_-+=~:;,./<>?",
        "txrngr@gmail.com",
        "John",
        "Randall",
        "MsaCaptain",
        callback
      );
    },
    function(callback) {
      msaUserCreate(
        "Aa1234567890!@#$%^&*()_-+=~:;,./<>?",
        "jw@gmail.com",
        "Jake",
        "Wilder",
        "MsaCaptain",
        callback
      );
    },
    function(callback) {
      msaUserCreate(
        "Aa1234567890!@#$%^&*()_-+=~:;,./<>?",
        "FrankieS@gmail.com",
        "Frank",
        "Shatter",
        "MsaCaptain",
        callback
      );
    }
  ]);
}

/// start async process to update the db

async.series(
  [createUsers],
  // optional callback
  function(err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("msaUsers: " + msaUsers);
    }
    //All done, disconnect from database
    mongoose.connection.close();
  }
);
