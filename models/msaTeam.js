var mongoose = require("mongoose");
var msaUserSchema = require("./msaUser.js").userSchema;
var Schema = mongoose.Schema;

var MsaTeamSchema = mongoose.Schema({
  team_name: {
    type: String,
    required: true
  },

  // TODO League will be changed to league Schema
  team_league_OID: {
    type: String,
    required: true,
    //    enum: ["Mens", "Womens", "CoRec", "Unassigned"],
    default: "Unassigned"
  },
  team_created_date: {
    type: Date,
    default: Date.now
  },
  team_owner_user_name_OID: {
    type: msaUserSchema,
    default:
  team_member_user_name_OID: [msaUserSchema]
});

//Export the Model
module.exports = mongoose.model("MsaTeam", MsaTeamSchema);
