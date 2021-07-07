import React, {Component} from "react";
import Spacer from "@tom-ricci/react-spacer/dist/spacer.js";
import {Button, Col, Row} from "reactstrap";
import {motion} from "framer-motion";

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className={"flex-grow-1"}/>
        <div className="px-3">
          <motion.h1 className={"font-hero"}>Hey</motion.h1>
          <Spacer y={"50px"}/>
          <p>&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;I'm a pink parrot who likes code. I've been programming for the past three years, mostly in Java and JS.</p>
          <Spacer y={"50px"}/>
          <Row className={"w-50 mx-2"}>
            <Col xs={8} className={"p-0"}>
              <Button className={"btn-rounded min-w-200px"} onClick={this.props.xp}>
                Experience
              </Button>
            </Col>
            <Col xs={4} className={"p-0"}>
              <Button className={"btn-rounded min-w-200px"} onClick={this.props.projects}>
                Projects
              </Button>
            </Col>
          </Row>
          <Spacer y={"100px"}/>
        </div>
      </React.Fragment>
    );
  }
}