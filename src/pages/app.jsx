import React, { Component } from 'react';
import {connect} from "react-redux"
import * as cityActions from "../actions/city"
import {bindActionCreators} from "redux"

class App extends Component{
  componentDidMount(){
    const city = localStorage.getItem("city")
    this.props.cityActions.initCity({
      cityName:city||"北京"
    })
  }
  render(){
    return(
      <div>
        {this.props.children}
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

// 写
const mapDispatchToProps = dispatch => {
  return{
    cityActions:bindActionCreators(cityActions,dispatch)
  }
}
//此时boundActionCreators  = (data) => dispatch(cityActions(data));

// 连接
// connect方法的作用是连接react组件和redux store，
// 也就是说通过connect方法子组件可以获取store中的state和dispatch。
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)