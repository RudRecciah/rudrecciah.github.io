import React, {Component} from "react";
import Navi from "./navi.jsx";
import Splash from "./splash.jsx";
import Xp from "./pages/xp.jsx";
import {AnimatePresence} from "framer-motion";
import Projects from "./pages/projects.jsx";
import { v4 as uuidv4 } from "uuid";
import Contact from "./pages/contact.jsx";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xp: false,
      projects: false,
      contact: false,
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

  toggleSplash() {
    return !(this.state.xp || this.state.projects || this.state.contact);
  }

  render() {
    return (
      <React.Fragment>
        <div id={"splash"} className={"d-flex flex-column h-100vh bg-splash position-absolute w-100"}>
          <Navi home={this.disableAll} xp={this.toggleXp} projects={this.toggleProjects} contact={this.toggleContact}/>
          <div className={"flex-grow-1"}/>
          <AnimatePresence>
            {this.toggleSplash() && <Splash xp={this.toggleXp} projects={this.toggleProjects} contact={this.toggleContact}/>}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {this.state.xp && <Xp key={uuidv4()}/>}
          {this.state.projects && <Projects key={uuidv4()}/>}
          {this.state.contact && <Contact key={uuidv4()}/>}
        </AnimatePresence>
      </React.Fragment>
    );
  }
}