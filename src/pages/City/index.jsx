import React, { Component } from 'react';
import CityHeader from "../../components/Header"
import CurrentCity from "./CurrentCity"
import HotCity from "./HotCity"
import {bindActionCreators} from "redux"
import * as cityActions from "../../actions/city"

import {connect} from "react-redux"

class City extends Component{
  render(){
    return(
      <div>
        <CityHeader title="城市选择"/>
        <CurrentCity city={this.props.city.cityName}/>
        <HotCity cityNameHandler={this.onCityNameHandler}/>
      </div>
    )
  }
  onCityNameHandler= (city) =>{
    this.props.cityActions.updateCity({
      cityName:city
    })
    window.history.back(-1)
    localStorage.setItem("city",city)
  }
}

// 读取方案
const mapStateToProps = state => {
  return{
    city:state.city
  }
}

// 写
const mapDispatchToProps = dispatch => {
  return{
    cityActions:bindActionCreators(cityActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)