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
  team_owner_user_name_OID: [
    {
      type: String
    }
  ],
  team_member_user_name_OID: [
    {
      type: String
    }
  ]
});

// Virtual for the user profile - using the oid
MsaTeamSchema.virtual("msaTeamOID").get(function() {
  return this._id;
});

//Virtual for the absolute url to get an instance of
//the MsaTeamSchema model -- use the prop in templates
//when linking to a specific username
MsaTeamSchema.virtual("url").get(function() {
  return "/msa/" + this._id;
});

//Export the Model
module.exports = mongoose.model("MsaTeam", MsaTeamSchema);
