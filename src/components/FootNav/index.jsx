import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import "./style.less"

export default class Home extends Component{
  render(){
    return(
      <div className="nav-footer">
        <ul>
          <li>
            <NavLink exact to="/">
              <span>首页</span>
              <i className="iconfont icon-Homehomepagemenu"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">商城
              <i className="iconfont icon-gouwuchekong"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/life">生活服务
              <i className="iconfont icon-mulu"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mine">我的
              <i className="iconfont icon-My"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}