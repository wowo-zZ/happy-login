import React from 'react';
import $ from 'jquery';
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

import FieldGroup from '../common/FieldGroup';

class ServerModify extends React.Component {

  constructor(props) {
    super(props);
    this.OsTypeVersion = require('../../data/OsTypeVersion.json');
    this.changeOsType = this.changeOsType.bind(this);
    this.loadServer = this.loadServer.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      OsType: 'CentOS',
      OsVersion: '',
      serverName: '',
      IP: '',
      sshKey: ''
    };
  }

  loadServer() {
    $.ajax({
      url: '/api/server/get',
      method: 'get',
      data: {id: this.props.match.params.id},
      dataType: 'json',
      async: false,
      success: (function (res) {
        this.setState({
            OsType: res.data.os_type,
            OsVersion: res.data.os_version,
            serverName: res.data.name,
            IP: res.data.ip,
            sshKey: res.data.sshKey
          }
        );
      }).bind(this)
    })
  }

  componentWillMount() {
    this.loadServer();
  }

  changeOsType(e) {
    this.setState({
      OsType: e.target.value
    });
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

  submit(e) {
    e.stopPropagation();
    e.preventDefault();

    let id = $('#id').val(),
      serverName = $('#serverName').val(),
      IP = $('#IP').val(),
      sshKey = $('#sshKey').val(),
      osType = $('#osType').val(),
      osVersion = $('#osVersion').val();

    $.ajax({
      url: '/api/server/modify',
      method: 'POST',
      data: {
        'id': id,
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
        <input type="hidden" id="id" value={this.props.match.params.id} />
        <FieldGroup
          id="serverName"
          type="text"
          label="主机名:"
          placeholder="请输入主机名"
          className="server-name"
          defaultValue={this.state.serverName}
        />
        <FieldGroup
          id="IP"
          type="text"
          label="主机IP:"
          placeholder="请输入主机IP"
          className="server-ip"
          defaultValue={this.state.IP}
        />
        <FormGroup controlId="sshKey">
          <ControlLabel>root秘钥:</ControlLabel>
          <FormControl componentClass="textarea" placeholder="请输入该机器的root秘钥" defaultValue={this.state.sshKey}/>
        </FormGroup>
        <div className="clear-both"/>
        <FormGroup controlId="osType">
          <ControlLabel>操作系统:</ControlLabel>
          <FormControl onChange={this.changeOsType} componentClass="select" defaultValue={this.state.OsType}>
            <option value="CentOS">CentOS</option>
            <option value="Ubuntu">Ubuntu</option>
          </FormControl>
        </FormGroup>
        <div className="clear-both"/>
        <FormGroup controlId="osVersion">
          <ControlLabel>系统版本:</ControlLabel>
          <FormControl componentClass="select" defaultValue={this.state.OsVersion}>
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

export default ServerModify;
