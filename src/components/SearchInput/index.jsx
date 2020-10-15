import React, { Component } from 'react';
import "./style.less"

export default class SearchInput extends Component{
  constructor(){
    super()
    this.state={
      value:''
    }
  }
  render(){
    return(
      <div>
        <input 
          type="text"
          className="search-input"
          value={this.props.value}
          placeholder="请输入搜索内容"
          onKeyUp={this.onKeyUpHandler.bind(this)}
          onChange={(e)=>this.getValueHandler(e)}
          // onChange={this.getValueHandler.bind(this)}
        />
      </div>
    )
  }
  onKeyUpHandler(event){
    console.log(event.keyCode)
    if(event.keyCode === 13){
      console.log(this.props.history.location.pathname)
      let index = this.props.history.location.pathname.indexOf('search')
      console.log(index)
      if(index != -1){
        this.props.history.replace("/search/"+this.state.value)
      }else{
        this.props.history.push("/search/"+this.state.value)
      }
    }
  }
  getValueHandler(event){
    this.setState({
      value:event.target.value
    })
  }
}