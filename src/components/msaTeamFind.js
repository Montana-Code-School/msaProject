import React, { Component } from "react";
export default class msaTeamFind extends Component {
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
        <p>Welcome to the Mad library</p>
        <button onClick={this.buttonClicked.bind(this)}>Submit</button>
      </div>
    );
  }
}
