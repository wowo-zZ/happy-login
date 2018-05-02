import React from 'react';
import $ from 'jquery';
import Table from 'react-bootstrap/lib/Table';

import UserItem from './UserItem';

require('styles/User.less');

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      servers: []
    };
  }

  componentWillMount() {
    let users = null;
    $.ajax({
      url: 'api/getUser',
      method: 'POST',
      async: false,
      data: {},
      dataType: 'json',
      success: function (res) {
        console.log(res);
        users = res.data;
      }
    });
    console.log(users);
    this.setState({
      users: users
    });
  }

  render() {
    let userList = '';
    if (this.state.users.length > 0) {
      userList = this.state.users.map(function (user) {
        return (
          <UserItem info={user}/>
        );
      });
    } else {
      userList = <span className="no-content-info">暂时还没有服务器信息</span>
    }

    return (
      <div className="content">
        <Table>
          <thead>
          <th>#</th>
          <th>用户名</th>
          <th>备注</th>
          <th>ssh key</th>
          <th>操作</th>
          </thead>
          <tbody>
          {userList}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default User;
