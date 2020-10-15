import React, { Component } from 'react';
import "./style.less"

export default class Pagination extends Component{
  render(){
    const dots = this.props.dots
    const dotsArr = new Array(dots).fill(1)
    const currIndex = this.props.index
    return(
      <div className="swiper-pagination">
        <ul>
          {
            dotsArr.map((item,index)=>{
              return(
                <li className={currIndex==index?"selected":""} key={index}></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}