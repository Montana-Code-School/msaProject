var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");
var MsaGame = require("../models/msaGame");
var MsaField = require("../models/msaField");
var MsaDivision = require("../models/msaDivision");
var MsaLeague = require("../models/msaLeague");
var moment = require("moment");
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
  var gameDate = req.params.gameDate;
  var startGameDate = moment(gameDate, "MM-DD-YY").startOf("day");
  var endGameDate = moment(startGameDate).add(1, "days");

  console.log(startGameDate._d);

  MsaGame.find({
    game_date: {
      $gte: startGameDate.toDate(),
      $lt: endGameDate.toDate()
    }
  })
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_division_OID",
          populate: {
            path: "division_league_OID"
          }
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_division_OID",
          populate: {
            path: "division_league_OID"
          }
        }
      }
    ])
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_owner_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_owner_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_member_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_member_user_name_OID"
        }
      }
    ])
    .populate("game_field_OID")
    .sort([["game_date", "ascending"]])
    .sort([["team_division_OID.division_league_OID.league_name", "ascending"]])
    .exec(function(err, game) {
      console.log(game);
      res.json(game);
    });
};

exports.viewGamesByTeam = function(req, res) {
  var teamOID = req.params.teamOID;
  MsaGame.find({
    $or: [{ game_home_team_OID: teamOID }, { game_visitor_team_OID: teamOID }]
  })
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_division_OID",
          populate: {
            path: "division_league_OID"
          }
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_division_OID",
          populate: {
            path: "division_league_OID"
          }
        }
      }
    ])
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_owner_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_owner_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_member_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_member_user_name_OID"
        }
      }
    ])
    .populate("game_field_OID")
    .sort([["game_date", "ascending"]])
    .exec(function(err, games) {
      if (err) {
        res.status(500).json(err);
      } else {
        console.log("games", games);
        res.json(games);
      }
    });
};

exports.viewGamesByField = function(req, res) {
  var fieldOID = req.params.fieldOID;
  MsaGame.find({
    game_field_OID: fieldOID
  })
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_division_OID",
          populate: {
            path: "division_league_OID"
          }
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_division_OID",
          populate: {
            path: "division_league_OID"
          }
        }
      }
    ])
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_owner_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_owner_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_member_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_member_user_name_OID"
        }
      }
    ])
    .populate("game_field_OID")
    .sort([["game_date", "ascending"]])
    .exec(function(err, games) {
      if (err) {
        res.status(500).json(err);
      } else {
        console.log("games", games);
        res.json(games);
      }
    });
};

exports.viewGames = function(req, res) {
  //console.log(req.params._id);
  MsaGame.find({})
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_division_OID",
          populate: {
            path: "division_league_OID"
          }
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_division_OID",
          populate: {
            path: "division_league_OID"
          }
        }
      }
    ])
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_owner_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_owner_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_member_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_member_user_name_OID"
        }
      }
    ])
    .populate("game_field_OID")
    .sort([["game_date", "ascending"]])
    .exec(function(err, games) {
      if (err) {
        res.status(500).json(err);
      } else {
        console.log("games", games);
        res.json(games);
      }
    });
};

exports.viewGameByOID = function(req, res) {
  //console.log(req.params._id);
  MsaGame.findById(req.params._id)
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_division_OID",
          populate: {
            path: "division_league_OID"
          }
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_division_OID",
          populate: {
            path: "division_league_OID"
          }
        }
      }
    ])
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_owner_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_owner_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_home_team_OID",

        populate: {
          path: "team_member_user_name_OID"
        }
      }
    ])
    .populate([
      {
        path: "game_visitor_team_OID",

        populate: {
          path: "team_member_user_name_OID"
        }
      }
    ])
    .populate("game_field_OID")
    .exec(function(err, game) {
      console.log(game);
      res.json(game);
    });
};

/*exports.viewGameByOID = function(req, res) {
  //console.log(req.params._id);
  MsaGame.findById(req.params._id)
    .populate("game_home_team_OID")
    .populate("game_visitor_team_OID")
    .populate("game_field_OID")
    .exec(function(err, game) {
      console.log(game);
      res.json(game);
    });
};*/
