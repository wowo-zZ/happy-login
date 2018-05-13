import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

import '../../styles/ServerAdd.less';
import FieldGroup from '../common/FieldGroup';

class ServerAdd extends React.Component {

  constructor(props) {
    super(props);

    let OsTypeVersion = require('../../data/OsTypeVersion.json');
    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <form>
        <FieldGroup
          id="serverName"
          type="text"
          label="主机名:"
          placeholder="请输入主机名"
          className="server-name"
        />
        <FieldGroup
          id="formIP"
          type="text"
          label="主机IP:"
          placeholder="请输入主机IP"
          className="server-ip"
        />
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>root秘钥:</ControlLabel>
          <FormControl componentClass="textarea" placeholder="请输入该机器的root秘钥" />
        </FormGroup>
        <div className="clear-both"/>
        <FormGroup controlId="osType">
          <ControlLabel>操作系统:</ControlLabel>
          <FormControl componentClass="select" placeholder="选择操作系统:">
            <option value="centos">CentOS</option>
            <option value="ubuntu">Ubuntu</option>
          </FormControl>
        </FormGroup>
        <div className="clear-both"/>
        <FormGroup controlId="osVersion">
          <ControlLabel>系统版本:</ControlLabel>
          <FormControl componentClass="select" placeholder="选择系统版本:">
          </FormControl>
        </FormGroup>
        <div className="clear-both"/>
        <Button type="submit">
          提交
        </Button>
      </form>
    );
  }
}

export default ServerAdd;
