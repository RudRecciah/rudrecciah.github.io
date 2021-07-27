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
          <motion.h1 className={"font-hero text-center text-lg-start"}>Hey</motion.h1>
          <Spacer y={"50px"}/>
          <p className={"text-center text-lg-start"}>&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;I'm a pink parrot who likes code. I've been programming for the past three years, mostly in JS.</p>
          <Spacer y={"40px"}/>
          <Row className={"w-100 w-lg-50 mx-1 mx-lg-3"}>
            <Col xs={12} sm={4} lg={8} className={"p-0 mb-3 mb-lg-0 d-flex flex-row justify-content-center align-items-center justify-content-lg-start align-items-lg-start"}>
              <Button className={"btn btn-secondary btn-rounded min-w-150px font-size-16 font-nav p-2"} onClick={this.props.xp}>
                Experience
              </Button>
            </Col>
            <Col xs={12} sm={4} lg={4} className={"p-0 mb-3 mb-lg-0 d-flex flex-row justify-content-center align-items-center justify-content-lg-start align-items-lg-start"}>
              <Button className={"btn btn-secondary btn-rounded min-w-150px font-size-16 font-nav p-2"} onClick={this.props.projects}>
                Projects
              </Button>
            </Col>
            <Col xs={12} sm={4} className={"d-lg-none p-0 mb-3 mb-lg-0 d-flex flex-row justify-content-center align-items-center justify-content-lg-start align-items-lg-start"}>
              <Button className={"btn btn-secondary btn-rounded min-w-150px font-size-16 font-nav p-2"} onClick={this.props.contact}>
                Contact
              </Button>
            </Col>
          </Row>
          <div className={"d-none d-lg-block"}>
            <Spacer y={"40px"}/>
          </div>
          <div className={"d-lg-none"}>
            <Spacer y={"50px"}/>
          </div>
        </div>
      </motion.div>
    );
  }
}