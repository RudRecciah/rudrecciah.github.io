import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Navbar, Container, NavbarBrand, NavItem, Nav} from "reactstrap";
import Logo from "../assets/svg/angle.svg";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <nav className="sticky-top">
          <Navbar className="navbar-horizontal bg-frosted border-bottom border-dark" expand="lg">
            <Container fluid={true}>
              <NavbarBrand>
                <Link to="/" className="btn btn-link text-white"><img src={Logo} alt="Home"/></Link>
              </NavbarBrand>
              <Nav>
                <NavItem>
                  <Link to="/code" className="btn btn-link text-white">Code</Link>
                </NavItem>
                <NavItem>
                  <Link to="/gallery" className="btn btn-link text-white">Gallery</Link>
                </NavItem>
                <NavItem>
                  <a target="_blank" href="./ttm" className="btn btn-link text-white">TTM</a>
                </NavItem>
                <NavItem>
                  <Link to="/core" className="btn btn-link text-white">Admincore</Link>
                </NavItem>
                <NavItem>
                  <a target="_blank" href="https://discord.rudrecciah.dev/" className="btn btn-white text-dark">Contact</a>
                </NavItem>
              </Nav>
            </Container>
          </Navbar>
        </nav>
      </React.Fragment>
    );
  }
}