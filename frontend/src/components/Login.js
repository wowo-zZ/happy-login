require('styles/Login.less');

import React from 'react';
import {Button} from 'react-bootstrap';
import $ from 'jquery';

import {checkLogin} from "../utils/ULogin";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    $.ajax({
      url: "/api/login",
      method: "POST",
      data: {username: $('.username-value').val(), password: $('.password-value').val()},
      dataType: "json",
      success: function(res) {
        if (res.flag !== 0) {
          alert("登录失败");
        } else {
          window.location.href = "/";
        }
      }
    });
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
            <input className="username-value" type="text"/>
          </div>

          <div className="password">
            <label>密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
            <input className="password-value" type="password"/>
          </div>

          <div className="submit">
            <Button bsStyle="info" onClick={this.login}> 登&nbsp;&nbsp;录</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default Login;
