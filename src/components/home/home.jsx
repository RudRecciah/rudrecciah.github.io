import React, {Component} from "react";
import {Anchor, Box, Footer, Header, Nav, Text} from "grommet";
import {Code} from "grommet-icons";
import {Link as BrowserLink} from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Box direction={"column"} className={"h-100vh"}>
          <Header background={"brand"} pad={"medium"}>
            <Nav margin={{"horizontal": "xlarge"}} direction={"row"}>
              <BrowserLink to={"/"}>
                <Anchor>
                  <Code color={"accent-1"}/>
                </Anchor>
              </BrowserLink>
            </Nav>
          </Header>
          <Box fill={true} margin={"xlarge"}>
            <h1 className={"font-overpass"}>Hey</h1>
            <Text>I'm a pink parrot who likes code. I've been developing for the past three years, working on various projects mostly in Java.</Text>
          </Box>
          <Footer/>
        </Box>
      </React.Fragment>
    );
  }
}