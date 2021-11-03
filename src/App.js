import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/home">
              <News key="home" pageSize={5} country="in" category={"general"} />
            </Route>
            <Route exact path="/">
              <News
                key="general"
                pageSize={5}
                country="in"
                category={"general"}
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={5}
                country="in"
                category={"business"}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={5}
                country="in"
                category={"entertainment"}
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                pageSize={5}
                country="in"
                category={"health"}
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={5}
                country="in"
                category={"science"}
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={5}
                country="in"
                category={"sports"}
              />
            </Route>
            <Route exact path="/general">
              <News
                key="general"
                pageSize={5}
                country="in"
                category={"general"}
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={5}
                country="in"
                category={"technology"}
              />
            </Route>
            {/* <Route exact path="/about">
              <News key="about" pageSize={5} country="in" category={"about"} />
            </Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
