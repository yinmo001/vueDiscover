import React, { Component } from 'react';
import "./style.less"
import SearchInput from "../../../components/SearchInput"

export default class SearchHeader extends Component{
  render(){
    return(
      <div id="search-header">
        <span className="back-icon" onClick={this.backPage}>
          <i className="iconfont icon-back"></i>
        </span>
        <div className="input-container">
          <i className="iconfont icon-icon-test4"></i>
          <SearchInput history={this.props.history}/>
        </div>
      </div>
    )
  }
  backPage(){window.history.back(-1)}
}