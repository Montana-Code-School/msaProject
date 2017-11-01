import React, { Component } from "react";
var moment = require("moment");
export default class MsaLeagueProfile extends Component {
  constructor(props) {
    super(props);
    //this.state = { league_name: "" };
    this.state = {
      league_name: "",
      _id: "",
      league_season: "",
      league_game_day: ""
    };
  }

  componentDidMount() {
    fetch("/get/viewLeague/" + this.props.match.params._id, {
      method: "GET" //,
      //  headers: {
      //  _id: "59ea5bf2af93ae11af9c6eb9"
      //}
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(league => {
        console.log(league);
        // this.setState({ league_name: json.league_name });
        this.setState(league);
      });
  }
  /*league_season: "",
league_game_day: ""*/
  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        <h1>League Profile</h1>
        <div>League Name: {this.state.league_name}</div>
        <div>League Season: {this.state.league_season}</div>
        <div>Games Played on: {this.state.league_game_day}</div>
        <div>Created on: {this.state.league_created_date}</div>
      </div>
    );
  }
}
