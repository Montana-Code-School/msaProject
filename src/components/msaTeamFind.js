import React, { Component } from "react";
import "../pages/teams.css";
export default class MsaTeamFind extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = { teamList: [] };
  }

  componentDidMount() {
    fetch("/get/viewTeams", {
      method: "GET"
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(teamList => {
        console.log(teamList);
        // this.setState({ team_name: json.team_name });
        this.setState({ teamList: teamList });
      });
  }

  render() {
    // TODO on line 39 and 38 fix the key prop error
    console.log(this.props.location.pathname);
    return (
      <div>
        <h1>Teams</h1>

        {this.state.teamList.map(function(team) {
          return (
            <div id="Teams">
              <a href={"/viewTeam/" + team._id} key={team._id}>
                {team.team_name}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
//  {this.state.teamList.map(function(team) {
//     return <h5 key={team._id}>{team.team_name}</h5>;
//   })}
// href="http://localhost/viewTeam/" + team._id
