import React, { Component } from 'react';
import "./style.less"
import {Link} from "react-router-dom"
import SearchInput from "../../../components/SearchInput"

export default class Home extends Component{
  render(){
    return(
      <div id="home-header">
        <div className="home-header-left">
          <Link to="/city">
          <span>{this.props.city}</span>
          </Link>
          <i className="iconfont icon-down"></i>
          <i className=""></i>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="iconfont icon-icon-test4"></i>
            <SearchInput history={this.props.history}/>
          </div>
        </div>
        <div className="home-header-right">
          <i className="iconfont icon-gouwuchekong"></i>
        </div>
      </div>
    )
  }
}