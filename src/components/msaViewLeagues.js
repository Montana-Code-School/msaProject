import React, { Component } from "react";
export default class MsaViewLeagues extends Component {
  constructor(props) {
    super(props);
    //this.state = { league_name: "" };
    this.state = { leagueList: [] };
  }

  componentDidMount() {
    fetch("/get/viewLeagues", {
      method: "GET" //,
      //  headers: {
      //  _id: "59ea5bf2af93ae11af9c6eb9"
      //}
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(leagueList => {
        console.log(leagueList);
        // this.setState({ league_name: json.league_name });
        this.setState({ leagueList: leagueList });
      });
  }

  render() {
    // TODO on line 39 and 38 fix the key prop error
    console.log(this.props.location.pathname);
    return (
      <div>
        <h1>Missoula Softball League List</h1>

        {this.state.leagueList.map(function(league) {
          return (
            <div>
              <a href={"/viewLeague/" + league._id} key={league._id}>
                {league.league_name} &ensp; &ensp;{league.league_season} &ensp;
                &ensp;{league.league_game_day}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
//  {this.state.leagueList.map(function(league) {
//     return <h5 key={league._id}>{league.league_name}</h5>;
//   })}
// href="http://localhost/viewLeague/" + league._id
