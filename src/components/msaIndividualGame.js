import React, { Component } from "react";
import "../pages/gameProfile.css";
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
    var gameLink = "Score";
    return (
      <div>
        <h1>Game Profile</h1>
        <table id="GameProfile">
          <tr>
            <th>Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Field</th>
            <th>Result</th>
          </tr>
          <tr>
            <td>
              {moment(this.state.game_date).format("MM-DD-YY")}&ensp;{moment(this.state.game_date).format("HH:MM")}
            </td>
            <td>
              {" "}
              <a href={"/viewTeam/" + this.state.game_home_team_OID._id}>
                {this.state.game_home_team_OID.team_name}
              </a>
            </td>
            <td>
              <a href={"/viewTeam/" + this.state.game_visitor_team_OID._id}>
                {this.state.game_visitor_team_OID.team_name}
              </a>
            </td>
            <td>
              {" "}
              <a href={"/fieldProfile/" + this.state.game_field_OID._id}>
                {" "}
                {this.state.game_field_OID.field_complex_name}&ensp;
                {this.state.game_field_OID.field_name}
              </a>
            </td>
            <td>
              Home:{this.state.game_home_team_score} Away:{this.state.game_visitor_team_score}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

/*var gameHomeTeamUrl = "/viewTeam/" + this.state.game_home_team_OID._id;
var game VisitorTeamUrl = "/viewTeam/" + this.state.game_visitor_team_OID._id;
var gameFieldUrl = "/viewField/" + this.state.game_field_OID._id;

console.log(
  "this is home path ",
  gameHomeTeamUrl,
  "this is visitor path ",
  game VisitorTeamUrl,
  "this is field path",
  gameFieldUrl
);*/
