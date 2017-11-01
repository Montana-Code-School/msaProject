import React, { Component } from "react";
var moment = require("moment");
export default class MsaGameScheduleByDate extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = { gameList: [] };
  }

  componentDidMount() {
    fetch("/get/viewGamesByDate/" + this.props.gameDate, {
      method: "GET"
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(gameList => {
        console.log(gameList);
        //this.setState({ game_name: json.game_name });
        this.setState({ gameList: gameList });
      });
  }

  render() {
    var gameDateStr = this.props.gameDate;
    console.log(gameDateStr);
    return (
      <div>
        <h1>SCHEDULE</h1>

        {this.state.gameList.map(function(game) {
          let gameDateFormatted = moment(game.game_date).format("MM-DD-YY");
          let gameTimeFormatted = moment(game.game_date).format("HH:MM");
          let gameOID = game._id;

          //let gameProfileUrl = "/viewGamesByDate/" + gameDateStr;

          console.log("utc unformatted = ", gameDateFormatted);

          return (
            <div>
              {gameDateFormatted}&ensp;
              {gameTimeFormatted}&ensp;
              {game.game_visitor_team_OID.team_name}
              &ensp; vs &ensp;
              {game.game_home_team_OID.team_name}&ensp;
              {game.game_field_OID.field_complex_name}
            </div>
          );
        })}
      </div>
    );
  }
}

/*{game.game_visitor_team_OID.team_name}
&ensp; vs &ensp;
{game.game_home_team_OID.team_name}
&ensp;
{game.game_field_OID.field_complex_name}*/
