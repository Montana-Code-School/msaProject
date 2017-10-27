var MsaUser = require("../models/msaUser");
var MsaTeam = require("../models/msaTeam");
var MsaGame = require("../models/msaGame");
var MsaField = require("../models/msaField");
var MsaDivision = require("../models/msaDivision");
var MsaLeague = require("../models/msaLeague");

exports.createField = function(req, res) {
  // construct the main create field function
  console.log(req.body);
  //function msaFieldCreate(

  MsaField.create(req.body, function(err) {
    if (err) {
      //console.log(err);
      res.json({ success: false });
    } else {
      console.log("Field saved successfully");
      res.json({ success: true });
    }
  });
};

exports.deleteField = function(req, res) {
  MsaField.remove({ _id: req.body._id }, function(err, result) {
    res.json(result);
  });
};

// TODO add edit field
// exports.editField = function(req, res) {
//   console.log(req.body);
//   if (req.body.imLazy) {
//     req.body.field_member_user_name_OID = req.body.field_member_user_name_OID[0].split(
//       " "
//     );
//   }
//   MsaField.findOneAndUpdate({ _id: req.body._id }, req.body, function(
//     err,
//     field
//   ) {
//     console.log(field);
//     res.json(field);
//   });
// };

////// KAT
////// I updated you code to reflect the proper syntac.
///// I removed the field names from the find on line 54
////I chained another sort and removed
///the multiple arrays from the initial sort


exports.viewFields = function(req, res) {
  //console.log(req.params._id);
  MsaField.find({})
    .sort([["field_complex_name", "ascending"])
    .sort([["field_name", "ascending"])
    .exec(function(err, fields) {
      console.log(fields);
      res.json(fields);
    });
};

exports.viewField = function(req, res) {
  console.log(req.params._id);
  MsaField.findById(req.params._id, function(err, field) {
    console.log(field);
    res.json(field);
  });
};
