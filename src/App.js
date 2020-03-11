import "./App.less";
import { Icon, Tabs } from "antd";
// import Login from "../src/views/login";
import Home from "../src/views/home";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from '../src/router'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1528553_cdzlv5y0gpr.js"
});

class App extends React.Component {


  render() {
    // const { TabPane } = Tabs;
    return (
      <Router>
        <div id="root" className="App">
          <Route path="/" component={Home}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
