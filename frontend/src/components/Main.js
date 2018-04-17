require('normalize.css/normalize.css');
require('styles/App.less');
require('./Rem.js');

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigator from './Navigator';
import Content from './Content';


class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Navigator/>
          <Switch>
            <Route to="" component={Content} />
          </Switch>
        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
