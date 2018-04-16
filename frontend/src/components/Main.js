require('normalize.css/normalize.css');
require('styles/App.less');
require('./Rem.js');

import React from 'react';
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
