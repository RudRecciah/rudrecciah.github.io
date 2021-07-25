import React, {Component} from "react";
import Spacer from "@tom-ricci/react-spacer/dist/spacer.js";
import {Button, Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import {motion} from "framer-motion";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
      content: false
    };
  }

  toggleContent() {
    this.setState({content: !this.state.content});
  }

  render() {
    return (
      <motion.div initial={{y: -(this.state.vh)}} animate={{y: 0}} onAnimationStart={() => this.toggleContent()} exit={{y: -(this.state.vh)}} transition={{type: "spring", damping: 20}} className={"bg-primary text-white min-h-100vh position-absolute top-0 left-0 w-100"}>
        <Spacer y={"100px"}/>
        <Container id={"projects"}>
          <Row>
            <Col>
              <h1 className={"font-size-100 text-center"}>Projects</h1>
            </Col>
          </Row>
          <Spacer y={"50px"}/>
          <Row>
            <Col>
              <p className={"text-center"}>Basically all of my code.</p>
            </Col>
          </Row>
          <Spacer y={"50px"}/>
          {this.state.content && <div>
            <Row>
              <Col>
                <div className={"shadow-lg rounded-3 p-3"}>
                  <h2>Admincore</h2>
                  <p>With Admincore, you can moderate and administer your Spigot server with ease and simplicity. Report, punish, spectate, appeal, and manage your playerbase in-game quickly and without hassle.</p>
                  <a className={"btn btn-secondary btn-rounded min-w-150px font-size-16 font-nav p-2"} href={"./admincore"}>Install Plugin</a>
                </div>
              </Col>
            </Row>
            <Spacer y={"50px"}/>
            <Row>
              <Col>
                <div className={"shadow-lg rounded-3 p-3"}>
                  <h2>EndCraft</h2>
                  <p>EndCraft is a now open-source archive of a Minecraft server I've owned with some friends since 2013. Find maps, custom plugins, valuable data, and more in EndCraft's archive.</p>
                  <a className={"btn btn-secondary btn-rounded min-w-150px font-size-16 font-nav p-2"} href={"./osea"}>View Archive</a>
                </div>
              </Col>
            </Row>
            <Spacer y={"50px"}/>
            <Row>
              <Col>
                <div className={"shadow-lg rounded-3 p-3"}>
                  <h2>To The Moon Theory Wiki</h2>
                  <p>Being the main active theorizer of all Freebird games, I noticed theories were hard to keep track of and I would usually lose ones made by others. As a response, I decided to build a place for theories to exist and be easily accessable to anyone who might want to read some or use them to make their own.</p>
                  <a className={"btn btn-secondary btn-rounded min-w-150px font-size-16 font-nav p-2"} href={"./ttm"}>Browse Wiki</a>
                </div>
              </Col>
            </Row>
            <Spacer y={"50px"}/>
            <Row>
              <Col>
                <div className={"shadow-lg rounded-3 p-3"}>
                  <h2>Custom Query Stats</h2>
                  <p>Custom Query Stats is a plugin that stores player statistics in your server's MOTD. This way, a Spigot server can send player metadata to other services without the need for an HTTP server or similar solution.</p>
                  <a className={"btn btn-secondary btn-rounded min-w-150px font-size-16 font-nav p-2"} href={"./cqs"}>Download</a>
                </div>
              </Col>
            </Row>
            <Spacer y={"80px"}/>
          </div>}
        </Container>
      </motion.div>
    );
  }
}