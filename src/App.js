import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
import Login from "./pages/login";
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
            <Link to="/team">Team list</Link>
            <br />
            <Link to="/login">Login</Link>
          </header>
          <Switch>
            <Route exact path="/" component={Hub} />
            <Route path="/team" component={MsaTeamFind} />
            <Route path="/login" component={Login} />
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
