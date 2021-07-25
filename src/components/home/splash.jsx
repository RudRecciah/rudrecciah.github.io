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
      <motion.div animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0, delay: 1}}>
        <div className="px-3">
          <motion.h1 className={"font-hero"}>Hey</motion.h1>
          <Spacer y={"50px"}/>
          <p>&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;I'm a pink parrot who likes code. I've been programming for the past three years, mostly in Java and JS.</p>
          <Spacer y={"40px"}/>
          <Row className={"w-50 mx-2"}>
            <Col xs={8} className={"p-0"}>
              <Button className={"btn btn-secondary btn-rounded min-w-150px font-size-16 font-nav p-2"} onClick={this.props.xp}>
                Experience
              </Button>
            </Col>
            <Col xs={4} className={"p-0"}>
              <Button className={"btn btn-secondary btn-rounded min-w-150px font-size-16 font-nav p-2"} onClick={this.props.projects}>
                Projects
              </Button>
            </Col>
          </Row>
          <Spacer y={"100px"}/>
        </div>
      </motion.div>
    );
  }
}