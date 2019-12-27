import "./App.less";
import { Icon, Tabs } from "antd";
// import Login from "../src/views/login";
import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from '../src/router'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1528553_cdzlv5y0gpr.js"
});

class App extends React.Component {


  render() {
    const { TabPane } = Tabs;
    return (

      <div className="App">
        <Suspense fallback={<div></div>}>
          <BrowserRouter>
            {
              //遍历配置文件，生成路由列表
              routes.map((route) => {
                return (
                  //路由配置中的全部属性作为Route的属性
                  <Route {...route} />
                )
              })
            }
          </BrowserRouter>
        </Suspense>
        {/* <Login></Login> */}
      </div>
    );
  }
}

export default App;
