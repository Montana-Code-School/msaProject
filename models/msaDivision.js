var mongoose = require("mongoose");
//var msaUserSchema = require("./msaUser.js").userSchema;
var Schema = mongoose.Schema;

var MsaDivisionSchema = mongoose.Schema({
  division_name: {
    type: String,
    enum: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "E 1",
      "E 2",
      "Over 45",
      "Red",
      "White",
      "Blue",
      ""
    ],
    default: ""
  },

  ///////// TODO NEED TO CHANGE TO DIVISION IN MSA TEAMS

  division_league_OID: {
    type: Schema.Types.ObjectId,
    ref: "MsaLeague"
  },
  division_created_date: {
    type: Date,
    default: Date.now
  }
});

//Export the Model
module.exports = mongoose.model("MsaDivision", MsaDivisionSchema);
