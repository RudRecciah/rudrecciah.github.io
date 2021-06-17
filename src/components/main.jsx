import React, {Component} from "react";
import Header from "./header.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./home/home.jsx";
import Footer from "./footer.jsx";
import Hub from "./hub/hub.jsx";

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
              <Route path="/hub" exact component={Hub}/>
            </Switch>
            <Footer/>
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}