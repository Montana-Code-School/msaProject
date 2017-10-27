import React, { Component } from "react";
import "../pages/game.css";
export default class msaViewGames extends Component {
  constructor(props) {
    super(props);
    //this.state = { game_name: "" };
    this.state = { gameList: [] };
  }

  componentDidMount() {
    fetch("/get/viewGames", {
      method: "GET" //,
      //  headers: {
      //  _id: "59ea5bf2af93ae11af9c6eb9"
      //}
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(gameList => {
        console.log(gameList);
        // this.setState({ game_name: json.game_name });
        this.setState({ gameList: gameList });
      });
  }

  render() {
    // TODO on line 39 and 38 fix the key prop error
    console.log(this.props.location.pathname);
    return (
      <div>
        <h1>Games List</h1>

        {this.state.gameList.map(function(game) {
          return (
            <div>
              <a
                href={"http://localhost:3000/viewGame/" + game._id}
                key={game._id}
              >
                {game.game_id} {game.game_date}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
//  {this.state.gameList.map(function(game) {
//     return <h5 key={game._id}>{game.game_name}</h5>;
//   })}
// href="http://localhost/viewTeam/" + game._id
