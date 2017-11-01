import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
import Login from "./pages/login";
import Hub from "./pages/hub";

//Import team components
import MsaTeamFind from "./components/msaTeamFind";
import MsaTeamProfile from "./components/msaTeamProfile";
//Import game components
import MsaGameScheduleByTeam from "./components/msaGameScheduleByTeam";
import MsaViewGames from "./components/msaViewGames";
import MsaIndividualGame from "./components/msaIndividualGame";
import MsaViewGameDates from "./components/msaViewGameDates";
import MsaViewGamesByDate from "./components/msaViewGamesByDate";
// import league components
import MsaViewLeagues from "./components/msaViewLeagues";
import MsaLeagueProfile from "./components/msaLeagueProfile";
//import division components
import MsaViewDivisions from "./components/msaViewDivisions";
import MsaDivisionProfile from "./components/msaDivisionProfile";
//import field components
import MsaViewFields from "./components/msaViewFields";
import MsaFieldProfile from "./components/msaFieldProfile";

// let msafind = require("./src/components/msaTeamFind");
export default class App extends Component {
  render() {
    var body = document.getElementsByTagName("body")[0];
    return (
      <Router>
        <div>
          <div>
            <div className="App-header">
              <span className="App-title">Missoula Softball Association</span>
              <span>
                <div className="Links">
                  <Link to="/">Home</Link> &nbsp; | &nbsp;
                  <Link to="/viewTeams">Teams</Link> &nbsp; | &nbsp;
                  {/*<br />
        <Link to="/login">Login</Link>*/}
                  <Link to="/viewGames">Schedule</Link>
                </div>
              </span>
            </div>
          </div>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Hub} />
              <Route path="/viewTeams" component={MsaTeamFind} />
              <Route path="/login" component={Login} />
              <Route path="/viewTeam/:_id" component={MsaTeamProfile} />
              <Route path="/viewGame/:_id" component={MsaIndividualGame} />
              <Route path="/viewGames" component={MsaViewGames} />
              <Route path="/viewLeagues" component={MsaViewLeagues} />
              <Route path="/viewLeague/:_id" component={MsaLeagueProfile} />
              <Route path="/viewDivisions" component={MsaViewDivisions} />
              <Route path="/viewDivision/:_id" component={MsaDivisionProfile} />
              <Route path="/viewFields" component={MsaViewFields} />
              <Route path="/fieldProfile/:_id" component={MsaFieldProfile} />
              <Route path="/viewGameDates" component={MsaViewGameDates} />
              <Route
                path="/viewGamesByDate/:gameDate"
                component={MsaViewGamesByDate}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

/*

*/
