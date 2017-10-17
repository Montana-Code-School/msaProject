import React, { Component } from "react";
export default class MsaTeamFind extends Component {
  buttonClicked() {
    fetch("/team", {
      method: "GET",
      headers: {
        _id: "59e51a382c78420c0f38d83f"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }

  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        <h1>Welcome to the Mad library</h1>
        <button onClick={this.buttonClicked.bind(this)}>Submit</button>
      </div>
    );
  }
}
//<button onClick={this.buttonClicked.bind(this)}>Submit</button>
