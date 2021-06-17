import React, {Component} from "react";

export default class Spacer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <div style={{width: "100%", height: "100px"}}></div>
      </React.Fragment>
    );
  }
}