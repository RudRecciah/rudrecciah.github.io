import React, {Component} from "react";
import SpacerMd from "../utils/spacerMd.jsx";
import SpacerSm from "../utils/spacerSm.jsx";

export default class AdmincoreFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="box">
          <div className="border-bottom-box box-top">
            <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
              <span className="text-right mr-3">
                Report Player
              </span>
            </span>
          </div>
          <div className="d-flex flex-row">
            <div className="fake-content fake-content-row fake-content-last text-gray text-center w-25">&#8197;</div>
            <div className="fake-content fake-content-last text-gray text-center w-75">&#8197;</div>
          </div>
        </div>
        <SpacerSm/>
        <div className="box">
          <div className="border-bottom-box box-top">
            <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
              <span className="text-right mr-3">
                Ban Player
              </span>
            </span>
          </div>
          <div className="d-flex flex-row">
            <div className="fake-content fake-content-row fake-content-last text-gray text-center w-75">&#8197;</div>
            <div className="fake-content fake-content-row fake-content-last text-gray text-center w-13-5">&#8197;</div>
            <div className="fake-content fake-content-last text-gray text-center w-13-5">&#8197;</div>
          </div>
        </div>
        <SpacerSm/>
        <div className="box">
          <div className="border-bottom-box box-top">
            <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
              <span className="text-right mr-3">
                RudRecciah's Statistics
              </span>
            </span>
          </div>
          <div className="d-flex flex-row">
            <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
            <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
            <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
            <div className="fake-content fake-content-row fake-content-last text-gray text-center w-20">&#8197;</div>
            <div className="fake-content fake-content-last text-gray text-center w-20">&#8197;</div>
          </div>
        </div>
        <SpacerSm/>
        <div className="box">
          <div className="border-bottom-box box-top">
            <span className="h-100 d-flex flex-column justify-content-center align-content-center w-100 text-center c-text-gray">
              <span className="text-right mr-3">
                . . .
              </span>
            </span>
          </div>
          <div className="d-flex flex-row">
            <div className="fake-content fake-content-row fake-content-last text-gray text-center w-50">&#8197;</div>
            <div className="fake-content fake-content-last text-gray text-center w-50">&#8197;</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}