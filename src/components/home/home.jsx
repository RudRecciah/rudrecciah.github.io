import React, {Component} from "react";
import Splash from "../../assets/svg/splash.png";

export default class Home extends Component {
  state = {};
  
  render() {
    return (
      <React.Fragment>
        <h1 className="font-size-splash text-white font-parkway text-center">Squawk</h1>
      </React.Fragment>
    );
  }
}