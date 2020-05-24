import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Themes from "./components/Themes";
import Quiz from "./components/Quiz";
import PageNotFound from "./components/PageNotFound";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <Themes />
        </Route>
        <Route path="/theme/:title">
          <Quiz />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    );
  }
}
