import React, { Component } from 'react';
import PropTypes from 'prop-types'

// class关键字创建组件==========
// 有状态组件，有state属性(私有数据)、生命周期函数
// 子类的继承
class BItem extends Component{
  // 类的构造器
  constructor(props){
    // 在 constructor 中必须调用 super 方法，因为子类没有自己的 this 对象，而是继承父类的 this 对象,super代表了父类的构造函数
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
  // static修饰的静态属性或静态方法
  static info = "静态属性"
  // 类的原型对象的实例方法
  // render函数：渲染当前组件对应的DOM元素=============
  render(){
    return (
    <li style={{color:'red'}} onClick={this.handleClick}>{this.props.name+this.props.content}</li>
    )
  }
  // 子组件调用父组件方法（依赖于父组件向子组件传值）
  handleClick(){
    this.props.deleteItem(this.props.index)
  }
}
// 传值校验
BItem.propTypes={
  name:PropTypes.string.isRequired,
  content:PropTypes.string,
  index:PropTypes.number,
  deleteItem:PropTypes.func
}
BItem.defaultProps={
  name:'vava'
}
// 组件名称要大写开头
export default BItem