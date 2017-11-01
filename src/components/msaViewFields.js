import React, { Component } from "react";
import "../pages/game.css";
var moment = require("moment");

export default class MsaViewFields extends Component {
  constructor(props) {
    super(props);
    //this.state = { field_name: "" };
    this.state = { fieldList: [] };
  }

  componentDidMount() {
    fetch("/get/viewFields", {
      method: "GET"
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(fieldList => {
        console.log(fieldList);
        // this.setState({ field_name: json.field_name });
        this.setState({ fieldList: fieldList });
      });
  }

  render() {
    // TODO on line 39 and 38 fix the key prop error
    console.log(this.props.location.pathname);
    console.log(this.state.fieldList);
    return (
      <div>
        <h1>MSA Softball Fields</h1>

        {this.state.fieldList.map(function(field) {
          console.log(field);
          return (
            <div>
              <a href={"/fieldProfile/" + field._id} key={field._id}>
                {field.field_complex_name} {field.field_name}
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
