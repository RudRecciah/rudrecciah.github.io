import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import langs from "../../assets/data/langs.json";
import AdmincoreFeatures from "./admincoreFeatures.jsx";

export default class Admincore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langs: langs.names,
    };
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
                      <AdmincoreFeatures/>
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" lg="6">
                  <h3 className="font-header text-center text-white">Customization</h3>
                  <p className="text-center font-size-p c-text-gray">While Admincore requires minimal setup and can operate as a nearly drag-and-drop solution, Admincore is also built with customization in mind. Admincore comes with over 150 configuration options, allowing operators to make it fit their specific use cases.</p>
                </Col>
              </Row>
            </section>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}