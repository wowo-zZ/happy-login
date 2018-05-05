import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class ServerDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentWillMount() {
    let data = [];
    $.ajax({
      url: '/api/server',
      method: 'get',
      data: {id: this.props.match.params.id},
      dateType: 'json',
      async: false,
      success: function (response) {
        response = JSON.parse(response);
        data = response.data;
      }
    });
    this.setState({
      data: data
    });
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
