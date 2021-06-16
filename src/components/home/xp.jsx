import React, {Component} from "react";
import {Col, Container, Row, Table} from "reactstrap";
import langs from "../../assets/data/langs.json";

export default class Xp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "langs": langs
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <Container fluid={true} className="mt-100vh h-100">
          <Container fluid="xl">
            <section>
              <Row className="flex-column-reverse flex-lg-row">
                <Col xs="12" lg="6" className="d-flex flex-column align-content-center justify-content-center">
                  <div className="box h-80">
                  
                  </div>
                </Col>
                <Col xs="12" lg="6" className="text-lg-right text-center">
                  <h2 className="font-header text-white font-size-h2">Hey, I'm Rud.</h2>
                  <p className="text-right font-size-p c-text-gray">
                    I'm a pink parrot with development skills. I've been developing for the past three years, working on various projects mostly in Java.
                  </p>
                  <Table borderless className="text-right">
                    <thead className="text-white border-bottom border-dark">
                      <tr>
                        <th>Languages</th>
                        <th>Experience</th>
                      </tr>
                    </thead>
                    <tbody className="c-text-gray">
                      <tr>
                        <th key="ExtremeLangs">
                          {this.state.langs.extremely.map(lang =>
                            <span key={lang}>{lang}{lang !== this.state.langs.extremely[this.state.langs.extremely.length - 1] && ", "}</span>
                          )}
                        </th>
                        <th>Extremely Experienced</th>
                      </tr>
                      <tr>
                        <th key="ExtremeLangs">
                          {this.state.langs.highly.map(lang =>
                            <span key={lang}>{lang}{lang !== this.state.langs.highly[this.state.langs.highly.length - 1] && ", "}</span>
                          )}
                        </th>
                        <th>Highly Experienced</th>
                      </tr>
                      <tr>
                        <th key="ExtremeLangs">
                          {this.state.langs.moderately.map(lang =>
                            <span key={lang}>{lang}{lang !== this.state.langs.moderately[this.state.langs.moderately.length - 1] && ", "}</span>
                          )}
                        </th>
                        <th>Moderately Experienced</th>
                      </tr>
                      <tr>
                        <th key="ExtremeLangs">
                          {this.state.langs.somewhat.map(lang =>
                            <span key={lang}>{lang}{lang !== this.state.langs.somewhat[this.state.langs.somewhat.length - 1] && ", "}</span>
                          )}
                        </th>
                        <th>Somewhat Experienced</th>
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