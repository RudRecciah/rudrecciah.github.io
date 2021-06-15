import React, {Component} from "react";
import {Col, Container, Navbar, Row} from "reactstrap";
import {ExpandMoreOutlined} from "@material-ui/icons";

export default class Home extends Component {
  state = {};
  
  render() {
    return (
      <React.Fragment>
        <Container fluid={true}>
          <section className="h-80vh d-flex flex-column align-content-center justify-content-center">
            <h1 className="font-size-splash text-white font-parkway text-center">Squawk</h1>
          </section>
          <section>
            <Navbar className="navbar-horizontal fixed-bottom">
              <Container fluid={true}>
                <p className="text-center text-white d-block w-100"><ExpandMoreOutlined/></p>
              </Container>
            </Navbar>
          </section>
        </Container>
      </React.Fragment>
    );
  }
}