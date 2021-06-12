import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Navbar, Container, NavbarBrand} from "reactstrap";
import Logo from "../assets/svg/angle.svg";

export default class Header extends Component {
  state = {};
  
  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar-horizontal bg-frosted border-bottom border-dark sticky-top" expand="lg">
          <Container fluid={true}>
            <NavbarBrand>
              <Link to="/" className="btn btn-white text-black content-frosted"><img src={Logo} alt="Home"/></Link>
            </NavbarBrand>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}