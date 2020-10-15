import React, { Component } from 'react';
import LoginView from "./LoginView"


export default class Login extends Component{
  render(){
    return(
      <div>
        <LoginView onLoginHandler={this.loginHandler.bind(this)}/>
      </div>
    )
  }
  loginHandler(){
    console.log('dl')
  }
}