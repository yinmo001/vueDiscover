import React, { Component } from 'react';
import PropsType from 'prop-types'

class Child extends Component{
  constructor(props){
    super(props)

  }
  render(){
    return (
      <li onClick={this.handleClick.bind(this)}>
        {this.props.name+this.props.content}
      </li>
    )
  }
  handleClick(){
    this.props.deleteItem(this.props.index)
  }
}
Child.propsType={
  content:PropsType.string
}
Child.defaultProps={
  name:'007'
}
export default Child