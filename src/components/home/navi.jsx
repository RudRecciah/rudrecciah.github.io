import React, {Component, useState} from "react";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from "reactstrap";

export default class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color={"primary"} className={"px-4 font-size-16 z-l justify-content-center justify-content-md-space-between pt-3 pb-3"}>
          <NavLink onClick={this.props.home} className={"text-white font-nav cursor-pointer"}>
            &#60;/rudrecciah.dev&#62;
          </NavLink>
          <Nav>
            <NavItem className={"d-none d-md-flex"}>
              <NavLink onClick={this.props.xp} className={"text-white font-nav cursor-pointer"}>
                Experience
              </NavLink>
            </NavItem>
            <NavItem className={"d-none d-md-flex"}>
              <NavLink onClick={this.props.projects} className={"text-white font-nav cursor-pointer"}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem className={"d-none d-md-flex"}>
              <Button onClick={this.props.contact} className={"font-nav btn-rounded btn-secondary font-size-16 min-w-150px p-2"}>
                Contact
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}