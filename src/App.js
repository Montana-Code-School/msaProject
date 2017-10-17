import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Hub from "./pages/hub";
import MsaTeamFind from "./components/msaTeamFind";
//import Routes from "./routes";
import Header from "./header";
// let msafind = require("./src/components/msaTeamFind");
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Softball Mania</h1>
            <Header />
          </header>
          <Switch>
            <Route exact path="/" component={Hub} />
            <Route path="/team" component={MsaTeamFind} />
          </Switch>
        </div>
      </Router>
    );
  }
}
// <Router>
//   <div className="App">
//     <header className="App-header">
//       <h1 className="App-title">Welcome to Softball Mania</h1>
//       <Header />
//     </header>
//     <div>
//       <Routes />
//     </div>
//   </div>
// </Router>
