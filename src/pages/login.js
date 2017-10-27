import React, { Component } from "react";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  changeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  buttonClicked() {
    fetch("/teamCreate", {
      method: "POST",
      body: JSON.stringify({
        team_name: this.state.name,
        team_password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(result => result.json())
      .then(json => alert("Thank you for creating a team."));
  }

  render() {
    return (
      <div className="Login">
        <div>
          We apologize put this site is still in development and is currently
          unavailable
        </div>
      </div>
    );
  }
}
// <p>Welcome to sign in</p>
//
// <div>First name:</div>
// <input type="text" onChange={this.changeName.bind(this)} />
//
// <div>Password:</div>
// <input type="password" onChange={this.changePassword.bind(this)} />
// <div>
//   <button onClick={this.buttonClicked.bind(this)}>Submit</button>
// </div>
