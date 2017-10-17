import React, { Component } from "react";
export default class MsaTeamFind extends Component {
  constructor(props) {
    super(props);
    this.state = { team_name: "" };
  }

  buttonClicked() {
    fetch("/team", {
      method: "GET",
      headers: {
        _id: "59e64141c945781836e1ffcd"
      }
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({ team_name: json[0].team_name });
      });
  }

  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        <h1>Welcome to the Mad library</h1>
        <button onClick={this.buttonClicked.bind(this)}>Find team</button>
        <h5>{this.state.team_name}</h5>
      </div>
    );
  }
}
//<button onClick={this.buttonClicked.bind(this)}>Submit</button>
