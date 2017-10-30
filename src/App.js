import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
import Login from "./pages/login";
import Hub from "./pages/hub";
import MsaTeamFind from "./components/msaTeamFind";
import MsaTeamProfile from "./components/msaTeamProfile";
import MsaGameScheduleByTeam from "./components/msaGameScheduleByTeam";
import MsaViewGames from "./components/msaViewGames";
import MsaViewLeagues from "./components/msaViewLeagues";
import MsaIndividualGame from "./components/msaIndividualGame";
<<<<<<< HEAD
import MsaLeagueProfile from "./components/msaLeagueProfile";
import MsaViewDivisions from "./components/msaViewDivisions";
import MsaDivisionProfile from "./components/msaDivisionProfile";
=======
import MsaViewFields from "./components/msaViewFields";
import MsaFieldProfile from "./components/msaFieldProfile";
>>>>>>> 6ba7b329d4c033581b4700dbe886dc00abef57ff

// let msafind = require("./src/components/msaTeamFind");
export default class App extends Component {
  render() {
    var body = document.getElementsByTagName("body")[0];
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Missoula Softball Association</h1>
            <Link to="/viewTeams">Team list</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/viewGames">Games</Link>
          </header>
          <Switch>
            <Route exact path="/" component={Hub} />
            <Route path="/viewTeams" component={MsaTeamFind} />
            <Route path="/login" component={Login} />
            <Route path="/viewTeam/:_id" component={MsaTeamProfile} />
            <Route path="/viewGame/:_id" component={MsaIndividualGame} />
            <Route path="/viewGames" component={MsaViewGames} />
<<<<<<< HEAD
            <Route path="/viewLeagues" component={MsaViewLeagues} />
            <Route path="/viewLeague/:_id" component={MsaLeagueProfile} />
            <Route path="/viewDivisions" component={MsaViewDivisions} />
            <Route path="/viewDivision/:_id" component={MsaDivisionProfile} />
=======
            <Route path="/viewFields" component={MsaViewFields} />
            <Route path="/fieldProfile/:_id" component={MsaFieldProfile} />
>>>>>>> 6ba7b329d4c033581b4700dbe886dc00abef57ff
          </Switch>
        </div>
      </Router>
    );
  }
}

/*

*/
