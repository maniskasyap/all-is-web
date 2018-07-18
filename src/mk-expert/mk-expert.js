import React, { Component } from "react";
import MkScrollPos from "../common/mk-scroll-pos";

import "./mk-expert.css";

class MkExpert extends Component {
  render() {
    return (
      <section id="expert">
        <MkScrollPos>{posY => <h1>{posY}</h1>}</MkScrollPos>
        {/* <div className="flex">
          <div className="one">one</div>
          <div className="two">two</div>
          <div className="three">three</div>
        </div> */}
      </section>
    );
  }
}

export default MkExpert;
