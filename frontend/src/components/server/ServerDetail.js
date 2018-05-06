import React from 'react';
import $ from 'jquery';
import {Grid, Row} from 'react-bootstrap';
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
      url: '/api/server/get',
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
      <div>
        <Link to="/content">&lt;&lt;返回</Link>
        <Grid>
          <Row>
            <label>id:</label>{this.state.data.id}
          </Row>
          <Row>
            <label>主机名称:</label>{this.state.data.name}
          </Row>
          <Row>
            <label>OS类型:</label>{this.state.data.os_type}
          </Row>
          <Row>
            <label>OS版本:</label>{this.state.data.os_version}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ServerDetail;
