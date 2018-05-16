import React from 'react';
import $ from 'jquery';
import Table from 'react-bootstrap/lib/Table';
import {Link} from 'react-router-dom';

import UserItem from './user/UserItem';

require('styles/User.less');

class User extends React.Component {
  constructor(props) {
    super(props);

    this.refreshUserList = this.refreshUserList.bind(this);

    this.state = {
      users: []
    };
  }

  refreshUserList() {
    let users = null;
    $.ajax({
      url: 'api/user/list',
      method: 'get',
      async: false,
      dataType: 'json',
      success: function (res) {
        users = res.data;
      }
    });
    this.setState({
      users: users
    });
  }

  componentWillMount() {
    this.refreshUserList();
  }

  render() {
    let userList = '';
    if (this.state.users.length > 0) {
      userList = this.state.users.map(function (user) {
        return (
          <UserItem info={user} refresh={this.refreshServerList}/>
        );
      });
    } else {
      userList = <span className="no-content-info">暂时还没有服务器信息</span>
    }

    return (
      <div className="content">
        <Link to='/user/add'>新增用户</Link>
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
