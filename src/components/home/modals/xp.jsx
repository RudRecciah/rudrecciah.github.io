import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import Spacer from "@tom-ricci/react-spacer/dist/spacer.js";
import {motion} from "framer-motion";

export default class Xp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    };
  }

  render() {
    return (
      <motion.div initial={{y: -(this.state.vh)}} animate={{y: 0}} exit={{y: -(this.state.vh)}} transition={{type: "spring", duration: 0.80, bounce: 0, damping: 20}} className={"bg-primary text-white h-100vh position-absolute top-0 left-0 w-100"}>
        <Spacer y={"100px"}/>
        <Container>
          <Row>
            <Col>
              <h1 className={"font-size-100 text-center"}>Experience</h1>
            </Col>
          </Row>
          <Spacer y={"50px"}/>
          <Row>
            <Col>
              <p className={"text-center"}>With 3 years of experience, I have a few technologies under my belt.</p>
            </Col>
          </Row>
        </Container>
      </motion.div>
    );
  }
}