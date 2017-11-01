import React, { Component } from "react";

import MsaGameScheduleByDate from "./msaGameScheduleByDate";

var moment = require("moment");
export default class MsaViewGamesByDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game_home_team_OID: {
        team_division_OID: {
          division_league_OID: {}
        }
      },
      game_visitor_team_OID: {
        team_division_OID: {
          division_league_OID: {}
        }
      },
      game_date: "",
      game_field_OID: {},
      game_created_date: "",
      game_home_team_score: 0,
      game_visitor_team_score: 0
    };
  }

  componentDidMount() {
    var gameDateFormatted = this.props.match.params.gameDate;
    var mf = moment(gameDateFormatted, "MM-DD-YY Z");
    console.log(this.props.match.params);
    console.log(this.props.match.params.gameDate);
    console.log(mf._d);

    fetch("/get/viewGames", {
      method: "GET"
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(game => {
        console.log(game);

        this.setState(game);
      });
  }

  render() {
    console.log(this.props.match.params.gameDate);
    var wtfGameDate = this.props.match.params.gameDate;
    return (
      <div>
        <h1>{wtfGameDate}</h1>

        <MsaGameScheduleByDate gameDate={this.props.match.params.gameDate} />
      </div>
    );
  }
}
