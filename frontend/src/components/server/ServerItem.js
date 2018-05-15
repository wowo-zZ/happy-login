import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class ServerItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      info: this.props.info
    };
  }

  del(id, event) {
    event.preventDefault();
    event.stopPropagation();
    if (confirm('是否确定删除id为' + id +'的服务器？')) {
      $.ajax({
        url: '/server/delete',
        method: 'POST',
        data: {id: id},
        dataType: 'JSON',
        success: (function (res) {
          if (res.success === 0) {
            alert('删除成功');
            this.props.history.push('/server');
          } else {
            alert('删除失败');
          }
        }).bind(this)
      });
    }
  }

  render() {
    return (
      <tr>
        <td className="field">{this.state.info.id}</td>
        <td className="field">{this.state.info.name}</td>
        <td className="field">{this.state.info.os_type}</td>
        <td className="field">{this.state.info.os_version}</td>
        <td>
            <Link to={'/server/detail/' + this.state.info.id}>查看</Link>&nbsp;|&nbsp;
            <Link to={'/server/modify/' + this.state.info.id}>修改</Link>&nbsp;|&nbsp;
            <Link to={'/server/authorize/' + this.state.info.id}>授权</Link>&nbsp;|&nbsp;
            <a onClick={this.del.bind(this, this.state.info.id)}>删除</a>
        </td>
      </tr>
    );
  }
}

export default ServerItem;
