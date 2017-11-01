import React, { Component } from "react";
import MsaGameScheduleByTeam from "./msaGameScheduleByTeam";
var moment = require("moment");
export default class MsaTeamProfile extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = {
      team_name: "",
      _id: "",
      team_division_OID: {
        division_league_OID: {}
      },
      team_owner_user_name_OID: "",
      team_member_user_name_OID: [],
      team_created_date: ""
    };
  }

  componentDidMount() {
    fetch("/get/viewTeam/" + this.props.match.params._id, {
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
    let leagueNameStr = this.state.team_division_OID.division_league_OID
      .league_name;

    console.log(leagueNameStr);

    return (
      <div>
        <h1>
          <div>{this.state.team_name}</div>
        </h1>

        <div>
          Division: {leagueNameStr} &ensp;
          {this.state.team_division_OID.division_name}
        </div>
        <div>
          Captain: {this.state.team_owner_user_name_OID.user_first_name}&ensp;
          {this.state.team_owner_user_name_OID.user_last_name}
        </div>
        <div>
          Roster:{" "}
          {this.state.team_member_user_name_OID.map(function(teamMember) {
            return (
              <p key={teamMember._id}>
                {teamMember.user_first_name} {teamMember.user_last_name}
              </p>
            );
          })}
        </div>
        <MsaGameScheduleByTeam teamOID={this.props.match.params._id} />
      </div>
    );
  }
}
