import React, { Component } from 'react';
import api from "../../../api"
import HomeHotView from "./HomeHotView"

export default class HomeHot extends Component{
  constructor(){
    super()
    this.state = {
      homehot1:[],
      homehot2:[]
    }
  }
  componentDidMount(){
    const city = this.props.city
    api.homehot.homehot1Data(city)
    .then(res => res.json())
    .then(data => {// 后一个then使用前一个then的封装结果
      this.setState({homehot1:data})
    })
    api.homehot.homehot2Data(city)
    .then(res => res.json())
    .then(data => {
      this.setState({homehot2:data})
    })
  }
  render(){
    const {homehot1,homehot2} = this.state
    return(
      <div>
        {
          homehot1.length?
          <HomeHotView data={homehot1} title="热门单品"/>
          : <div>正在请求数据</div>
        }
        {
          homehot2.length?
          <HomeHotView data={homehot2} title="家庭常用"/>
          : <div>正在请求数据</div>
        }
      </div>
    )
  }
}