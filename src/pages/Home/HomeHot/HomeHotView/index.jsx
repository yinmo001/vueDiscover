import React, { Component } from 'react';
import "./style.less"

export default class HomeHotView extends Component{
  render(){
    const data = this.props.data
    return(
      <div className="hot-product">
        <h3>{this.props.title}</h3>
        <ul className="hot-container">
          {
            data.map((item,index) => {
              return(
                <li key={index}>
                  <a href={item.link}>
                    <img src={item.img} alt={item.title}/>
                    <span>{item.title}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}