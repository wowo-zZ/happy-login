import React from 'react';
import {Jumbotron} from 'react-bootstrap';

class Welcome extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>轻松免密登录</h1>
        <p>使用本系统，你可以方便的管理同一网络中的用户访问，实现免密登录。</p>
      </Jumbotron>
    );
  }
}

export default Welcome;
