require('normalize.css/normalize.css');
require('styles/App.less');
require('./Rem.js');

import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// 自定义components
import Content from './Content';
import Login from './Login';


class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="index">
          <Switch>
            <Route exact path="/index" component={Content} />
            <Route path="/login" component={Login} />
            <Redirect to="/index" />
          </Switch>
        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
