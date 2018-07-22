import React, { Component } from "react";
import MkScrollPos from "../common/mk-scroll-pos";

import "./mk-expert.css";

class MkExpert extends Component {
  render() {
    return (
      <section id="expert">
        <MkScrollPos>
          {posY => (
            <div
              className={
                "expert-items " +
                (posY > 0 && posY < 600 ? "fixed" : "") +
                (posY > 600 ? "relative" : "")
              }
            >
              {/* <div className="flex"> */}
              {/* <h1>{posY}</h1> */}
              <div
                style={{ top: -600 + posY < 0 ? -600 + posY : 0 }}
                className="expert-item item-1"
              >
                one
              </div>
              <div
                style={{ top: 600 - posY > 0 ? 600 - posY : 0 }}
                className="expert-item item-2"
              >
                two
              </div>
              <div
                style={{ top: -600 + posY < 0 ? -600 + posY : 0 }}
                className="expert-item item-3"
              >
                three
              </div>
              {/* </div> */}
            </div>
          )}
        </MkScrollPos>
      </section>
    );
  }
}

export default MkExpert;
