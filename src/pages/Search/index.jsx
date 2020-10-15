import React, { Component } from 'react';
import SearchHeader from "./SearchHeader"
import SearchList from "./SearchList"
import api from "../../api"
import {connect} from "react-redux"

class Search extends Component{
  componentDidMount(){
    const city = this.props.city.cityName
    const content = this.props.match.params.content
    api.search.searchData(city,content)
    .then(res => res.json())
    .then(data => {

    })
  }
  render(){
    return(
      <div>
        <SearchHeader history={this.props.history}/>
        <SearchList city = {this.props.city.cityName} 
        content = {this.props.match.params.content}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    city:state.city
  }
}

export default connect(mapStateToProps)(Search)