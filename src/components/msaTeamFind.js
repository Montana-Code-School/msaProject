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
        <ul>
          {this.state.teamList.map(function(team) {
            return <li key={team._id}>{team.team_name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
//<h5>{this.state.team_list}</h5>

// got rid of buttons in render code saved & commented out down below

//<button onClick={this.buttonClicked.bind(this)}>Submit</button>

//<button onClick={this.buttonClicked.bind(this)}>List Teams</button>
