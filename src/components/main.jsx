import React, {Component} from "react";
import Header from "./header.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./home/home.jsx";
import Footer from "./footer.jsx";
import Blog from "./blog/blog.jsx";
import CreativeCorner from "./creativeCorner/creativeCorner.jsx";
import Projects from "./projects/projects.jsx";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="min-vh-100 bg-black">
          <BrowserRouter>
            <Header/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/projects" exact component={Projects}/>
              <Route path="/creativecorner" exact component={CreativeCorner}/>
              <Route path="/blog" exact component={Blog}/>
            </Switch>
            <Footer/>
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}