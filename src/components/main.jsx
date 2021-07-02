import React, {Component} from "react";
import {Layout, Typography} from "antd";
import {Content, Footer} from "antd/lib/layout/layout.js";
import {BrowserRouter, Switch as BrowserSwitch, Route as BrowserRoute} from "react-router-dom";
import Home from "./home/home.jsx";
import Text from "antd/lib/typography/Text.js";
import {CopyrightOutlined} from "@ant-design/icons";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Layout className="h-100vh">
            <Content>
              <BrowserSwitch>
                <BrowserRoute path="/" exact component={Home}/>
              </BrowserSwitch>
            </Content>
            <Footer>
              <Text className=""><CopyrightOutlined/> 2020-2021 RudRecciah. All rights reserved.</Text>
            </Footer>
          </Layout>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}