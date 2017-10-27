var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");
var MsaGame = require("../models/msaGame");
var MsaField = require("../models/msaField");
var MsaDivision = require("../models/msaDivision");
var MsaLeague = require("../models/msaLeague");

exports.createTeam = function(req, res) {
  // construct the main create team function
  console.log(req.body);
  //function msaTeamCreate(

  MsaTeam.create(req.body, function(err) {
    if (err) {
      //console.log(err);
      res.json({ success: false });
    } else {
      console.log("Team saved successfully");
      res.json({ success: true });
    }
  });
};

exports.deleteTeam = function(req, res) {
  MsaTeam.remove({ _id: req.body._id }, function(err, result) {
    res.json(result);
  });
};

exports.editTeam = function(req, res) {
  console.log(req.body);
  if (req.body.imLazy) {
    req.body.team_member_user_name_OID = req.body.team_member_user_name_OID[0].split(
      " "
    );
  }
  MsaTeam.findOneAndUpdate({ _id: req.body._id }, req.body, function(
    err,
    team
  ) {
    console.log(team);
    res.json(team);
  });
};

exports.viewTeams = function(req, res) {
  //console.log(req.params._id);
  MsaTeam.find({}, "team_name")
    .sort([["team_name", "ascending"]])
    .exec(function(err, teams) {
      console.log(teams);
      res.json(teams);
    });
};

exports.viewTeam = function(req, res) {
  console.log(req.params._id);
  MsaTeam.findById(req.params._id, function(err, team) {
    console.log(team);
    res.json(team);
  });
};
