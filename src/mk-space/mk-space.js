import React, { Component } from "react";
import "./mk-space.css";

let drawSpace = () => {
  let spaceCanvas = document.getElementById("space");

  if (spaceCanvas.getContext) {
    var ctx = spaceCanvas.getContext("2d");

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.strokeStyle = "rgb(200, 0, 0)";
    // ctx.fillRect(75, 76, 50, 50);

    // ctx.beginPath();
    // ctx.moveTo(75, 50);
    // ctx.lineTo(100, 75);
    // ctx.lineTo(100, 25);
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false);
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, false);
    // ctx.moveTo(60, 65);
    // ctx.arc(55, 65, 5, 0, Math.PI * 2, false);
    // ctx.fill();
    // ctx.stroke();
    ctx.font = '48px serif';
    ctx.strokeText('Hello world', 10, 50);
  }
};

class MkSpace extends Component {
  componentDidMount() {
    drawSpace();
  }

  render() {
    return (
      <div className="canvas">
        <canvas id="space" />
      </div>
    );
  }
}

export default MkSpace;
