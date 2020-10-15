import React, { Component } from 'react';

export default class HotCity extends Component{
  render(){
    return(
      <div>
        <h3>热门城市</h3>
        <ul>
          <li onClick={this.clickCity.bind(this,"北京")}>北京</li>
          <li onClick={this.clickCity.bind(this,"上海")}>上海</li>
          <li onClick={this.clickCity.bind(this,"广州")}>广州</li>
        </ul>
      </div>
    )
  }
  clickCity(city){
    this.props.cityNameHandler(city)
    console.log(city)
  }
}