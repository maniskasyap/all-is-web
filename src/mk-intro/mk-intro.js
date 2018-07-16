import React, { Component } from "react";
import MkSpace from "../mk-space/mk-space";
import "./mk-intro.css";

class MkIntro extends Component {
  render() {
    return (
      <section id="home">
        <MkSpace />
        <div className="intro flex flex-col flex-center flex-center-90">
          <div className="intro-text">
            Hello, I'm <span className="intro-text__name"> Manish</span>
            <div>I'm a full-stack web developer.</div>
          </div>
        </div>
      </section>
    );
  }
}

export default MkIntro;
