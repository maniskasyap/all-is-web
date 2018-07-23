import React, { Component } from "react";
import MkScrollPos from "../common/mk-scroll-pos";
import MkField from "../mk-field/mk-field";

import "./mk-expert.css";

// import sydney from "./sydney.jpg";

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
                <MkField
                  title="Technical Consultancy"
                  description="Leverage latest tech to increase efficiency and unify processes."
                />
              </div>
              <div
                style={{ top: 600 - posY > 0 ? 600 - posY : 0 }}
                className="expert-item item-2"
              >
              <MkField
                  title="Best Practices"
                  description="Promote adoption and use of industry best practices."
                />
              </div>
              <div
                style={{ top: -600 + posY < 0 ? -600 + posY : 0 }}
                className="expert-item item-3"
              >
              <MkField
                  title="Agile Working"
                  description="Get more done with clear visibility of progress in teams."
                />
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
