import React, { Component } from "react";
import "./mk-intro.css";

class MkIntro extends Component {
  render() {
    return (
      <div className="intro flex flex-col flex-center flex-center-90">
        <div className="intro-text">
          Hello, I am <span className="intro-text__name"> Manish</span>
        </div>
        <div>I'm a full-stack web developer.</div>
      </div>
    );
  }
}

export default MkIntro;
