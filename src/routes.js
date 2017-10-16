import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import "./pages/hub";
import "./components/msaTeamFind";
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={<hub />} />
        <Route path="/team" component={<msaTeam />} />
      </div>
    );
  }
}
