var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");
var MsaGame = require("../models/msaGame");
var MsaField = require("../models/msaField");
var MsaDivision = require("../models/msaDivision");
var MsaLeague = require("../models/msaLeague");

//import async to run the as methods
var async = require("async");
// var moment = require("moment");
// moment().format();

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
  MsaTeam.find({})
    .populate("team_division_OID")
    .populate("team_division_OID.division_league_OID")
    .populate("team_owner_user_name_OID")
    .populate("team_member_user_name_OID")
    .sort([["team_name", "ascending"]])
    .exec(function(err, teams) {
      console.log(teams);
      res.json(teams);
    });
};

/*exports.viewTeams = function(req, res) {
  //console.log(req.params._id);
  MsaTeam.find({})
    .populate([
      {
        path: "team_division_OID",

        populate: {
          path: "division_league_OID"
        }
      }
    ])
    .populate("team_owner_user_name_OID")
    .populate("team_member_user_name_OID")
    .sort([["team_name", "ascending"]])
    .exec(function(err, teams) {
      console.log(teams);
      res.json(teams);
    });
};*/

exports.viewTeam = function(req, res) {
  console.log(req.params._id);
  MsaTeam.findById(req.params._id)
    .populate([
      {
        path: "team_division_OID",

        populate: {
          path: "division_league_OID"
        }
      }
    ])
    .populate("team_owner_user_name_OID")
    .populate("team_member_user_name_OID")
    .exec(function(err, team) {
      console.log(team);
      res.json(team);
    });
};

/*exports.viewTeam = function(req, res) {
  console.log(req.params._id);
  MsaTeam.findById(req.params._id, function(err, team) {
    console.log(team);
    res.json(team);
  });
};

exports.viewTeam = function(req, res) {
  console.log(req.params._id);
  MsaTeam.findById(req.params._id)
    .populate("team_owner_user_name_OID")
    .populate("team_division_OID")
    .populate("team_member_user_name_OID")
    .exec(function(err, team) {
      console.log(team);
      res.json(team);
    });
};


exports.viewTeams = function(req, res) {
  //console.log(req.params._id);
  MsaTeam.find({})
    .populate("team_division_OID")
    .populate("team_owner_user_name_OID")
    .populate("team_member_user_name_OID")
    .sort([["team_name", "ascending"]])
    .exec(function(err, teams) {
      console.log(teams);
      res.json(teams);
    });
};

*/
