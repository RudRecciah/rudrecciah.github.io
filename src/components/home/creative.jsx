import React, {Component} from "react";
import {Col, Container, Progress, Row} from "reactstrap";
import {Forward5, Gesture, Landscape, MoreHoriz, PlayArrow, QueueMusic, Replay5} from "@material-ui/icons";
import {Link} from "react-router-dom";
import SpacerSm from "../utils/spacerSm.jsx";

export default class Creative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: Math.floor(Math.random() * 80) + 10
    };
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid={true}>
          <Container fluid="xl">
            <section>
              <Row>
                <Col>
                  <h2 className="font-header text-center text-white font-size-h2">Creative Corner</h2>
                  <p className="text-center font-size-p c-text-gray">
                    Besides development, I also enjoy creative endeavors. Whether it be art, music, photography, or something else, I like making things.
                  </p>
                </Col>
              </Row>
              <Row className="d-none d-lg-flex">
                <Col>
                  <div className="box">
                    <Row className="ml-1">
                      <Col xs="4">
                        <QueueMusic className="w-100 h-100 c-text-gray"/>
                      </Col>
                      <Col xs="7" className="d-flex flex-column">
                        <Col>
                          <div className="h-100 d-flex flex-column justify-content-end align-content-center">
                            <Progress className="p-0 mb-2 fake-content fake-content-last" value={this.state.progress}/>
                          </div>
                        </Col>
                        <Col>
                          <Col className="d-flex flex-row c-text-gray">
                            <Col>
                              <Replay5/>
                            </Col>
                            <Col>
                              <PlayArrow/>
                            </Col>
                            <Col>
                              <Forward5/>
                            </Col>
                          </Col>
                        </Col>
                      </Col>
                      <Col xs="1"/>
                    </Row>
                    <Row>
                      <Col>
                        <div className="d-flex flex-row">
                          <div className="fake-content text-gray text-center w-61-5">&#8197;</div>
                          <div className="fake-content text-gray text-center w-13-5">&#8197;</div>
                          <div className="fake-content text-gray text-center w-13-5">&#8197;</div>
                        </div>
                        <div className="mr-3 ml-3">
                          <hr className="ml-auto mr-auto mt-3 mb-2 c-text-gray"/>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content fake-content-last text-gray text-center">&#8197;</div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <div className="box">
                    <Row className="ml-1 align-content-center justify-content-center">
                      <Col xs="4">
                        <Landscape className="w-100 h-100 c-text-gray"/>
                      </Col>
                      <Col xs="4">
                        <Gesture className="w-100 h-100 c-text-gray"/>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="d-flex flex-row">
                          <div className="fake-content text-gray text-center w-61-5">&#8197;</div>
                          <div className="fake-content text-gray text-center w-13-5">&#8197;</div>
                          <div className="fake-content text-gray text-center w-13-5">&#8197;</div>
                        </div>
                        <div className="mr-3 ml-3">
                          <hr className="ml-auto mr-auto mt-3 mb-2 c-text-gray"/>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content fake-content-last text-gray text-center">&#8197;</div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="d-vxl-flex">
                  <div className="box">
                    <Row className="ml-1 align-content-center justify-content-center">
                      <Col xs="4">
                        <MoreHoriz className="w-100 h-100 c-text-gray"/>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="d-flex flex-row">
                          <div className="fake-content text-gray text-center w-61-5">&#8197;</div>
                          <div className="fake-content text-gray text-center w-13-5">&#8197;</div>
                          <div className="fake-content text-gray text-center w-13-5">&#8197;</div>
                        </div>
                        <div className="mr-3 ml-3">
                          <hr className="ml-auto mr-auto mt-3 mb-2 c-text-gray"/>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content fake-content-last text-gray text-center">&#8197;</div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row className="d-lg-none">
                <Col xs={12}>
                  <div className="box">
                    <Row className="ml-1 align-content-center justify-content-center">
                      <Col xs={4}>
                        <QueueMusic className="w-100 h-70px c-text-gray"/>
                      </Col>
                      <Col xs="4">
                        <Landscape className="w-100 h-70px c-text-gray"/>
                      </Col>
                      <Col xs="4">
                        <Gesture className="w-100 h-70px c-text-gray"/>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <SpacerSm/>
              <Row className="text-center">
                <Col>
                  <Link to="/creativecorner" className="btn btn-white text-center">Browse Creations</Link>
                </Col>
              </Row>
            </section>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}