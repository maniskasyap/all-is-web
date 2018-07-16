import React, { Component } from "react";
import { CanvasSpace, Pt, Group, Num, Create } from "pts";
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
    // animation
    this.spacePaper.add((time, ftime) => {
      if (!pts) pts = Create.distributeRandom(this.spacePaper.innerBound, 100);

      let t = this.spacePaper.pointer;
      pts.sort(
        (a, b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq()
      );

      this.formPencil.fillOnly("#fff").points(pts, 1, "circle");
      // this.formPencil.fill("#f03").point(pts[0], 10, "circle");
      // this.formPencil.strokeOnly("#f03", 2).line([pts[0], this.spacePaper.pointer]);
    });

    // this.spacePaper.add((time, ftime) => {
    //   let radius = Num.cycle((time % 1000) / 1000) * 20;
    //   this.formPencil
    //     .fill("#f00")
    //     .point(this.spacePaper.pointer, radius, "circle");
    // });
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
