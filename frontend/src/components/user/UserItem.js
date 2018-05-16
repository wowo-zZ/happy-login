import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class UserItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      info: this.props.info
    };
  }

  del(id, event) {
    event.preventDefault();
    event.stopPropagation();
    if (confirm('是否确定删除id为' + id +'的用户？')) {
      $.ajax({
        url: '/api/user/delete',
        method: 'POST',
        data: {id: id},
        dataType: 'JSON',
        success: (function (res) {
          if (res.flag === 0) {
            // 这就是受控组件啊！
            this.props.refresh();
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
        <td className="field">{this.state.info.desc}</td>
        <td className="field">{this.state.info.pubKey}</td>
        <td>
          <Link to={'/user/detail/' + this.state.info.id}>查看</Link>&nbsp;|&nbsp;
          <Link to={'/user/modify/' + this.state.info.id}>修改</Link>&nbsp;|&nbsp;
          <Link to={'/user/authorize/' + this.state.info.id}>授权</Link>&nbsp;|&nbsp;
          <a onClick={this.del.bind(this, this.state.info.id)}>删除</a>
        </td>
      </tr>
    );
  }
}

export default UserItem;
