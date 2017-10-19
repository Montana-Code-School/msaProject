var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");

exports.team = function(req, res) {
  // construct the main create team function
  console.log(req.body);
  //function msaTeamCreate(
  var teamName = req.body.teamName,
    teamLeagueOID = req.body.teamLeagueOID,
    teamOwnerUsernameOID = req.body.teamOwnerUsernameOID,
    teamMemberUsernameOID = req.body.teamMemberUsernameOID;

  msaTeamDetails = {
    team_name: teamName,
    team_league_OID: teamLeagueOID
  };

  if (teamOwnerUsernameOID !== false)
    msaTeamDetails.team_owner_user_name_OID = teamOwnerUsernameOID;
  if (teamMemberUsernameOID !== false)
    msaTeamDetails.team_member_user_name_OID = teamMemberUsernameOID;

  let msaTeam = new MsaTeam(msaTeamDetails);

  msaTeam.save(function(err) {
    if (err) {
      console.log(err);
      res.json({ success: false });
    }
    console.log("Team saved successfully");
    res.json({ success: true });
  });
};

//msaTeamCreate("Nathan's Team", "Mens", false, false);
// create a sample team
// var team = new MsaTeam({
//   team_name: "gabe",
//   team_league_OID: "Womens",
//   team_member_user_name_OID: [
//     "jeff",
//     "session",
//     "donald",
//     "trump",
//     "gabe",
//     "gandhi"
//   ]
// });
// team.save(function(err) {
//   if (err) throw err;
//
//   console.log("Team saved successfully");
//   res.json({ success: true });
// });
//res.json({ responce: "hello" });
//}

// msa_user_controller.user
