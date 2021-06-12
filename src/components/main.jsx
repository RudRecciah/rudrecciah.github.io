import React, {Component} from "react";
import Header from "./header.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./home/home.jsx";
import Footer from "./footer.jsx";

export default class Main extends Component {
  state = {};
  
  render() {
    return (
      <React.Fragment>
        <div className="min-vh-100 d-flex flex-column bg-black">
          <BrowserRouter>
            <Header/>
            <Switch>
              <Route path="/" exact component={Home}/>
            </Switch>
            <Footer/>
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}