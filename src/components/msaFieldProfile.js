import MsaViewFields from "./msaViewFields";

import React, { Component } from "react";
export default class MsaFieldProfile extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = {
      field_complex_name: "",
      field_name: "",
      field_created_date: ""
    };
  }

  componentDidMount() {
    fetch("/get/fieldProfile/" + this.props.match.params._id, {
      method: "GET" //,
      //  headers: {
      //  _id: "59ea5bf2af93ae11af9c6eb9"
      //}
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(field => {
        console.log(field);
        // this.setState({ team_name: json.team_name });
        this.setState(field);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Field Profile</h1>
        <div>Field Complex: {this.state.field_complex_name}</div>
        <div>Field Name: {this.state.field_name}</div>
      </div>
    );
  }
}
