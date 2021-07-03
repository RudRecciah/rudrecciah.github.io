import React, {Component} from "react";
import {BrowserRouter, Switch as BrowserSwitch, Route as BrowserRoute} from "react-router-dom";
import Home from "./home/home.jsx";
import {Grommet} from "grommet";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grommet plain>
        <BrowserRouter>
          <BrowserSwitch>
            <BrowserRoute>
              <Home/>
            </BrowserRoute>
          </BrowserSwitch>
        </BrowserRouter>
      </Grommet>
    );
  }
}