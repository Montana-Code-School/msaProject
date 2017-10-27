var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MsaLeagueSchema = mongoose.Schema({
  //league_name: { type: String },
  league_name: {
    type: String,
    enum: ["Mens", "Womens", "CoRec", "Unassigned"],
    default: "Unassigned"
  },

  league_season: {
    type: String,
    enum: ["Spring", "Fall", "Unassigned"],
    default: "Unassigned"
  },
  league_game_day: {
    type: String,
    enum: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      ""
    ],
    default: ""
  },
  league_created_date: { type: Date, default: Date.now }
});

//Export the Model
module.exports = mongoose.model("MsaLeague", MsaLeagueSchema);
