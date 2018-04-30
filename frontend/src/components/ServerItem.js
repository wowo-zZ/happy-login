import React from 'react';

import Button from 'react-bootstrap/lib/Button';

class ServerItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      info: this.props.info
    };
  }

  render() {
    return (
      <tr>
        <td>{this.state.info.id}</td>
        <td>{this.state.info.name}</td>
        <td>{this.state.info.os_type}</td>
        <td>{this.state.info.os_version}</td>
        <td>
          <Button>查看</Button>
          <Button>修改</Button>
          <Button>授权</Button>
          <Button>删除</Button>
        </td>
      </tr>
    );
  }
}

export default ServerItem;
