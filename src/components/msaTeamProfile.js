import React, { Component } from "react";
export default class MsaTeamFind extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = {
      team_name: "",
      _id: "",
      team_league_OID: "",
      team_owner_user_name_OID: "",
      team_member_user_name_OID: [],
      team_created_date: ""
    };
  }

  componentDidMount() {
    fetch("/viewTeam/" + this.props.match.params._id, {
      method: "GET" //,
      //  headers: {
      //  _id: "59ea5bf2af93ae11af9c6eb9"
      //}
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(team => {
        console.log(team);
        // this.setState({ team_name: json.team_name });
        this.setState(team);
      });
  }

  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        <h1>Team Profile</h1>
        <div>Team: {this.state.team_name}</div>
        <div>League: {this.state.team_league_OID}</div>
        <div>Created by: {this.state.team_owner_user_name_OID}</div>
        <div>
          Team Members:{" "}
          {this.state.team_member_user_name_OID.map(function(teamMember) {
            return <p>{teamMember}</p>;
          })}
        </div>

        <div>Created on: {this.state.team_created_date}</div>
      </div>
    );
  }
}
