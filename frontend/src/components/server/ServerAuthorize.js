import React from 'react';
import {Link} from 'react-router-dom';

class ServerDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      info: []
    };
  }

  render() {
    return (
      <tr>
        <td className="field">1</td>
        <td className="field">2</td>
        <td>
            <Link to="/">查看</Link>
            <Link to="/">查看</Link>
            <Link to="/">查看</Link>
            <Link to="/">查看</Link>
        </td>
      </tr>
    );
  }
}

export default ServerDetail;
