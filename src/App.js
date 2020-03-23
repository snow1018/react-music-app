import "./App.less";
import { Icon, Tabs } from "antd";
// import Login from "../src/views/login";
import Home from "../src/views/home";
import React from "react";
import { BrowserRouter as Router, Route,Switch  } from "react-router-dom";
import routes from '../src/router'
import { Provider } from 'react-redux'


class App extends React.Component {


  render() {
    // const { TabPane } = Tabs;
    console.log(routes[2].component)
    return (
      // <Router>
      //   <div id="root" className="App">
      //     <Route path="/" component={Home}></Route>
      //   </div>
      // </Router>

      <Provider>
        <Router>
          <Switch>
              {/* 导入相关路由配置 */}
              {routes.map((r, key) => <Route component={r.component} exact={!!r.exact} key={key} path={r.path} />)}

          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
