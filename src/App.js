import React, { Component } from "react";
// import Button from "antd/lib/button";
// import { Button } from "antd";
// import { Layout } from "antd";
import MkIntro from "./mk-intro/mk-intro";
import "./App.css";
import "./fonts/Raleway-Black.ttf";
import "./fonts/Raleway-SemiBold.ttf";

// const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <MkIntro />
        {/* this will contain stuff - coming soon !!!
        <Layout>
          <Header>header</Header>
          <Layout>
            <Sider>left sidebar</Sider>
            <Content>main content</Content>
            <Sider>right sidebar</Sider>
          </Layout>
          <Footer>footer</Footer>
        </Layout> */}
        {/* <Button type="primary">Button</Button> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
