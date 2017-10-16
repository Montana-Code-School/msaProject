var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MsaUserSchema = mongoose.Schema({
  user_name: { type: String, required: true },
  user_password: { type: String, required: true },
  user_first_name: { type: String, required: true },
  user_last_name: { type: String, required: true },
  user_privilege: {
    type: String,
    required: true,
    enum: ["MsaAdminPriv", "MsaPublisherPriv", "MsaUserPriv"],
    default: "MsaUserPriv"
  },
  user_created_date: { type: Date, default: Date.now },
  user_team_name_OID: [{ type: Schema.ObjectId, ref: "MsaTeam" }]
});

// Virtual for the user profile - using the perm id
MsaUserSchema.virtual("msaUserOID").get(function() {
  return this._id;
});

//Virtual for the absolute url to get an instance of
//the MsaUserSchema model -- use the prop in templates
//when linking to a specific username
MsaUserSchema.virtual("url").get(function() {
  return "/msa/" + this._id;
});

//Export the Model
module.exports = mongoose.model("MsaUser", MsaUserSchema);
