var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");

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
  MsaTeam.findOneAndUpdate({ _id: req.body._id }, req.body, function(
    err,
    team
  ) {
    console.log(team);
    res.json(team);
  });
};
