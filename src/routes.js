import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import Hub from "./pages/hub";
import MsaTeamFind from "./components/msaTeamFind";
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={<Hub />} />
        <Route path="/team" component={<MsaTeamFind />} />
      </div>
    );
  }
}
// return (
//   <div>
//     <Route exact path="/" component={<Hub />} />
//     <Route path="/team" component={<MsaTeamFind />} />
//   </div>
// );
