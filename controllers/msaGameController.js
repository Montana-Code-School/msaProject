var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");
var MsaGame = require("../models/msaGame");

exports.createGame = function(req, res) {
  //construct the main create game function
  console.log(req.body);

  MsaGame.create(req.body, function(err) {
    if (err) {
      //console.log(err);
      res.json({ success: false });
    } else {
      console.log("Game saved successfully");
      res.json({ success: true });
    }
  });
};

exports.deleteGame = function(req, res) {
  MsaGame.remove({ _id: req.body._id }, function(err, result) {
    res.json(result);
  });
};

exports.editGame = function(req, res) {
  console.log(req.body);

  MsaGame.findOneAndUpdate({ _id: req.body._id }, req.body, function(
    err,
    game
  ) {
    console.log(game);
    res.json(game);
  });
};

exports.viewGamesByDate = function(req, res) {
  //console.log(req.params._id);
  MsaGame.find({}, "game_date")
    .sort([["game_date", "ascending"]])
    .exec(function(err, game) {
      console.log(game);
      res.json(game);
    });
};

exports.viewGamesByTeam = function(req, res) {
  var teamOID = req.params.teamId;
  MsaGame.find({
    $or: [{ game_home_team_OID: teamOID }, { game_visitor_team_OID: teamOID }]
  })
    .populate("game_home_team_OID")
    .populate("game_visitor_team_OID")
    .exec(function(err, game) {
      console.log(game);
      res.json(game);
    });
};
//.sort([["game_date", "ascending"]])
//.exec(function(err, game) {

// MsaGame.find(
//   {
//     $or: [
//       { game_home_team_OID: "59ea30ef14cf6d0f5a3338bc" },
//       { game_visitor_team_OID: "59ea30ef14cf6d0f5a3338bc" }
//     ]
//   },
//   function(err, game) {
//     console.log(game);
//     res.json(game);
//   }
// );

exports.viewGame = function(req, res) {
  console.log(req.params._id);
  MsaGame.findById(req.params._id, function(err, game) {
    console.log(game);
    res.json(game);
  });
};
