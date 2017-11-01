import MsaViewFields from "./msaViewFields";
import MsaGameScheduleByField from "./msaGameScheduleByField";
import React, { Component } from "react";
var moment = require("moment");
export default class MsaFieldProfile extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = {
      _id: "",
      field_complex_name: "",
      field_name: "",
      field_created_date: ""
    };
  }

  componentDidMount() {
    var fieldProfileOID = this.props.match.params._id;
    console.log(fieldProfileOID);
    fetch("/get/fieldProfile/" + this.props.match.params._id, {
      method: "GET"
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(field => {
        console.log(field);

        this.setState(field);
      });
  }

  render() {
    console.log(this.props.match.params);
    console.log(this.props.match.params._id);
    return (
      <div>
        <h1>Field Profile</h1>
        <div>Field Complex: {this.state.field_complex_name}</div>
        <div>Field Name: {this.state.field_name}</div>
        <MsaGameScheduleByField fieldOID={this.props.match.params._id} />
      </div>
    );
  }
}
