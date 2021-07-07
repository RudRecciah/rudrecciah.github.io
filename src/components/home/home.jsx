import React, {Component} from "react";
import Navi from "./navi.jsx";
import Splash from "./splash.jsx";
import Xp from "./modals/xp.jsx";
import {AnimatePresence} from "framer-motion";
import Projects from "./modals/projects.jsx";
import { v4 as uuidv4 } from "uuid";
import {Container} from "reactstrap";
import Contact from "./modals/contact.jsx";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xp: false,
      projects: false,
      contact: false
    };
    this.toggleXp = this.toggleXp.bind(this);
    this.toggleProjects = this.toggleProjects.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
    this.disableAll = this.disableAll.bind(this);

  }

  toggleXp() {
    this.setState({xp: !this.state.xp, projects: false, contact: false});
  }

  toggleProjects() {
    this.setState({xp: false, projects: !this.state.projects, contact: false});
  }

  toggleContact() {
    this.setState({xp: false, projects: false, contact: !this.state.contact});
  }

  disableAll() {
    this.setState({xp: false, projects: false, contact: false});
  }

  render() {
    return (
      <React.Fragment>
        <div className={"d-flex flex-column h-100vh bg-splash position-absolute w-100"}>
          <Navi home={this.disableAll} xp={this.toggleXp} projects={this.toggleProjects} contact={this.toggleContact}/>
          <Splash xp={this.toggleXp} projects={this.toggleProjects}/>
        </div>
        <AnimatePresence>
          {this.state.xp && <Xp key={uuidv4()}/>}
          {this.state.projects && <Projects key={uuidv4()}/>}
          {this.state.contact && <Contact/>}
        </AnimatePresence>
      </React.Fragment>
    );
  }
}