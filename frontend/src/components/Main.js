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
        <div>
          <Switch>
            <Route exact to="/" component={Content} />
            <Route to="/index" component={Content} />
            <Route to="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
