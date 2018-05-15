import React from 'react';
import $ from 'jquery';
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

import '../../styles/ServerAdd.less';
import FieldGroup from '../common/FieldGroup';

class ServerAdd extends React.Component {


  constructor(props) {
    super(props);
    this.OsTypeVersion = require('../../data/OsTypeVersion.json');
    this.changeOsType = this.changeOsType.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      OsType: 'CentOS'
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  changeOsType(e) {
    this.setState({
      OsType: e.target.value
    });
  }

  submit(e) {
    e.stopPropagation();
    e.preventDefault();

    let serverName = $('#serverName').val(),
      IP = $('#IP').val(),
      sshKey = $('#sshKey').val(),
      osType = $('#osType').val(),
      osVersion = $('#osVersion').val();

    $.ajax({
      url: '/api/server/add',
      method: 'POST',
      data: {
        'serverName': serverName,
        'IP': IP,
        'sshKey': sshKey,
        'osType': osType,
        'osVersion': osVersion
      },
      dataType: 'json',
      success: (function (res) {
        console.log(res);
        alert ('添加成功');
        this.props.history.push('/server');
      }).bind(this)
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
          id="IP"
          type="text"
          label="主机IP:"
          placeholder="请输入主机IP"
          className="server-ip"
        />
        <FormGroup controlId="sshKey">
          <ControlLabel>root秘钥:</ControlLabel>
          <FormControl componentClass="textarea" placeholder="请输入该机器的root秘钥"/>
        </FormGroup>
        <div className="clear-both"/>
        <FormGroup controlId="osType">
          <ControlLabel>操作系统:</ControlLabel>
          <FormControl onChange={this.changeOsType} componentClass="select" placeholder="选择操作系统:">
            <option value="CentOS">CentOS</option>
            <option value="Ubuntu">Ubuntu</option>
          </FormControl>
        </FormGroup>
        <div className="clear-both"/>
        <FormGroup controlId="osVersion">
          <ControlLabel>系统版本:</ControlLabel>
          <FormControl componentClass="select" placeholder="选择系统版本:">
            {this.OsTypeVersion[this.state.OsType].map(function (OsVersion) {
              return <option key={OsVersion} value={OsVersion}>{OsVersion}</option>
            })}
          </FormControl>
        </FormGroup>
        <div className="clear-both"/>
        <Button type="submit" onClick={this.submit}>
          提交
        </Button>
      </form>
    );
  }
}

export default ServerAdd;
