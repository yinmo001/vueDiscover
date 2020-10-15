import React, { Component } from 'react';
import "./style.less"

export default class Header extends Component{
  render(){
    return(
      <div id="common-header">
        <span className="back-icon" onClick={this.backPage}>
          <i className="iconfont icon-back"></i>
        </span>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
  backPage=()=>{
    console.log("backPage")
    window.history.back(-1)
    // this.props.history.push("/home")
  }
}