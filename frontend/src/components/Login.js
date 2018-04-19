require('styles/Login.less');

import React from 'react';
import {Button} from 'react-bootstrap';

import {checkLogin} from "../utils/ULogin";

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (checkLogin()) {
      window.location.href = '/index';
    }
  }

  render() {
    return (
      <div className="main">
        <img className="logo" src={require('../images/logo.png')}/>
        <div className="login-panel">
          <div className="username">
            <label>用户名:</label>
            <input type="text"/>
          </div>

          <div className="password">
            <label>密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
            <input type="text"/>
          </div>

          <div className="submit">
            <Button bsStyle="info"> 登&nbsp;&nbsp;录</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default Login;
