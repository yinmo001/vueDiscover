import React, { Component } from 'react';
import api from "../../../api"

export default class SearchList extends Component{
  // 在页面挂载完执行，只执行一次。
  componentDidMount(){
    console.log(this.props)
    const content = this.props.content
    this.http(content)
  }
  http(content){
    const city = this.props.city
    
    api.search.searchData(city,content)
    .then(res => res.json())
    .then(data => {

    })
  }
  // 父组件中改变了props传值时触发的函数
  componentWillReceiveProps(newProps){
    console.log(newProps)
  }
  // shouldComponentUpdate(){
  //   console.log("shouldComponentUpdate")
  //   return false
  // }
  // 在更新之前
  componentWillUpdate(newProps){
    console.log(newProps)
    if(newProps.content === this.props.content){
      return
    }else{
      this.http(newProps.content)
    }
  }
  render(){
    return(
      <div>
      搜索列表
      </div>
    )
  }
}