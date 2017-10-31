import React, { Component } from "react";
import "../pages/game.css";
var moment = require("moment");
export default class msaViewGames extends Component {
  constructor(props) {
    super(props);
    //this.state = { game_name: "" };
    this.state = { gameList: [] };
  }

  componentDidMount() {
    fetch("/get/viewGames", {
      method: "GET" //,
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(gameList => {
        console.log(gameList);

        this.setState({ gameList: gameList });
      });
  }

  render() {
    // TODO on line 39 and 38 fix the key prop error
    console.log(this.props.location.pathname);
    return (
      <div>
        <h1>SCHEDULE</h1>

        {this.state.gameList.map(function(game) {
          var gameLink = "vs";
          return (
            <div>
              <a
                href={"http://localhost:3000/viewGame/" + game._id}
                key={game._id}
              >
                {moment(game.game_date).format("MM-DD-YY")}
                &ensp;
                {moment(game.game_date).format("HH:MM")}
              </a>
              &ensp;
              <a
                href={
                  "http://localhost:3000/viewTeam/" +
                  game.game_visitor_team_OID._id
                }
              >
                {game.game_visitor_team_OID.team_name}
              </a>
              &ensp;{" "}
              <a href={"http://localhost:3000/viewGame/" + game._id}>
                {gameLink}
              </a>{" "}
              &ensp;
              <a
                href={
                  "http://localhost:3000/viewTeam/" +
                  game.game_home_team_OID._id
                }
              >
                {game.game_home_team_OID.team_name}
              </a>&ensp;&ensp;
              <a
                href={
                  "http://localhost:3000/fieldProfile/" +
                  game.game_field_OID._id
                }
              >
                {game.game_field_OID.field_complex_name}&ensp;
                {game.game_field_OID.field_name}
              </a>{" "}
              &ensp;
            </div>
          );
        })}
      </div>
    );
  }
}
//  {this.state.gameList.map(function(game) {
//     return <h5 key={game._id}>{game.game_name}</h5>;
//   })}
// href="http://localhost/viewTeam/" + game._id
