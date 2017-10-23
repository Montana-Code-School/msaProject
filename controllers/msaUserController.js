var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");

exports.createUser = function(req, res) {
  //construct the main create user function
  console.log(req.body);

  MsaUser.create(req.body, function(err) {
    if (err) {
      //console.log(err);
      res.json({ success: false });
    } else {
      console.log("Team saved successfully");
      res.json({ success: true });
    }
  });
};

exports.deleteUser = function(req, res) {
  MsaUser.remove({ _id: req.body._id }, function(err, result) {
    res.json(result);
  });
};

exports.editUser = function(req, res) {
  console.log(req.body);

  MsaUser.findOneAndUpdate({ _id: req.body._id }, req.body, function(
    err,
    user
  ) {
    console.log(user);
    res.json(user);
  });
};

exports.viewUsers = function(req, res) {
  //console.log(req.params._id);
  MsaUser.find({}, "user_first_name")
    .sort([["user_first_name", "ascending"]]) //TODO why is this order strange
    .exec(function(err, users) {
      console.log(users);
      res.json(users);
    });
};

exports.viewUser = function(req, res) {
  console.log(req.params._id);
  MsaUser.findById(req.params._id, function(err, user) {
    console.log(user);
    res.json(user);
  });
};
