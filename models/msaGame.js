var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MsaGameSchema = mongoose.Schema({
  game_home_team_OID: {
    type: String,
    required: true
  },
  game_visitor_team_OID: {
    type: String,
    required: true
  },
  game_date: {
    type: Date,
    required: true
  },
  game_field_OID: {
    type: String,
    required: true
  },
  game_created_date: {
    type: Date,
    default: Date.now
  },
  game_home_team_score: {
    type: Number
  },
  game_visitor_team_score: {
    type: Number
  }
});

//Export the Model
module.exports = mongoose.model("MsaGame", MsaGameSchema);
