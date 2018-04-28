import React from 'react';
import $ from 'jquery';

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
      success: function(res) {
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
          <div>
            <ServerItem info={server} />
          </div>
        );
      });
    } else {
      serverList = <span className="no-content-info">暂时还没有服务器信息</span>
    }

    return (
      <div className="content">
        {serverList}
      </div>
    );
  }
}

export default Server;
