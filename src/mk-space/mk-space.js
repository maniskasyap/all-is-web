import React, { Component } from "react";
import { CanvasSpace, Pt, Group, Num } from "pts";
import "./mk-space.css";

class MkSpace extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.spaceCanvasRef = React.createRef();
  //   }

  drawSpace = () => {
    // this.spacePaper = new CanvasSpace(this.spaceCanvasRef.current);
    this.spacePaper = new CanvasSpace("spaceCanvas");
    this.spacePaper.setup({ bgcolor: "#252934" });
    this.formPencil = this.spacePaper.getForm();

    this.spacePaper.add((time, ftime) => {
        let radius = Num.cycle((time % 1000) / 1000) * 20;
      this.formPencil.fill("#f00").point(this.spacePaper.pointer, radius, "circle");
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
