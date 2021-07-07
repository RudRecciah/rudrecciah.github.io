import React, {Component} from "react";
import Home from "./home/home.jsx";
import {Container} from "reactstrap";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid={true} className={"p-0"}>
        <Home/>
      </Container>
    );
  }
}