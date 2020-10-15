import React, { Component } from 'react';
import FootNav from "../../components/FootNav"
import HomeHeader from "./HomeHeader"
import Swiper from "../../components/Swiper"
import HomeHot from "./HomeHot"

import {connect} from "react-redux"

class Home extends Component{
  render(){
    return(
      <div>
        <HomeHeader city={this.props.city.cityName} history={this.props.history}/>
        <Swiper banners={[
          'https://img13.360buyimg.com/da/s590x470_jfs/t1/133291/15/6142/89827/5f292b02Ea0a3e8f9/5f521ec31b1f2fc7.jpg.webp',
          'https://img11.360buyimg.com/pop/s590x470_jfs/t1/130060/33/5640/62151/5f22b6dbEdc828f27/9e9f889048fe5003.jpg.webp',
          'https://img13.360buyimg.com/da/s590x470_jfs/t1/130318/40/6174/66157/5f28ef16Eaf24b188/33472d9e8cfba9b7.jpg.webp'
        ]}/>
        <HomeHot city={this.props.city.cityName}/>
        <FootNav />
      </div>
    )
  }
}

// 读取方案
const mapStateToProps = state => {
  return{
    city:state.city
  }
}

export default connect(mapStateToProps)(Home)