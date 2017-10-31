import React, { Component } from "react";
export default class MsaIndividualGame extends Component {
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

  //
  componentDidMount() {
    fetch("/get/viewGame/" + this.props.match.params._id, {
      method: "GET" //,
      //  headers: {
      //  _id: "59ea5bf2af93ae11af9c6eb9"
      //}
    })
      .then(response => {
        console.log("this is response", response);
        return response.json();
      })
      .then(game => {
        console.log("game is", game);
        // this.setState({ team_name: json.team_name });
        this.setState(game);
      });
  }

  render() {
    let gameHomeTeamOID = this.state.game_home_team_OID._id;
    let gameVisitorTeamOID = this.state.game_visitor_team_OID._id;
    let gameFieldOID = this.state.game_field_OID._id;

    console.log(
      "this is home path ",
      gameHomeTeamOID,
      "this is visitor path ",
      gameVisitorTeamOID,
      "this is field path",
      gameFieldOID
    );

    return (
      <div>
        <h1>Game Profile</h1>
        <div>
          Teams: {this.state.game_home_team_OID.team_name} &ensp; vs &ensp;
          {this.state.game_visitor_team_OID.team_name}
        </div>
        <div>
          Home Score: {this.state.game_home_team_score}, Visitor Score:
          {this.state.game_visitor_team_score}
        </div>
        <div>
          Field: {this.state.game_field_OID.field_complex_name}&ensp;
          {this.state.game_field_OID.field_name}
        </div>
        <div>Date: {this.state.game_date}</div>

        <div>Created on: {this.state.game_created_date}</div>
      </div>
    );
  }
}

/*let gameHomeTeamUrl = ("http://localhost:3000/viewTeam/" + gameHomeTeamOID);
let game VisitorTeamUrl = ("http://localhost:3000/viewTeam/" + gameVisitorTeamOID);
let gameFieldUrl = ("http://localhost:3000/viewField/" + gameFieldOID);*/
