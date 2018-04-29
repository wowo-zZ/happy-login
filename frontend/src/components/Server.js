import React from 'react';
import $ from 'jquery';
import Table from 'react-bootstrap/lib/Table';

import ServerItem from './ServerItem';

require('styles/Server.less');

class Server extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      servers: []
    };
  }

  componentWillMount() {
    let servers = null;
    $.ajax({
      url: 'api/getServer',
      method: 'POST',
      async: false,
      data: {},
      dataType: 'json',
      success: function (res) {
        console.log(res);
        servers = res.data;
      }
    });
    console.log(servers);
    this.setState({
      servers: servers
    });
  }

  render() {
    let serverList = '';
    if (this.state.servers.length > 0) {
      serverList = this.state.servers.map(function (server) {
        return (
          <ServerItem info={server}/>
        );
      });
    } else {
      serverList = <span className="no-content-info">暂时还没有服务器信息</span>
    }

    return (
      <div className="content">
        <Table>
          <thead>
          <th>#</th>
          <th>主机名称</th>
          <th>OS类型</th>
          <th>OS版本</th>
          </thead>
          <tbody>
          {serverList}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Server;
