import React, { Component } from "react";
import './index.css';
import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';

import Home from './pages/Home';
import Mainlayout from './pages/Main-layout';
import Outcometransactions from './pages/Outcome-based-transactions';
import Partners from './pages/Partners';
import Outcomes from './pages/Outcomes';
import Dataintegration from './pages/Data-integration';
import Users from './pages/Users';
import Support from './pages/Support';

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
    <Router history={browserHistory}>
      <Mainlayout>
         <Route path='/home' component={Home}></Route>
         <Route path='/outcometransactions' component={Outcometransactions}></Route>
         <Route path='/partners' component={Partners}></Route>
         <Route path='/outcomes' component={Outcomes}></Route>
         <Route path='/dataintegration' component={Dataintegration}></Route>
         <Route path='/users' component={Users}></Route>
         <Route path='/support' component={Support}></Route>
    </Mainlayout>
    </Router>
    );
  }
}
