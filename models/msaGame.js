var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MsaGameSchema = mongoose.Schema({
  game_home_team_OID: {
    type: Schema.ObjectId,
    ref: "MsaTeam"
  },
  game_visitor_team_OID: {
    type: Schema.ObjectId,
    ref: "MsaTeam"
  },
  game_date: {
    type: Date,
    required: true
  },
  game_field_OID: {
    type: Schema.ObjectId,
    ref: "MsaField"
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

MsaGameSchema.virtual("game_date_formatted").get(function() {
  return moment(this.game_date).format("MMMM Do, YYYY");
});
//Export the Model
module.exports = mongoose.model("MsaGame", MsaGameSchema);
