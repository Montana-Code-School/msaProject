import React, { Component } from "react";
var moment = require("moment");
export default class MsaViewGameDates extends Component {
  constructor(props) {
    super(props);
    //this.state = { team_name: "" };
    this.state = { gameDateList: [] };
  }

  componentDidMount() {
    fetch("/get/viewGames", {
      method: "GET"
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(gameDateList => {
        console.log(gameDateList);
        // this.setState({ team_name: json.team_name });
        this.setState({ gameDateList: gameDateList });
      });
  }

  render() {
    // TODO on line 39 and 38 fix the key prop error
    console.log(this.props.location.pathname);
    let uniqueGameDates = [];
    return (
      <div>
        <h1>Game Dates</h1>

        {this.state.gameDateList.map(function(game) {
          let gameDateFormatted = moment(game.game_date).format("MM-DD-YY");
          let viewGamesByDateUrl = "/viewGamesByDate/" + gameDateFormatted;

          function searchStringInArray(str, strArray) {
            for (var j = 0; j < strArray.length; j++) {
              if (strArray[j].match(str)) return j;
            }
            return -1;
          }

          let gameDateInList = searchStringInArray(
            gameDateFormatted,
            uniqueGameDates
          );

          var uniqueGameDateFormatted;

          if (gameDateInList === -1) {
            console.log("Added gameDateFormatted - ", gameDateFormatted);
            uniqueGameDateFormatted = gameDateFormatted;
            uniqueGameDates.push(gameDateFormatted);
          } else if (gameDateInList !== -1) {
            console.log("Multiple games on ", gameDateFormatted);
          } else {
            console.log("You got 99 problems");
          }

          console.log(searchStringInArray(gameDateFormatted, uniqueGameDates));

          console.log(gameDateFormatted, viewGamesByDateUrl, uniqueGameDates);

          return (
            <div>
              <a href={viewGamesByDateUrl} key={uniqueGameDateFormatted}>
                {uniqueGameDateFormatted}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

/*{this.state.gameDateList.map(function(game) {
  let gameDateFormatted = moment(game.game_date).format("MM-DD-YY");
  let viewGamesByDateUrl = "/viewGamesByDate/" + gameDateFormatted;

  function searchStringInArray(str, strArray) {
    for (var j = 0; j < strArray.length; j++) {
      if (strArray[j].match(str)) return j;
    }
    return -1;
  }

  let gameDateInList = searchStringInArray(
    gameDateFormatted,
    uniqueGameDates
  );

  if (gameDateInList === -1) {
    console.log("Added gameDateFormatted - ", gameDateFormatted);
    uniqueGameDates.push(gameDateFormatted);
  } else if (gameDateInList !== -1) {
    console.log("Multiple games on ", gameDateFormatted);
  }

  console.log(searchStringInArray(gameDateFormatted, uniqueGameDates));

  console.log(gameDateFormatted, viewGamesByDateUrl, uniqueGameDates);
  return (
    <div>
      <a key={gameDateFormatted}>{gameDateFormatted}</a>
    </div>
  );
})}*/
