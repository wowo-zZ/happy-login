import React from 'react';

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
      </tr>
    );
  }
}

export default ServerItem;
