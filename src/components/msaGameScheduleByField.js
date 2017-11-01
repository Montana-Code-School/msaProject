import React, { Component } from "react";
var moment = require("moment");
export default class MsaGameScheduleByField extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = { gameList: [] };
  }

  componentDidMount() {
    console.log(this.props.fieldOID);
    fetch("/get/viewGamesByField/" + this.props.fieldOID, {
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
    var fieldProfileId = this.props.fieldOID;
    console.log(fieldProfileId);
    return (
      <div>
        <h1>SCHEDULE</h1>

        {this.state.gameList.map(function(game) {
          let gameDateFormatted = moment(game.game_date).format("MM-DD-YY");
          let gameTimeFormatted = moment(game.game_date).format("HH:MM");
          let gameProfileUrl = "/viewGame/" + game._id;
          console.log("utc unformatted = ", game.game_date);
          console.log("utc formatted = ", gameDateFormatted);

          return (
            <div>
              <div>
                <a href={gameProfileUrl} key={game._id}>
                  {gameDateFormatted}&ensp; {gameTimeFormatted}
                  &ensp;
                  {game.game_visitor_team_OID.team_name}
                  &ensp; vs &ensp;
                  {game.game_home_team_OID.team_name}
                  &ensp;
                  {game.game_field_OID.field_complex_name}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
