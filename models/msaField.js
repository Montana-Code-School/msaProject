var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Schema props
var MsaFieldSchema = mongoose.Schema({
  field_complex_name: {
    type: String,
    enum: ["McCormick", "NorthSide", "Fort Missoula", "Unassigned"],
    default: "Unassigned"
  },
  field_name: {
    type: String,
    enum: ["1", "2", "3", "4", "5", "6", "", "Unassigned"],
    default: "Unassigned"
  },
  field_created_date: {
    type: Date,
    default: Date.now
  }
});

//Export the Model
module.exports = mongoose.model("MsaField", MsaFieldSchema);
