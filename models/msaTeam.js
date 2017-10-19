var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MsaTeamSchema = mongoose.Schema({
  team_name: {
    type: String,
    required: true
  },
  team_league_OID: {
    type: String,
    required: true,
    enum: ["Mens", "Womens", "CoRec", "Unassigned"],
    default: "Unassigned"
  },
  team_created_date: {
    type: Date,
    default: Date.now
  },
  team_owner_user_name_OID: {
    type: Schema.ObjectId,
    ref: "MsaUser"
  },
  team_member_user_name_OID: [
    {
      type: String
    }
  ]
});

//Export the Model
module.exports = mongoose.model("MsaTeam", MsaTeamSchema);
