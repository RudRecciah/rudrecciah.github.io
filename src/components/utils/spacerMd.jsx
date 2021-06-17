import React, {Component} from "react";

export default class SpacerMd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <hr className="spacer-md"/>
      </React.Fragment>
    );
  }
}