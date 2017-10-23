var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");

exports.createUser = function(req, res) {
  console.log(req.body);
  var userPassword = req.body.userPassword,
    userEmail = req.body.userEmail,
    userFirstName = req.body.userFirstName,
    userLastName = req.body.userLastName,
    userPrivilege = req.body.userPrivilege;

  msaUserDetails = {
    user_password: userPassword,
    user_email: userEmail,
    user_first_name: userFirstName,
    user_last_name: userLastName,
    user_privilege: userPrivilege
  };

  let msaUser = new MsaUser(msaUserDetails);

  msaUser.save(function(err) {
    if (err) {
      console.log(err);
      //
      res.json({ success: false });
    } else {
      console.log("User saved successfully");
      res.json({ success: true });
    }
  });
};

/*
exports.createUser = function(req, res) {
  //construct the main create user function
  console.log(req.body);
  //function msaUserCreate()

  MsaUser.create(req.body, function(err) {
    if (err) {
      console.log(err);
      res.json({ success: false });
    } else {
      console.log("Team saved successfully");
      res.json({ success: true });
    }
  });
};
*/
//exports.deleteUser
