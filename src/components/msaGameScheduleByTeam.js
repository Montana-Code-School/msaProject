import React, { Component } from "react";
export default class MsaGameScheduleByTeam extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = { gameList: [] };
  }

  componentDidMount() {
    fetch("/get/viewGamesByTeam", {
      method: "GET"
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(gameList => {
        console.log(gameList);
        // this.setState({ game_name: json.game_name });
        this.setState({ gameList: gameList });
      });
  }

  render() {
    return (
      <div>
        <h1>Team Schedule</h1>

        {this.state.gameList.map(function(game) {
          return <div key={game._id}>{game._id}</div>;
        })}
      </div>
    );
  }
}
