var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MsaGameSchema = mongoose.Schema({
  home_team_OID: {
    type: String,
    required: true
  },
  visitor_team_OID: {
    type: String,
    required: true
  },
  game_date: {
    type: Date
  },
  game_field_OID: {
    type: String,
    required: true
  },
  game_created_date: {
    type: Date,
    default: Date.now
  }
});

//Export the Model
module.exports = mongoose.model("MsaTeam", MsaTeamSchema);
