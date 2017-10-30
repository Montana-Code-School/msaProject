import React, { Component } from "react";
import "../pages/game.css";
export default class msaViewFields extends Component {
  constructor(props) {
    super(props);
    //this.state = { field_name: "" };
    this.state = { fieldList: [] };
  }

  componentDidMount() {
    fetch("/get/viewFields", {
      method: "GET" //,
      //  headers: {
      //  _id: "59ea5bf2af93ae11af9c6eb9"
      //}
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
    return (
      <div className="FieldList">
        <h1>Fields List</h1>

        {this.state.fieldList.map(function(field) {
          return (
            <div>
              <a
                href={"http://localhost:3000/viewFields/" + field._id}
                key={field._id}
              >
                {field.field_id} {field.field_date}
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
