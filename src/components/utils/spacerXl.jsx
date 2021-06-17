import React, {Component} from "react";

export default class SpacerXl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <hr className="spacer-xl"/>
      </React.Fragment>
    );
  }
}