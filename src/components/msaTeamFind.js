import React, { Component } from "react";
export default class MsaTeamFind extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = { teamList: [] };
  }

  componentDidMount() {
    fetch("/viewTeams", {
      method: "GET" //,
      //  headers: {
      //  _id: "59ea5bf2af93ae11af9c6eb9"
      //}
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
    console.log(this.props.location.pathname);
    return (
      <div>
        <h1>Missoula Softball Team List</h1>

        {this.state.teamList.map(function(team) {
          return <h5 key={team._id}>{team.team_name}</h5>;
        })}
      </div>
    );
  }
}
//h5 key={team._id}>{team.team_name}</h5
