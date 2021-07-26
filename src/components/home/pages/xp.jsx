import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import Spacer from "@tom-ricci/react-spacer/dist/spacer.js";
import {motion} from "framer-motion";
import HTMLIcon from "devicon/icons/html5/html5-original.svg";
import JSIcon from "devicon/icons/javascript/javascript-original.svg";
import JavaIcon from "devicon/icons/java/java-plain-wordmark.svg";
import ReactIcon from "devicon/icons/react/react-original.svg";
import CSSIcon from "devicon/icons/css3/css3-original.svg";
import BootstrapIcon from "devicon/icons/bootstrap/bootstrap-plain.svg";
import PyIcon from "devicon/icons/python/python-original.svg";
import BashIcon from "devicon/icons/bash/bash-original.svg";
import CSharpIcon from "devicon/icons/csharp/csharp-original.svg";
import DockerIcon from "devicon/icons/docker/docker-original.svg";
import PhpIcon from "devicon/icons/php/php-original.svg";
import SshIcon from "devicon/icons/ssh/ssh-original.svg";
import NodeJSIcon from "devicon/icons/nodejs/nodejs-original.svg";
import npmIcon from "devicon/icons/npm/npm-original-wordmark.svg";
import ExpressIcon from "devicon/icons/express/express-original.svg";
import SassIcon from "devicon/icons/sass/sass-original.svg";

export default class Xp extends Component {
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
          <Spacer y={"50px"}/>
          {this.state.content && <div>
            <Row className={"text-center w-75 mx-auto xp-md-list-container"}>
              <Col/>
              <Col className={"xp-md-list"}>
                <img src={HTMLIcon} alt={"HTML"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={JSIcon} alt={"JavaScript"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={JavaIcon} alt={"Java"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={ReactIcon} alt={"React"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={CSSIcon} alt={"CSS"} className={"img-fluid h-150px"}/>
              </Col>
              <Col/>
            </Row>
            <Row className={"text-center w-90 mx-auto xp-md-list-container"}>
              <Col/>
              <Col className={"xp-md-list"}>
                <img src={BootstrapIcon} alt={"Bootstrap"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={PyIcon} alt={"Python"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={BashIcon} alt={"Shell"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={CSharpIcon} alt={"C#"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={DockerIcon} alt={"Docker"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={PhpIcon} alt={"PHP"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={SshIcon} alt={"SSH"} className={"img-fluid h-150px"}/>
              </Col>
              <Col/>
            </Row>
            <Row className={"text-center w-75 mx-auto xp-md-list-container"}>
              <Col/>
              <Col className={"xp-md-list"}>
                <img src={NodeJSIcon} alt={"Node"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={npmIcon} alt={"npm"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={ExpressIcon} alt={"Express"} className={"img-fluid h-150px"}/>
              </Col>
              <Col className={"xp-md-list"}>
                <img src={SassIcon} alt={"Sass"} className={"img-fluid h-150px"}/>
              </Col>
              <Col/>
            </Row>
          </div>}
        </Container>
      </motion.div>
    );
  }
}