//displays our home page with a drop down button

import React, { Component } from "react";
export default class Hub extends Component {
  render() {
    return (
      <select>
        <option value="Mens">Mens</option>
        <option value="Womens">Womens</option>
        <option value="CoRec">CoRec</option>
        <option value="Unassigned">Unassigned</option>
      </select>
    );
  }
}
