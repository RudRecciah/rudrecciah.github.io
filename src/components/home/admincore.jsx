import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import SpacerSm from "../utils/spacerSm.jsx";
import SpacerMd from "../utils/spacerMd.jsx";

export default class Admincore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <Container fluid={true}>
          <Container fluid="xl">
            <section>
              <Row>
                <h2 className="font-header text-center text-white font-size-h2">Admincore</h2>
                <p className="text-center font-size-p c-text-gray">
                  Admincore is my main project. With Admincore, you can moderate every aspect of your Spigot server playerbase and community.
                </p>
                <Col xs="12" lg="6">
                  <Row>
                    <Col>
                      <h3 className="font-header text-center text-white">Features</h3>
                      <p className="text-center font-size-p c-text-gray">Admincore has over 50 features and moderation tools, the most notable of which are its staffmode, report, punishment, appeal, and communicaton systems. Admincore supports GUI, command, and Discord based ways to interact with the plugin.</p>
                    </Col>
                  </Row>
                  <Row className="d-none d-lg-flex flex-row">
                    <Col>
                      <div className="box">
                        <div className="border-bottom-box box-top">
                          <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
                            <span className="text-right mr-3">
                              Report Player
                            </span>
                          </span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-25">&#8197;</div>
                          <div className="fake-content fake-content-last text-gray text-center w-75">&#8197;</div>
                        </div>
                      </div>
                      <SpacerSm/>
                      <div className="box">
                        <div className="border-bottom-box box-top">
                          <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
                            <span className="text-right mr-3">
                              Ban Player
                            </span>
                          </span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-75">&#8197;</div>
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-13-5">&#8197;</div>
                          <div className="fake-content fake-content-last text-gray text-center w-13-5">&#8197;</div>
                        </div>
                      </div>
                      <SpacerSm/>
                      <div className="box">
                        <div className="border-bottom-box box-top">
                          <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
                            <span className="text-right mr-3">
                              RudRecciah's Statistics
                            </span>
                          </span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
                          <div className="fake-content fake-content-last text-gray text-center w-20">&#8197;</div>
                        </div>
                      </div>
                      <SpacerSm/>
                      <div className="box">
                        <div className="border-bottom-box box-top">
                          <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
                            <span className="text-right mr-3">
                              . . .
                            </span>
                          </span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-50">&#8197;</div>
                          <div className="fake-content fake-content-last text-gray text-center w-50">&#8197;</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" lg="6">
                  <Row>
                    <Col>
                      <h3 className="font-header text-center text-white">Customization</h3>
                      <p className="text-center font-size-p c-text-gray d-1070-pre">While Admincore requires minimal setup and can operate as a nearly drag-and-drop solution, Admincore is also built with customization in mind. Admincore comes with over 150 configuration options, allowing operators to make it fit their specific use cases.</p>
                      <p className="text-center font-size-p c-text-gray d-1070-post">While Admincore can operate as a nearly drag-and-drop solution, Admincore is also built with customization in mind. Admincore comes with over 150 configuration options, allowing operators to make it fit their specific use cases.</p>
                    </Col>
                  </Row>
                  <Row className="d-none d-lg-flex flex-row">
                    <Col>
                      <div className="box">
                        <div className="border-bottom-box box-top">
                          <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
                            <span className="text-left ml-3">
                              Discord Integration
                            </span>
                          </span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-25">&#8197;</div>
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-61-5">&#8197;</div>
                          <div className="fake-content fake-content-last text-gray text-center w-13-5">&#8197;</div>
                        </div>
                      </div>
                      <SpacerSm/>
                      <div className="box">
                        <div className="border-bottom-box box-top">
                          <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
                            <span className="text-left ml-3">
                              Staffmode
                            </span>
                          </span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
                          <div className="fake-content fake-content-last text-gray text-center w-20">&#8197;</div>
                        </div>
                      </div>
                      <SpacerSm/>
                      <div className="box">
                        <div className="border-bottom-box box-top">
                          <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
                            <span className="text-left ml-3">
                              Punishment Length
                            </span>
                          </span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-25">&#8197;</div>
                          <div className="fake-content fake-content-last text-gray text-center w-75">&#8197;</div>
                        </div>
                      </div>
                      <SpacerSm/>
                      <div className="box">
                        <div className="border-bottom-box box-top">
                          <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
                            <span className="text-left ml-3">
                              . . .
                            </span>
                          </span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="fake-content fake-content-row fake-content-last text-gray text-center w-50">&#8197;</div>
                          <div className="fake-content fake-content-last text-gray text-center w-50">&#8197;</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <SpacerMd/>
              </Row>
              <Row>
                <Col/>
                <Col className="text-center">
                  <a href="./admincore" className="btn btn-white text-center">Learn More</a>
                </Col>
                <Col/>
              </Row>
            </section>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}