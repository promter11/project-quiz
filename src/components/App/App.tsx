import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../../routes";

import styles from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}
