import React, { Component } from "react";
import './index.css';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import Home from './pages/Home';
import Mainlayout from './pages/Main-layout';
import Outcometransactions from './pages/Outcome-based-transactions';
import Partners from './pages/Partners';
import Outcomes from './pages/Outcomes';
import Dataintegration from './pages/Data-integration';
import Users from './pages/Users';
import Support from './pages/Support';

const browserHistory = createBrowserHistory();

let App = class App extends Component {
  render() {
    return React.createElement(
      Router,
      { history: browserHistory },
      React.createElement(
        Mainlayout,
        null,
        React.createElement(Route, { path: '/home', component: Home }),
        React.createElement(Route, { path: '/outcometransactions', component: Outcometransactions }),
        React.createElement(Route, { path: '/partners', component: Partners }),
        React.createElement(Route, { path: '/outcomes', component: Outcomes }),
        React.createElement(Route, { path: '/dataintegration', component: Dataintegration }),
        React.createElement(Route, { path: '/users', component: Users }),
        React.createElement(Route, { path: '/support', component: Support })
      )
    );
  }
};
export { App as default };