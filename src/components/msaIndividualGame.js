import React, { Component } from "react";
export default class MsaGameScheduleByTeam extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = {
      game_home_team_OID: "",
      game_visitor_team_OID: "",
      game_date: "",
      game_field_OID: "",
      game_home_team_score: "",
      game_visitor_team_score: ""
    };
  }

  componentDidMount() {
    fetch("/get/viewGame/" + this.props.match.params._id, {
      method: "GET" //,
      //  headers: {
      //  _id: "59ea5bf2af93ae11af9c6eb9"
      //}
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(game => {
        console.log(game);
        // this.setState({ team_name: json.team_name });
        this.setState(game);
      });
  }

  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        <h1>Team Profile</h1>
        <div>
          Teams: {this.state.game_home_team_OID} vs{" "}
          {this.state.game_visitor_team_OID}
        </div>
        <div>
          Home Score: {this.state.game_home_team_score}, Visitor Score:
          {this.state.game_visitor_team_score}
        </div>
        <div>Field: {this.state.game_field_OID}</div>
        <div>Date: {this.state.game_date}</div>

        <div>Created on: {this.state.game_created_date}</div>
      </div>
    );
  }
}
