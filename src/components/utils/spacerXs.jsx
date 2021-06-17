import React, {Component} from "react";

export default class SpacerXs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <hr className="spacer-xs"/>
      </React.Fragment>
    );
  }
}