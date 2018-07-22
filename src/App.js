import React, { Component } from "react";
// import Button from "antd/lib/button";
// import { Button } from "antd";
// import { Layout } from "antd";
import MkIntro from "./mk-intro/mk-intro";
import MkExpert from "./mk-expert/mk-expert";
import "./App.css";
// import "./fonts/Raleway-Black.ttf";
// import "./fonts/Raleway-SemiBold.ttf";

// const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <MkIntro />
        <MkExpert />
        <div style={{ height: 1500 }} />
      </div>
    );
  }
}

export default App;
