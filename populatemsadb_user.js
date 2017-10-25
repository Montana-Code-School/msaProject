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
  user_name,
  user_password,
  user_first_name,
  user_last_name,
  user_privilege,
  user_created_date,
  user_team_name_OID_opt,
  cb
) {
  msaUserDetail = {
    user_name: user_name,
    user_password: user_password,
    user_first_name: user_first_name,
    user_last_name: user_last_name,
    user_privilege: user_privilege,
    user_created_date: user_created_date
  };
  if (user_team_name_OID_opt != false)
    msaUserDetail.user_team_name_OID = user_team_name_OID_opt;

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
        "Chuck",
        "Aa1234567890!@#$%^&*()_-+=~:;,./<>?",
        "Chuck",
        "Norris",
        "MsaAdminPriv",
        Date.now,
        false,
        callback
      );
    },
    function(callback) {
      msaUserCreate(
        "JohnDoe",
        "Aa1234567890!@#$%^&*()_-+=~:;,./<>?",
        "John",
        "Doe",
        "MsaUserPriv",
        Date.now,
        false,
        callback
      );
    },
    function(callback) {
      msaUserCreate(
        "BobWard03",
        "Aa1234567890!@#$%^&*()_-+=~:;,./<>?",
        "Bob",
        "Ward",
        "MsaUserPriv",
        Date.now,
        false,
        callback
      );
    },
    function(callback) {
      msaUserCreate(
        "RomaBrowder",
        "Aa1234567890!@#$%^&*()_-+=~:;,./<>?",
        "Roma",
        "Browder",
        "MsaPublisherPriv",
        Date.now,
        false,
        callback
      );
    },
    function(callback) {
      msaUserCreate(
        "JaneDoe",
        "Aa1234567890!@#$%^&*()_-+=~:;,./<>?",
        "Jane",
        "Doe",
        "MsaPublisherPriv",
        Date.now,
        false,
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
