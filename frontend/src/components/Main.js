require('normalize.css/normalize.css');
require('styles/App.less');
require('./Rem.js');

import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';



// 自定义components
import Content from './Content';
import Login from './Login';
import {checkLogin, pageIs} from '../utils/ULogin';


class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // 如果未登录，则跳转login
    if (!checkLogin() && !(pageIs('/login'))) {
      window.location.href = '/login';
    }
  }

  render() {
    return (
      <Router>
        <div className="index">
          <Switch>
            <Route exact path="/welcome" component={Content}/>
            <Route path="/server" component={Content}/>
            <Route path="/user" component={Content}/>
            <Route path="/login" component={Login}/>
            <Redirect to="/welcome"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
