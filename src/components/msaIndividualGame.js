import React, { Component } from "react";
var moment = require("moment");
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
    return (
      <div>
        <h1>Game Profile</h1>
        <div>
          <a
            href={
              "http://localhost:3000/viewTeam/" +
              this.state.game_home_team_OID._id
            }
          >
            {this.state.game_home_team_OID.team_name}
          </a>
          &ensp; &ensp;
          {this.state.game_home_team_score}
        </div>
        <div>
          <a
            href={
              "http://localhost:3000/viewTeam/" +
              this.state.game_visitor_team_OID._id
            }
          >
            {this.state.game_visitor_team_OID.team_name}
          </a>
          &ensp; &ensp;
          {this.state.game_visitor_team_score}
        </div>
        <div>
          <a
            href={
              "http://localhost:3000/fieldProfile/" +
              this.state.game_field_OID._id
            }
          >
            {" "}
            {this.state.game_field_OID.field_complex_name}&ensp;
            {this.state.game_field_OID.field_name}
          </a>
        </div>
        <div>
          {moment(this.state.game_date).format("MM-DD-YY")}&ensp;{moment(this.state.game_date).format("HH:MM")}
        </div>
      </div>
    );
  }
}

/*var gameHomeTeamUrl = "http://localhost:3000/viewTeam/" + this.state.game_home_team_OID._id;
var game VisitorTeamUrl = "http://localhost:3000/viewTeam/" + this.state.game_visitor_team_OID._id;
var gameFieldUrl = "http://localhost:3000/viewField/" + this.state.game_field_OID._id;

console.log(
  "this is home path ",
  gameHomeTeamUrl,
  "this is visitor path ",
  game VisitorTeamUrl,
  "this is field path",
  gameFieldUrl
);*/
