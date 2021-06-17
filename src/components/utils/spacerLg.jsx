import React, {Component} from "react";

export default class SpacerLg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <hr className="spacer-lg"/>
      </React.Fragment>
    );
  }
}