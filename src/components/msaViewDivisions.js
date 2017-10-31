import React, { Component } from "react";
import "../pages/game.css";
export default class msaViewDivisions extends Component {
  constructor(props) {
    super(props);
    //this.state = { division_name: "" };
    this.state = { divisionList: [] };
  }

  componentDidMount() {
    fetch("/get/viewDivisions", {
      method: "GET" //,
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(divisionList => {
        console.log(divisionList);

        this.setState({ divisionList: divisionList });
      });
  }

  render() {
    // TODO on line 39 and 38 fix the key prop error
    console.log(this.props.location.pathname);
    return (
      <div className="DivisionList">
        <h1>Divisions List</h1>

        {this.state.divisionList.map(function(division) {
          return (
            <div>
              <a href={"viewDivision/" + division._id} key={division._id}>
                {division.division_league_OID.league_name}&ensp; &ensp;
                {division.division_name}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
//  {this.state.divisionList.map(function(division) {
//     return <h5 key={division._id}>{division.division_name}</h5>;
//   })}
// href="http://localhost/viewTeam/" + division._id
