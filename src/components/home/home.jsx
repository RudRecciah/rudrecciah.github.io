import React, {Component} from "react";
import Splash from "./splash.jsx";
import Xp from "./xp.jsx";
import Spacer from "../utils/spacer.jsx";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <Splash/>
        <Spacer/>
        <Xp/>
        <Spacer/>
      </React.Fragment>
    );
  }
}