require('styles/Content.less');

import React from 'react';

// ant

//react-bootstrap
import {Grid, Row, Col} from 'react-bootstrap';

class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="show-grid" fluid="true">
        <Row className="show-row">
          <Col className="side-bar" xs={3} md={2} lg={2}>

          </Col>
          <Col className="main-body" xs={9} md={6} lg={10}>
            <Row className="body-header">
            </Row>
            <Row className="body-body">
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Content;

