import React, {Component} from "react";
import {Header} from "antd/lib/layout/layout.js";
import Text from "antd/lib/typography/Text.js";
import {ArrowLeftOutlined, LeftOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <Text className="text-white">
            <Link to="/"><ArrowLeftOutlined/> Back</Link>
          </Text>
        </Header>
      </React.Fragment>
    );
  }
}