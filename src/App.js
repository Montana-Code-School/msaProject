import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./components/msaTeamFind";
import "./routes";
import Header from "./header";
// let msafind = require("./src/components/msaTeamFind");
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <msaTeamFind />
          <header className="App-header">
            <h1 className="App-title">Welcome to Softball Mania</h1>
            <Header />
          </header>
          <div>
            <routes />
          </div>
        </div>
      </Router>
    );
  }
}
