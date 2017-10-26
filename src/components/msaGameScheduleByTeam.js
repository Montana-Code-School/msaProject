import React, { Component } from "react";
export default class MsaGameScheduleByTeam extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = { gameList: [] };
  }

  componentDidMount() {
    fetch("/get/viewGamesByTeam/" + this.props.teamOID, {
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
    var teamProfileId = this.props.teamOID;
    return (
      <div>
        <h1>Team Schedule</h1>

        {this.state.gameList.map(function(game) {
          var teamToDisplay;

          if (teamProfileId === game.game_visitor_team_OID._id) {
            teamToDisplay = game.game_home_team_OID.team_name;
          } else if (teamProfileId === game.game_home_team_OID._id) {
            teamToDisplay = game.game_visitor_team_OID.team_name;
          } else {
            teamToDisplay = "error in code consult msaGameScheduleByTeam";
          }

          return (
            <div>
              <div key={game._id}>
                {game.game_date} {teamToDisplay} {game.game_field_OID}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
