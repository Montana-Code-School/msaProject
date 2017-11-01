import React, { Component } from "react";
var moment = require("moment");
export default class MsaDivisionProfile extends Component {
  constructor(props) {
    super(props);
    //this.state = { division_name: "" };
    this.state = {
      division_name: "",
      _id: "",
      division_league_OID: "",
      division_created_date: ""
    };
  }

  componentDidMount() {
    fetch("/get/viewDivision/" + this.props.match.params._id, {
      method: "GET" //,
      //  headers: {
      //  _id: "59ea5bf2af93ae11af9c6eb9"
      //}
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(division => {
        console.log(division);
        // this.setState({ division_name: json.division_name });
        this.setState(division);
      });
  }

  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        <h1>Division Profile</h1>
        <div>Division: {this.state.division_name}</div>
        <div>League: {this.state.division_league_OID.league_name}</div>
        <div>Created on: {this.state.division_created_date}</div>
      </div>
    );
  }
}
