import React, { Component } from "react";
import PropTypes from "prop-types";

class MkScrollPos extends Component {
  state = {
    position: null
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const scrollTop =
      event.srcElement.body.scrollTop |
      event.srcElement.documentElement.scrollTop;
    this.setState({
      position: scrollTop
    });
  };

  render() {
    return <div className="relative" style={{ height: 650 }}>{this.props.children(this.state.position)}</div>;
  }
}

MkScrollPos.propTypes = {
  children: PropTypes.func.isRequired
};

export default MkScrollPos;
