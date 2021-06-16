import React, {Component} from "react";
import {Container, Navbar} from "reactstrap";
import {ExpandMoreOutlined} from "@material-ui/icons";

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="position-absolute w-100">
          <Container fluid={true} className="h-100vh w-100">
            <header className="h-100 d-flex flex-column align-content-center justify-content-center">
              <div className="flex-grow-1 d-flex flex-column align-content-center justify-content-center">
                <h1 className="font-size-splash text-white font-parkway text-center">Squawk</h1>
              </div>
              <Navbar className="navbar-horizontal">
                <Container fluid={true}>
                  <p className="text-center text-white d-block w-100"><ExpandMoreOutlined/></p>
                </Container>
              </Navbar>
            </header>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}