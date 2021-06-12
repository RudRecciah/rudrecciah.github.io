import React, {Component} from "react";

export default class Home extends Component {
  state = {};
  
  render() {
    return (
      <React.Fragment>
        <section className="h-100 flex-1 d-flex flex-column align-content-center justify-content-center">
          <h1 className="font-size-splash text-white font-parkway text-center">Squawk</h1>
        </section>
      </React.Fragment>
    );
  }
}