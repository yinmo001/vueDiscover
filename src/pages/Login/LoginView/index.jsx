import React, { Component } from 'react';


export default class LoginView extends Component{
  render(){
    return(
      <div>
        <input placeholder="请输入手机号"/>
        <input placeholder="请输入验证码"/>
        <button onClick={this.loginHandler.bind(this)}>登录</button>
      </div>
    )
  }
  loginHandler(){
    // 调用父组件方法
    // 用户信息的存储：redux/本地
    this.props.onLoginHandler()
  }
}