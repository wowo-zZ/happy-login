require('styles/Content.less');

import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

//react-bootstrap
import {Col, Grid, Row} from 'react-bootstrap';

import Server from './Server';
import ServerDetail from './server/ServerDetail';
import ServerModify from './server/ServerModify';
import ServerAdd from './server/ServerAdd';

// ant

class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="show-grid" fluid={true}>
        <Router>
          <Row className="show-row">
            <Col className="side-bar" xs={3} md={2} lg={2}>
              <Link className="side-bar-link-button" to="/content">服务器</Link>
              <Link className="side-bar-link-button" to="/user">用户</Link>
              <Link className="side-bar-link-button" to="/authorize">授权</Link>
            </Col>
            <Col className="main-body" xs={9} md={6} lg={10}>
              <Row className="body-header">

              </Row>
              <Row className="body-body">
                <Switch className="body-switch">
                  <Route exact path="/content" component={Server}/>
                  <Route path="/server/detail/:id" component={ServerDetail}/>
                  <Route path="/server/modify/:id" component={ServerModify}/>
                  <Route path="/server/authorize/:id" component={ServerDetail}/>
                  <Route path="/server/add" component={ServerAdd}/>
                  <Route path="/user"
                         component={() => (<div><span className="no-content-info">this is user form !</span></div>)}/>
                  <Route path="/authorize" component={() => (
                    <div><span className="no-content-info">this is authorize form !</span></div>)}/>
                </Switch>
              </Row>
            </Col>
          </Row>
        </Router>
      </Grid>
    );
  }
}

export default Content;

