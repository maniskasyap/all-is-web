import React, { Component } from "react";

import "./mk-field.css";

class MkField extends Component {
  render() {
    return (
      <div className="field">
        <h1 className="title">{this.props.title}</h1>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}

export default MkField;
