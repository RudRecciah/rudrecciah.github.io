import React, {Component} from "react";
import Splash from "./splash.jsx";
import Xp from "./xp.jsx";
import Admincore from "./admincore.jsx";
import SpacerLg from "../utils/spacerLg.jsx";
import SpacerXl from "../utils/spacerXl.jsx";
import Creative from "./creative.jsx";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <Splash/>
        <SpacerLg/>
        <Xp/>
        <SpacerXl/>
        <Admincore/>
        <SpacerXl/>
        <Creative/>
        <SpacerXl/>
      </React.Fragment>
    );
  }
}