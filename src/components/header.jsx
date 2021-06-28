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
                  <Link to="/hub" className="btn btn-link text-white">Projects</Link>
                </NavItem>
                <NavItem>
                  <Link to="/creativecorner" className="btn btn-link text-white">Creative Corner</Link>
                </NavItem>
                <NavItem>
                  <Link to="/blog" className="btn btn-link text-white">Blog</Link>
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