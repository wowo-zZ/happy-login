require('styles/Content.less');

import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

//react-bootstrap
import {Col, Grid, Row} from 'react-bootstrap';

import Server from './Server';
import ServerDetail from './server/ServerDetail';
import ServerModify from './server/ServerModify';
import ServerAdd from './server/ServerAdd';


import User from './User';
import UserDetail from './user/UserDetail';
import UserModify from './user/UserModify';
import UserAdd from './user/UserAdd';

import Welcome from './Welcome';

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
              <Link className="side-bar-link-button" to="/server">服务器</Link>
              <Link className="side-bar-link-button" to="/user">用户</Link>
              <Link className="side-bar-link-button" to="/authorize">授权</Link>
            </Col>
            <Col className="main-body" xs={9} md={6} lg={10}>
              <Row className="body-header">

              </Row>
              <Row className="body-body">
                <Switch className="body-switch">
                  // server
                  <Route exact path="/server" component={Server}/>
                  <Route exact path="/welcome" component={Welcome}/>
                  <Route path="/server/detail/:id" component={ServerDetail}/>
                  <Route path="/server/modify/:id" component={ServerModify}/>
                  <Route path="/server/authorize/:id" component={ServerDetail}/>
                  <Route path="/server/add" component={ServerAdd}/>

                  // user
                  <Route path="/user" component={User}/>
                  <Route path="/user/detail/:id" component={UserDetail}/>
                  <Route path="/user/modify/:id" component={UserModify}/>
                  <Route path="/user/authorize/:id" component={UserDetail}/>
                  <Route path="/user/add" component={UserAdd}/>

                  // authorize
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

