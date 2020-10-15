import React, { Component } from 'react';
import "./style.less"
import SwipeableViews from "react-swipeable-views"
import Pagination from "./Pagination"

export default class Swiper extends Component{
  constructor(){
    super()
    this.state={
      currentIndex:0
    }
  }
  render(){
    const banners = this.props.banners
    return(
      <div className="swiper">
        <SwipeableViews onChangeIndex={this.handleChangeIndex}>
          {
            banners.map((item,index)=>{
              return(
                <div key={index} className="swiper-view">
                  <img src={item} />
                </div>
              )
            })
          }
        </SwipeableViews>
        <Pagination dots={banners.length} index={this.state.currentIndex}/>
      </div>
    )
  }
  handleChangeIndex= index => {
    this.setState({
      currentIndex:index
    })
  }
}