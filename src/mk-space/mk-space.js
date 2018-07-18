import React, { Component } from "react";
import { CanvasSpace, Create } from "pts";
import "./mk-space.css";

class MkSpace extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.spaceCanvasRef = React.createRef();
  //   }

  drawSpace = () => {
    // this.spacePaper = new CanvasSpace(this.spaceCanvasRef.current);
    this.spacePaper = new CanvasSpace("spaceCanvas");
    this.spacePaper.setup({ bgcolor: "#252934", resize: true });
    this.formPencil = this.spacePaper.getForm();
    var pts = undefined;
    this.spacePaper.add({
      start: (bound, space) => {
        if (!pts) pts = Create.distributeRandom(space.innerBound, 150);
      },
      animate: (time, ftime, space) => {
        let t = this.spacePaper.pointer;
        pts.sort(
          (a, b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq()
        );
        this.formPencil.fillOnly("#fff").points(pts, 0.5, "circle");
        let ten = pts.slice(0, 10);
        this.formPencil.fillOnly("#fff").points(ten, 1.5, "circle");
      }
    });
    this.spacePaper.bindMouse();
    this.spacePaper.play();
  };

  componentDidMount() {
    this.drawSpace();
  }

  render() {
    return (
      <div className="space-canvas">
        {/* <canvas ref="{this.spaceCanvasRef}" /> */}
        <canvas id="spaceCanvas" />
      </div>
    );
  }
}

export default MkSpace;
