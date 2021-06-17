import React, {Component} from "react";
import {Col, Container, Row, Table} from "reactstrap";
import langs from "../../assets/data/langs.json";
import circle from "../../assets/svg/circle.svg";

export default class Xp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langs: langs.names,
      files: langs.files,
      currentFile: "index.html"
    };
  }
  
  componentDidMount() {
    this.setState({currentFile: this.state.files[Math.floor(Math.random() * this.state.files.length)]});
  }
  
  render() {
    return (
      <React.Fragment>
        <Container fluid={true} className="mt-100vh h-100">
          <Container fluid="xl">
            <section>
              <Row className="flex-column-reverse flex-lg-row">
                <Col xs="12" lg="6" className="d-flex flex-column align-content-center justify-content-center">
                  <div className="box">
                    <div className="flex-column">
                      <div className="border-bottom-box box-top">
                        <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
                          <span><img src={circle} alt="" height="10" width="10" className="mr-2 align-baseline"/>{this.state.currentFile}</span>
                        </span>
                      </div>
                      <div className="d-flex flex-column align-content-center justify-content-center">
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content text-gray text-center">&#8197;</div>
                        <div className="fake-content fake-content-last text-gray text-center">&#8197;</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs="12" lg="6">
                  <h2 className="font-header text-center text-lg-right text-white font-size-h2">Hey, I'm Rud.</h2>
                  <p className="text-center text-lg-right font-size-p c-text-gray">
                    I'm a pink parrot with development skills. I've been developing for the past three years, working on various projects mostly in Java.
                  </p>
                  <Table borderless className="text-center text-lg-right">
                    <thead className="text-white border-bottom border-dark">
                      <tr>
                        <th>Languages</th>
                        <th>Experience</th>
                      </tr>
                    </thead>
                    <tbody className="c-text-gray">
                      <tr>
                        <td key="ExtremeLangs">
                          {this.state.langs.extremely.map(lang =>
                            <span key={lang}>{lang}{lang !== this.state.langs.extremely[this.state.langs.extremely.length - 1] && ", "}</span>
                          )}
                        </td>
                        <td>Extremely Experienced</td>
                      </tr>
                      <tr>
                        <td key="ExtremeLangs">
                          {this.state.langs.highly.map(lang =>
                            <span key={lang}>{lang}{lang !== this.state.langs.highly[this.state.langs.highly.length - 1] && ", "}</span>
                          )}
                        </td>
                        <td>Highly Experienced</td>
                      </tr>
                      <tr>
                        <td key="ExtremeLangs">
                          {this.state.langs.moderately.map(lang =>
                            <span key={lang}>{lang}{lang !== this.state.langs.moderately[this.state.langs.moderately.length - 1] && ", "}</span>
                          )}
                        </td>
                        <td>Moderately Experienced</td>
                      </tr>
                      <tr>
                        <td key="ExtremeLangs">
                          {this.state.langs.somewhat.map(lang =>
                            <span key={lang}>{lang}{lang !== this.state.langs.somewhat[this.state.langs.somewhat.length - 1] && ", "}</span>
                          )}
                        </td>
                        <td>Somewhat Experienced</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </section>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}