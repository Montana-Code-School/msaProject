var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");
var MsaGame = require("../models/msaGame");
var MsaField = require("../models/msaField");
var MsaDivision = require("../models/msaDivision");
var MsaLeague = require("../models/msaLeague");

exports.createLeague = function(req, res) {
  //construct the main create league function
  console.log(req.body);

  MsaLeague.create(req.body, function(err) {
    if (err) {
      //console.log(err);
      res.json({ success: false });
    } else {
      console.log("Team saved successfully");
      res.json({ success: true });
    }
  });
};

exports.deleteLeague = function(req, res) {
  MsaLeague.remove({ _id: req.body._id }, function(err, result) {
    res.json(result);
  });
};

exports.editLeague = function(req, res) {
  console.log(req.body);

  MsaLeague.findOneAndUpdate({ _id: req.body._id }, req.body, function(
    err,
    league
  ) {
    console.log(league);
    res.json(league);
  });
};

exports.viewLeagues = function(req, res) {
  //console.log(req.params._id);
  MsaLeague.find({})
    .sort([["league_name", "ascending"]])
    .sort([["league_season", "descending"]])
    .exec(function(err, leagues) {
      console.log(leagues);
      res.json(leagues);
    });
};

exports.viewLeague = function(req, res) {
  console.log(req.params._id);
  MsaLeague.findById(req.params._id, function(err, league) {
    console.log(league);
    res.json(league);
  });
};
