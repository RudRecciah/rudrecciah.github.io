import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Navbar, Container, NavbarBrand, NavItem, Nav} from "reactstrap";
import Logo from "../assets/svg/angle.svg";

export default class Header extends Component {
  state = {};
  
  render() {
    return (
      <React.Fragment>
        <header>
          <Navbar className="navbar-horizontal bg-frosted border-bottom border-dark sticky-top" expand="lg">
            <Container fluid={true}>
              <NavbarBrand>
                <Link to="/" className="btn btn-link text-white"><img src={Logo} alt="Home"/></Link>
              </NavbarBrand>
              <Nav>
                <NavItem>
                  <Link to="/about" className="btn btn-link text-white">About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/core" className="btn btn-link text-white">Core</Link>
                </NavItem>
                <NavItem>
                  <Link to="/gallery" className="btn btn-link text-white">Gallery</Link>
                </NavItem>
                <NavItem>
                  <a target="_blank" href="./ttm" className="btn btn-link text-white">TTM</a>
                </NavItem>
                <NavItem>
                  <Link to="/contact" className="btn btn-white text-dark">Contact</Link>
                </NavItem>
              </Nav>
            </Container>
          </Navbar>
        </header>
      </React.Fragment>
    );
  }
}