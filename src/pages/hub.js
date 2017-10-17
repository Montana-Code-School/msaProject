import React, { Component } from "react";
export default class Hub extends Component {
  render() {
    return (
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    );
  }
}
