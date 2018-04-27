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
    $.ajax({
      url: 'api/server/get',
      method: 'POST',
      data: {},
      dataType: 'json',
      success: (function(res) {
        this.setState(JSON.parse(res));
      }).bind(this)
    });
  }

  render() {
    let serverList = '';
    if (this.state.servers.length > 0) {
      serverList = this.state.servers.map(function () {
        return (
          <div>aaa</div>
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
