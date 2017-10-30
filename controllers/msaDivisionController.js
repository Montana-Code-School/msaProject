var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");
var MsaGame = require("../models/msaGame");
var MsaField = require("../models/msaField");
var MsaDivision = require("../models/msaDivision");
var MsaLeague = require("../models/msaLeague");

exports.createDivision = function(req, res) {
  //construct the main create division function
  console.log(req.body);

  MsaDivision.create(req.body, function(err) {
    if (err) {
      //console.log(err);
      res.json({ success: false });
    } else {
      console.log("Division saved successfully");
      res.json({ success: true });
    }
  });
};

exports.deleteDivision = function(req, res) {
  MsaDivision.remove({ _id: req.body._id }, function(err, result) {
    res.json(result);
  });
};

exports.editDivision = function(req, res) {
  console.log(req.body);

  MsaDivision.findOneAndUpdate({ _id: req.body._id }, req.body, function(
    err,
    division
  ) {
    console.log(division);
    res.json(division);
  });
};

exports.viewDivisionsByLeague = function(req, res) {
  var leagueOID = req.params.leagueOID;
  MsaDivision.find({})
    .populate("division_league_OID")
    .sort([["division_league_OID", "ascending"]])
    .sort([["division_name", "ascending"]])
    .exec(function(err, divisions) {
      if (err) {
        res.status(500).json(err);
      } else {
        console.log("divisions", divisions);
        res.json(divisions);
      }
    });
};

exports.viewDivisions = function(req, res) {
  //console.log(req.params._id);
  MsaDivision.find({})
    .populate("division_league_OID")
    .sort([["division_league_OID", "ascending"]])
    .sort([["division_name", "ascending"]])
    .exec(function(err, divisions) {
      console.log(divisions);
      res.json(divisions);
    });
};

exports.viewDivisionByOID = function(req, res) {
  //console.log(req.params._id);
  MsaDivision.findById(req.params._id)
    .populate("division_league_OID")
    .exec(function(err, division) {
      console.log(division);
      res.json(division);
    });
};
