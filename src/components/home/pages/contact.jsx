import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import {AnimatePresence, motion} from "framer-motion";
import Spacer from "@tom-ricci/react-spacer/dist/spacer.js";
import {FaStar, FaSteam, FaTwitch, SiYoutube, VscGithubInverted, VscTwitter} from "react-icons/all.js";
import StyleVars from "../../../styles/vars.json";

export default class Contact extends Component {
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
      <React.Fragment>
        <motion.div initial={{y: -(this.state.vh)}} animate={{y: 0}} exit={{y: -(this.state.vh)}} onAnimationStart={() => this.toggleContent()} transition={{type: "spring", damping: 20}} className={"bg-primary text-white min-h-100vh position-absolute top-0 left-0 w-100"}>
          <Spacer y={"100px"}/>
          <Container>
            <Row>
              <Col>
                <h1 className={"font-size-100 text-center"}>Contact</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className={"text-center"}>Need to find me? Here's how.</p>
              </Col>
            </Row>
            <Spacer y={"50px"}/>
            {this.state.content && <div>
              <Row>
                <Col>
                  <Row>
                    <Col xs={12} lg={6}>
                      <h2 className={"text-center text-lg-start"}>Join my Discord server.</h2>
                      <p className={"text-center text-lg-start"}>It's the easiest way to find me.</p>
                    </Col>
                    <Col xs={12} lg={6}>
                      <div className={"d-flex flex-column justify-content-center align-items-center align-items-lg-end h-100"}>
                        <a href={"./discord"} className={"btn btn-secondary btn-rounded font-nav font-size-16 p-2 min-w-150px"}>Join Now</a>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Spacer y={"50px"}/>
              <Row>
                <Col>
                  <Row>
                    <Col xs={12} lg={6} className={"mb-2 mb-lg-0"}>
                      <h2 className={"text-center text-lg-start"}>Want something else?</h2>
                      <p className={"text-center text-lg-start"}>You can also contact me via my socials.</p>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Row className={"h-100 w-100 w-md-80 mx-auto"}>
                        <Col>
                          <div className={"d-flex flex-column justify-content-center align-items-center h-100"}>
                            <a href={"./twitter"} style={{color: StyleVars.colors.secondary}}>
                              <VscTwitter size={"80%"} className={"socials"}/>
                            </a>
                          </div>
                        </Col>
                        <Col>
                          <div className={"d-flex flex-column justify-content-center align-items-center h-100"}>
                            <a href={"./twitch"} style={{color: StyleVars.colors.secondary}}>
                              <FaTwitch size={"80%"} className={"socials"}/>
                            </a>
                          </div>
                        </Col>
                        <Col>
                          <div className={"d-flex flex-column justify-content-center align-items-center h-100"}>
                            <a href={"./youtube"} style={{color: StyleVars.colors.secondary}}>
                              <SiYoutube size={"80%"} className={"socials"}/>
                            </a>
                          </div>
                        </Col>
                        <Col>
                          <div className={"d-flex flex-column justify-content-center align-items-center h-100"}>
                            <a href={"./github"} style={{color: StyleVars.colors.secondary}}>
                              <VscGithubInverted size={"80%"} className={"socials"}/>
                            </a>
                          </div>
                        </Col>
                        <Col>
                          <div className={"d-flex flex-column justify-content-center align-items-center h-100"}>
                            <a href={"./steam"} style={{color: StyleVars.colors.secondary}}>
                              <FaSteam size={"80%"} className={"socials"}/>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>}
            <Spacer y={"50px"}/>
          </Container>
        </motion.div>
      </React.Fragment>
    );
  }
}