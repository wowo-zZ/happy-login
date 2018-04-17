require('normalize.css/normalize.css');
require('styles/App.less');
require('./Rem.js');

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button onClick={this.alert} >hello</Button>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
